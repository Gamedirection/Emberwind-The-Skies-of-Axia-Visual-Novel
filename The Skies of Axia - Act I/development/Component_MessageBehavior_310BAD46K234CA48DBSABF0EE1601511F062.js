
/**
* An enumeration of game message modes.
*
* ADV - Adventure Mode
* NVL - Novel Mode
*
* @typedef MessageMode
* @memberof vn
 */
var Component_MessageBehavior, MessageMode,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

MessageMode = (function() {
  function MessageMode() {}

  MessageMode.ADV = 0;

  MessageMode.NVL = 1;

  return MessageMode;

})();

vn.MessageMode = MessageMode;

Component_MessageBehavior = (function(superClass) {
  extend(Component_MessageBehavior, superClass);

  Component_MessageBehavior.objectCodecBlackList = ["onMessageWaiting", "onMessageFinish"];


  /**
  * Called if this object instance is restored from a data-bundle. It can be used
  * re-assign event-handler, anonymous functions, etc.
  * 
  * @method onDataBundleRestore.
  * @param Object data - The data-bundle
  * @param gs.ObjectCodecContext context - The codec-context.
   */

  Component_MessageBehavior.prototype.onDataBundleRestore = function(data, context) {
    this.tempSettings = GameManager.tempSettings;
    return this.setupEventHandlers();
  };


  /**
  * A behavior-component to define the behavior of a game-message.
  *
  * @module vn
  * @class Component_MessageBehavior
  * @extends gs.Component
  * @memberof vn
  * @constructor
   */

  function Component_MessageBehavior() {

    /**
    * Reference to temporary game settings.
    * @property settings
    * @type Object
    * @protected
     */
    this.tempSettings = GameManager.tempSettings;

    /**
    * Indicates if the message is currently waiting.
    * @property isWaiting
    * @type boolean
    * @readOnly
     */
    this.isWaiting = false;

    /**
    * Indicates if the message is currently running.
    * @property isRunning
    * @type boolean
    * @readOnly
     */
    this.isRunning = false;

    /**
    * Indicates if a voice is currently playing together with the message.
    * @property isVoicePlaying
    * @type boolean
    * @readOnly
     */
    this.isVoicePlaying = false;

    /**
    * Current message caret/cursor position.
    * @property caretPosition
    * @type gs.Point
    * @readOnly
     */
    this.caretPosition = new gs.Point(0, 0);

    /**
    * Current raw message text.
    * @property message
    * @type string
    * @readOnly
     */
    this.message = "";

    /**
    * All currently displayed raw messages.
    * @property messages
    * @type string[]
    * @readOnly
     */
    this.messages = [];

    /**
    * Voice associated with the current message.
    * @property voice
    * @type gs.AudioBufferReference
     */
    this.voice = null;

    /**
    * Indicates if current message is partial. DEPRECATED. Please do not use.
    * @property partial
    * @deprecated
    * @type boolean
    * @readOnly
     */
    this.partial = false;

    /**
    * Indicates if the message is currently waiting in live-preview.
    * @property waitingPreview
    * @type boolean
    * @readOnly
     */
    this.waitingPreview = false;

    /**
    * Indicates if the auto-message is enabled.
    * @property autoMessageEnabled
    * @type boolean
    * @readOnly
     */
    this.autoMessageEnabled = false;
    this.onMessageFinish = (function(_this) {
      return function(sender) {
        _this.object.events.emit("finish", _this);
        if (_this.object.settings.autoErase || _this.object.settings.paragraphSpacing > 0) {
          return _this.message = "";
        }
      };
    })(this);
    this.onMessageWaiting = (function(_this) {
      return function(sender) {
        if (!_this.object.textRenderer.isBatched() || !_this.object.textRenderer.isBatchInProgress()) {
          _this.object.textRenderer.waitAtEnd = !_this.partial;
          return _this.object.events.emit("waiting", _this);
        }
      };
    })(this);
  }


  /**
  * Reference to game settings.
  * @property settings
  * @type Object
  * @protected
   */

  Component_MessageBehavior.accessors("settings", {
    get: function() {
      return GameManager.settings;
    }

    /**
    * Adds event-handlers
    *
    * @method setupEventHandlers
     */
  });

  Component_MessageBehavior.prototype.setupEventHandlers = function() {
    this.object.events.offByOwner("messageFinish", this);
    this.object.events.offByOwner("messageWaiting", this);
    this.object.events.on("messageFinish", gs.CallBack("onMessageFinish", this), null, this);
    this.object.events.on("messageWaiting", gs.CallBack("onMessageWaiting", this), null, this);
    gs.GlobalEventManager.offByOwner("previewWaiting", this);
    gs.GlobalEventManager.offByOwner("previewRestart", this);
    gs.GlobalEventManager.on("previewWaiting", ((function(_this) {
      return function(sender) {
        return _this.waitingPreview = true;
      };
    })(this)), null, this);
    return gs.GlobalEventManager.on("previewRestart", ((function(_this) {
      return function(sender) {
        return _this.waitingPreview = false;
      };
    })(this)), null, this);
  };


  /**
  * Setup the component. Adds event handlers.
  *
  * @method setup
   */

  Component_MessageBehavior.prototype.setup = function() {
    return this.setupEventHandlers();
  };


  /**
  * Disposes the component.
  *
  * @method toDataBundle
   */

  Component_MessageBehavior.prototype.dispose = function() {
    Component_MessageBehavior.__super__.dispose.apply(this, arguments);
    gs.GlobalEventManager.offByOwner("previewWaiting", this);
    return gs.GlobalEventManager.offByOwner("previewRestart", this);
  };


  /**
  * Not implemented yet.
  *
  * @method toDataBundle
   */

  Component_MessageBehavior.prototype.toDataBundle = function() {};


  /**
  * Not implemented yet.
  *
  * @method restore
  * @param {Object} bundle - A data bundle.
   */

  Component_MessageBehavior.prototype.restore = function(bundle) {};


  /**
  * Action to show a game message.
  *
  * @method showMessage
  * @param {Object} sender - The sender of this action.
  * @param {Object} params - An object containing the necessary parameters.
   */

  Component_MessageBehavior.prototype.showMessage = function(sender, params) {
    gs.GameNotifier.postContextChange(lcsm(params.message));
    this.partial = params.partial;
    debugger;
    this.message += lcsm(params.message);
    this.addMessage(params.message, RecordManager.characters[params.characterId], this.object.messages.length > 0 && this.object.settings.paragraphSpacing > 0, !this.partial);
    if (this.object.textRenderer.isBatched()) {
      return this.object.textRenderer.waitAtEnd = true;
    } else {
      return this.object.textRenderer.waitAtEnd = !this.partial;
    }
  };


  /**
  * Deprecated. Not longer used.
  *
  * @method updateBitmap
   */

  Component_MessageBehavior.prototype.updateBitmap = function() {
    var ref;
    if (!this.object.bitmap || this.object.bitmap.width !== this.object.dstRect.width || this.object.bitmap.height !== this.object.dstRect.height) {
      if ((ref = this.object.bitmap) != null) {
        ref.dispose();
      }
      this.object.bitmap = new Bitmap(this.object.dstRect.width, this.object.dstRect.height);
      return this.object.bitmap.font = this.object.font;
    }
  };


  /**
  * Restores a NVL game message of an array of message-objects. That is
  * necessary to restore a NVL game message from a save-game.
  *
  * @method restoreMessages
  * @param {Array} messages - An array of messages to restore.
   */

  Component_MessageBehavior.prototype.restoreMessages = function(messages) {
    var i, len, message, ref, ref1;
    this.updateBitmap();
    this.clear();
    this.object.opacity = 255;
    this.object.srcRect = new Rect(0, 0, this.object.dstRect.width, this.object.dstRect.height);
    for (i = 0, len = messages.length; i < len; i++) {
      message = messages[i];
      this.object.font.color = new Color(((ref = message.character) != null ? ref.textColor : void 0) || Color.WHITE);
      this.object.textRenderer.drawFormattedTextImmediately(0, 0, this.object.dstRect.width, this.object.dstRect.height, lcsm((ref1 = message.text) != null ? ref1 : message), true);
    }
    return null;
  };


  /**
  * Adds a new message.
  * 
  * @method addMessage
  * @param {string} message - The message.
  * @param {Object} character - Database-Record of a character.
  * @param {boolean} newLine - Indicates if the message should make a line break.
   */

  Component_MessageBehavior.prototype.addMessage = function(message, character, newLine, waitAtEnd) {
    this.object.textRenderer.partialMessage = null;
    this.object.offset = {
      x: 0,
      y: 0
    };
    this.object.visible = true;
    this.object.messages.push({
      text: message,
      character: character
    });
    this.object.textRenderer.waitAtEnd = waitAtEnd;
    if (!this.object.settings.autoErase) {
      this.object.textRenderer.currentY += this.object.settings.paragraphSpacing;
    }
    if (newLine) {
      this.object.textRenderer.newLine();
    }
    this.updateBitmap();
    if ((character != null) && this.object.settings.useCharacterColor) {
      this.object.font.color = new Color((character != null ? character.textColor : void 0) || Color.WHITE);
    }
    this.object.opacity = 255;
    this.object.srcRect = new Rect(0, 0, this.object.dstRect.width, this.object.dstRect.height);
    this.update();
    return this.object.textRenderer.drawFormattedText(0, 0, this.object.dstRect.width, this.object.dstRect.height, message, true);
  };


  /**
  * Clears the game message by deleting/clearing all messages.
  *
  * @method clear
   */

  Component_MessageBehavior.prototype.clear = function() {
    this.object.textRenderer.clear();
    this.object.messages = [];
    return this.message = "";
  };


  /**
  * Closes the game message by making it invisible.
  *
  * @method close
   */

  Component_MessageBehavior.prototype.close = function() {
    return this.object.visible = false;
  };


  /**
  * Gets the duration of an associated voice or 0 if no voice is associated.
  *
  * @method voiceDuration
  * @return {number} The duration in frames.
   */

  Component_MessageBehavior.prototype.voiceDuration = function() {
    var duration;
    duration = 0;
    if ((this.voice != null) && (this.settings.autoMessage.waitForVoice || this.settings.timeMessageToVoice)) {
      duration = Math.round((this.voice.source.buffer.duration * (1.0 / this.voice.source.playbackRate.value)) * 1000 / 16.6);
    } else {
      duration = 0;
    }
    if (this.tempSettings.skip) {
      return 1;
    } else {
      return duration;
    }
  };


  /**
  * Gets the duration of rendering the game-message.
  *
  * @method messageDuration
  * @return {number} The duration in frames.
   */

  Component_MessageBehavior.prototype.messageDuration = function() {
    var duration;
    duration = this.object.textRenderer.calculateDuration();
    if (this.tempSettings.skip) {
      return 1;
    } else {
      return duration;
    }
  };


  /**
  * Gets the time between two messages in auto-read mode.
  *
  * @method autoMessageTime
  * @return {number} The time in frames.
   */

  Component_MessageBehavior.prototype.autoMessageTime = function() {
    if (this.tempSettings.skip) {
      return 1;
    } else {
      return Math.max(Math.round(this.settings.autoMessage.time * Graphics.frameRate), this.voiceDuration() - this.messageDuration());
    }
  };


  /**
  * Gets the current message speed.
  *
  * @method messageSpeed
  * @return {number} The message speed.
   */

  Component_MessageBehavior.prototype.messageSpeed = function() {
    return Math.max(11 - Math.round(GameManager.settings.messageSpeed * 2.5), 0);
  };


  /**
  * Checks if a mouse-button or key was pressed to continue with the message-rendering.
  *
  * @method actionTrigger
  * @return {boolean} If true, the an action-button or action-key is pressed.
   */

  Component_MessageBehavior.prototype.actionTrigger = function() {
    return (gs.ObjectManager.current.input && this.object.visible && this.object.dstRect.contains(Input.Mouse.x - this.object.origin.x, Input.Mouse.y - this.object.origin.y) && Input.Mouse.buttons[Input.Mouse.LEFT] === 2) || Input.trigger(Input.C);
  };

  Component_MessageBehavior.prototype.finish = function() {
    if ((this.object.voice != null) && GameManager.settings.skipVoiceOnAction) {
      return AudioManager.stopSound(this.object.voice.name);
    }
  };

  Component_MessageBehavior.prototype.erase = function() {
    var duration, fading;
    fading = GameManager.tempSettings.messageFading;
    duration = GameManager.tempSettings.skip ? 0 : fading.duration;
    return this.object.animator.disappear(fading.animation, fading.easing, duration, (function(_this) {
      return function() {
        SceneManager.scene.currentCharacter = {
          name: ""
        };
        _this.clear();
        return _this.object.visible = false;
      };
    })(this));
  };


  /**
  * FIXME: Deprecated? It is also a re-definition of gs.Component_Visual.updateOrigin.
  *
  * @method updateOrigin
   */

  Component_MessageBehavior.prototype.updateOrigin = function() {
    var ox, oy, p;
    ox = 0;
    oy = 0;
    if ((this.object.parent != null) && (this.object.parent.dstRect != null)) {
      p = this.object.parent;
      while ((p != null) && (p.dstRect != null)) {
        ox += p.dstRect.x;
        oy += p.dstRect.y;
        p = p.parent;
      }
    }
    this.object.origin.x = ox;
    return this.object.origin.y = oy;
  };


  /**
  * Updates the object. 
  *
  * @method updateObject
  * @private
   */

  Component_MessageBehavior.prototype.updateObject = function() {
    this.updateOrigin();
    if (this.tempSettings.skip && !this.waitingPreview) {
      return this.object.textRenderer.isWaiting = false;
    }
  };


  /**
  * Updates the message.
  *
  * @method updateMessage
  * @private
   */

  Component_MessageBehavior.prototype.updateMessage = function() {
    var ref;
    this.caretPosition = this.object.textRenderer.caretPosition;
    if (this.tempSettings.skip && (this.settings.allowSkipUnreadMessages || ((ref = GameManager.globalData.messages[this.message]) != null ? ref.read : void 0))) {
      this.object.textRenderer.drawImmediately = true;
      this.object.textRenderer.waitAtEnd = this.waitingPreview;
      return this.object.textRenderer.waitAtEndTime = 0;
    } else {
      this.updateSpeed();
      return this.updateAutoMessage();
    }
  };


  /**
  * Updates the speed of the message. That depends on game-settings if a message
  * is timed to its voice or not.
  *
  * @method updateSpeed
  * @private
   */

  Component_MessageBehavior.prototype.updateSpeed = function() {
    var voiceDuration;
    voiceDuration = this.voiceDuration();
    if (voiceDuration > 0 && this.settings.timeMessageToVoice) {
      return this.object.textRenderer.speed = voiceDuration / this.message.length;
    } else {
      return this.object.textRenderer.speed = this.messageSpeed();
    }
  };


  /**
  * Update auto-read mode.
  *
  * @method updateAutoMessage
  * @private
   */

  Component_MessageBehavior.prototype.updateAutoMessage = function() {
    if (this.settings.autoMessage.stopOnAction && this.actionTrigger()) {
      this.settings.autoMessage.enabled = false;
    }
    if (this.settings.autoMessage.enabled && !this.partial) {
      if (this.object.textRenderer.waitAtEnd) {
        this.object.textRenderer.isWaiting = false;
      }
      this.object.textRenderer.waitAtEndTime = this.autoMessageTime();
      this.object.textRenderer.waitAtEnd = false;
    } else if (this.autoMessageEnabled !== this.settings.autoMessage.enabled) {
      this.object.textRenderer.waitAtEnd = true;
      this.object.textRenderer.waitAtEndTime = 0;
    }
    return this.autoMessageEnabled = this.settings.autoMessage.enabled;
  };


  /*
  * Updates the game message behavior
  *
  * @method update
   */

  Component_MessageBehavior.prototype.update = function() {
    var ref, ref1, ref2, ref3, ref4, ref5;
    this.object.needsUpdate = true;
    this.updateObject();
    this.updateMessage();
    if (this.character !== this.object.character) {
      gs.GlobalEventManager.emit("talkingEnded", this, {
        character: this.character
      });
      this.character = this.object.character;
    }
    if (this.object.textRenderer.isWaiting !== this.isWaiting || this.object.textRenderer.isRunning !== this.isRunning || (((ref = this.voice) != null ? ref.playing : void 0) && (!((ref1 = this.object.character) != null ? ref1.timeTalkingToVoiceVolume : void 0) || this.voice.averageVolume > this.object.character.talkingVolume)) !== this.isVoicePlaying) {
      this.isWaiting = this.object.textRenderer.isWaiting;
      this.isRunning = this.object.textRenderer.isRunning;
      this.isVoicePlaying = ((ref2 = this.voice) != null ? ref2.playing : void 0) && (!((ref3 = this.object.character) != null ? ref3.timeTalkingToVoiceVolume : void 0) || this.voice.averageVolume > this.object.character.talkingVolume);
      if (!this.tempSettings.skip) {
        if ((ref4 = this.voice) != null ? ref4.playing : void 0) {
          if (!this.isVoicePlaying) {
            gs.GlobalEventManager.emit("talkingEnded", this, {
              character: this.object.character
            });
          } else {
            gs.GlobalEventManager.emit("talkingStarted", this, {
              character: this.object.character
            });
          }
        } else {
          if (this.isWaiting) {
            gs.GlobalEventManager.emit("talkingEnded", this, {
              character: this.object.character
            });
          } else if (this.isRunning) {
            gs.GlobalEventManager.emit("talkingStarted", this, {
              character: this.object.character
            });
          }
        }
      }
    }
    if ((this.object.layoutRect != null) && (((ref5 = this.object.parent) != null ? ref5.dstRect : void 0) != null)) {
      if (this.object.layoutRect.x) {
        this.object.dstRect.x = this.object.layoutRect.x(this.object.parent.dstRect.width);
      }
      if (this.object.layoutRect.y) {
        this.object.dstRect.y = this.object.layoutRect.y(this.object.parent.dstRect.height);
      }
      if (this.object.layoutRect.width) {
        this.object.dstRect.width = this.object.layoutRect.width(this.object.parent.dstRect.width);
      }
      if (this.object.layoutRect.height) {
        return this.object.dstRect.height = this.object.layoutRect.height(this.object.parent.dstRect.height);
      }
    }
  };

  return Component_MessageBehavior;

})(gs.Component);

vn.Component_MessageBehavior = Component_MessageBehavior;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFPQTs7Ozs7Ozs7O0FBQUEsSUFBQSxzQ0FBQTtFQUFBOzs7QUFTTTs7O0VBQ0YsV0FBQyxDQUFBLEdBQUQsR0FBTzs7RUFDUCxXQUFDLENBQUEsR0FBRCxHQUFPOzs7Ozs7QUFFWCxFQUFFLENBQUMsV0FBSCxHQUFpQjs7QUFHWDs7O0VBQ0YseUJBQUMsQ0FBQSxvQkFBRCxHQUF3QixDQUFDLGtCQUFELEVBQXFCLGlCQUFyQjs7O0FBRXhCOzs7Ozs7Ozs7c0NBUUEsbUJBQUEsR0FBcUIsU0FBQyxJQUFELEVBQU8sT0FBUDtJQUNqQixJQUFDLENBQUEsWUFBRCxHQUFnQixXQUFXLENBQUM7V0FDNUIsSUFBQyxDQUFBLGtCQUFELENBQUE7RUFGaUI7OztBQUlyQjs7Ozs7Ozs7OztFQVNhLG1DQUFBOztBQUNUOzs7Ozs7SUFNQSxJQUFDLENBQUEsWUFBRCxHQUFnQixXQUFXLENBQUM7O0FBRTVCOzs7Ozs7SUFNQSxJQUFDLENBQUEsU0FBRCxHQUFhOztBQUViOzs7Ozs7SUFNQSxJQUFDLENBQUEsU0FBRCxHQUFhOztBQUViOzs7Ozs7SUFNQSxJQUFDLENBQUEsY0FBRCxHQUFrQjs7QUFFbEI7Ozs7OztJQU1BLElBQUMsQ0FBQSxhQUFELEdBQXFCLElBQUEsRUFBRSxDQUFDLEtBQUgsQ0FBUyxDQUFULEVBQVksQ0FBWjs7QUFFckI7Ozs7OztJQU1BLElBQUMsQ0FBQSxPQUFELEdBQVc7O0FBRVg7Ozs7OztJQU1BLElBQUMsQ0FBQSxRQUFELEdBQVk7O0FBRVo7Ozs7O0lBS0EsSUFBQyxDQUFBLEtBQUQsR0FBUzs7QUFFVDs7Ozs7OztJQU9BLElBQUMsQ0FBQSxPQUFELEdBQVc7O0FBRVg7Ozs7OztJQU1BLElBQUMsQ0FBQSxjQUFELEdBQWtCOztBQUVsQjs7Ozs7O0lBTUEsSUFBQyxDQUFBLGtCQUFELEdBQXNCO0lBRXRCLElBQUMsQ0FBQSxlQUFELEdBQW1CLENB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cUIsSUFBQyxDQUFBLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQTVDLEVBQWpEOztNQUNBLElBQUcsSUFBQyxDQUFBLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBdEI7UUFBNkIsSUFBQyxDQUFBLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBaEIsR0FBb0IsSUFBQyxDQUFBLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBbkIsQ0FBcUIsSUFBQyxDQUFBLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQTVDLEVBQWpEOztNQUNBLElBQUcsSUFBQyxDQUFBLE1BQU0sQ0FBQyxVQUFVLENBQUMsS0FBdEI7UUFBaUMsSUFBQyxDQUFBLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBaEIsR0FBd0IsSUFBQyxDQUFBLE1BQU0sQ0FBQyxVQUFVLENBQUMsS0FBbkIsQ0FBeUIsSUFBQyxDQUFBLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQWhELEVBQXpEOztNQUNBLElBQUcsSUFBQyxDQUFBLE1BQU0sQ0FBQyxVQUFVLENBQUMsTUFBdEI7ZUFBa0MsSUFBQyxDQUFBLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBaEIsR0FBeUIsSUFBQyxDQUFBLE1BQU0sQ0FBQyxVQUFVLENBQUMsTUFBbkIsQ0FBMEIsSUFBQyxDQUFBLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQWpELEVBQTNEO09BSko7O0VBMUJJOzs7O0dBL2I0QixFQUFFLENBQUM7O0FBOGQzQyxFQUFFLENBQUMseUJBQUgsR0FBK0IiLCJzb3VyY2VzQ29udGVudCI6WyIjID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiNcbiMgICBTY3JpcHQ6IENvbXBvbmVudF9NZXNzYWdlQmVoYXZpb3JcbiNcbiMgICAkJENPUFlSSUdIVCQkXG4jXG4jID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiMjIypcbiogQW4gZW51bWVyYXRpb24gb2YgZ2FtZSBtZXNzYWdlIG1vZGVzLlxuKlxuKiBBRFYgLSBBZHZlbnR1cmUgTW9kZVxuKiBOVkwgLSBOb3ZlbCBNb2RlXG4qXG4qIEB0eXBlZGVmIE1lc3NhZ2VNb2RlXG4qIEBtZW1iZXJvZiB2blxuIyMjXG5jbGFzcyBNZXNzYWdlTW9kZVxuICAgIEBBRFYgPSAwXG4gICAgQE5WTCA9IDFcbiAgICBcbnZuLk1lc3NhZ2VNb2RlID0gTWVzc2FnZU1vZGVcblxuXG5jbGFzcyBDb21wb25lbnRfTWVzc2FnZUJlaGF2aW9yIGV4dGVuZHMgZ3MuQ29tcG9uZW50XG4gICAgQG9iamVjdENvZGVjQmxhY2tMaXN0ID0gW1wib25NZXNzYWdlV2FpdGluZ1wiLCBcIm9uTWVzc2FnZUZpbmlzaFwiXVxuICAgIFxuICAgICMjIypcbiAgICAqIENhbGxlZCBpZiB0aGlzIG9iamVjdCBpbnN0YW5jZSBpcyByZXN0b3JlZCBmcm9tIGEgZGF0YS1idW5kbGUuIEl0IGNhbiBiZSB1c2VkXG4gICAgKiByZS1hc3NpZ24gZXZlbnQtaGFuZGxlciwgYW5vbnltb3VzIGZ1bmN0aW9ucywgZXRjLlxuICAgICogXG4gICAgKiBAbWV0aG9kIG9uRGF0YUJ1bmRsZVJlc3RvcmUuXG4gICAgKiBAcGFyYW0gT2JqZWN0IGRhdGEgLSBUaGUgZGF0YS1idW5kbGVcbiAgICAqIEBwYXJhbSBncy5PYmplY3RDb2RlY0NvbnRleHQgY29udGV4dCAtIFRoZSBjb2RlYy1jb250ZXh0LlxuICAgICMjI1xuICAgIG9uRGF0YUJ1bmRsZVJlc3RvcmU6IChkYXRhLCBjb250ZXh0KSAtPlxuICAgICAgICBAdGVtcFNldHRpbmdzID0gR2FtZU1hbmFnZXIudGVtcFNldHRpbmdzXG4gICAgICAgIEBzZXR1cEV2ZW50SGFuZGxlcnMoKVxuICAgICAgICBcbiAgICAjIyMqXG4gICAgKiBBIGJlaGF2aW9yLWNvbXBvbmVudCB0byBkZWZpbmUgdGhlIGJlaGF2aW9yIG9mIGEgZ2FtZS1tZXNzYWdlLlxuICAgICpcbiAgICAqIEBtb2R1bGUgdm5cbiAgICAqIEBjbGFzcyBDb21wb25lbnRfTWVzc2FnZUJlaGF2aW9yXG4gICAgKiBAZXh0ZW5kcyBncy5Db21wb25lbnRcbiAgICAqIEBtZW1iZXJvZiB2blxuICAgICogQGNvbnN0cnVjdG9yXG4gICAgIyMjXG4gICAgY29uc3RydWN0b3I6IC0+XG4gICAgICAgICMjIypcbiAgICAgICAgKiBSZWZlcmVuY2UgdG8gdGVtcG9yYXJ5IGdhbWUgc2V0dGluZ3MuXG4gICAgICAgICogQHByb3BlcnR5IHNldHRpbmdzXG4gICAgICAgICogQHR5cGUgT2JqZWN0XG4gICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAjIyNcbiAgICAgICAgQHRlbXBTZXR0aW5ncyA9IEdhbWVNYW5hZ2VyLnRlbXBTZXR0aW5nc1xuICAgICAgICBcbiAgICAgICAgIyMjKlxuICAgICAgICAqIEluZGljYXRlcyBpZiB0aGUgbWVzc2FnZSBpcyBjdXJyZW50bHkgd2FpdGluZy5cbiAgICAgICAgKiBAcHJvcGVydHkgaXNXYWl0aW5nXG4gICAgICAgICogQHR5cGUgYm9vbGVhblxuICAgICAgICAqIEByZWFkT25seVxuICAgICAgICAjIyNcbiAgICAgICAgQGlzV2FpdGluZyA9IG5vXG4gICAgICAgIFxuICAgICAgICAjIyMqXG4gICAgICAgICogSW5kaWNhdGVzIGlmIHRoZSBtZXNzYWdlIGlzIGN1cnJlbnRseSBydW5uaW5nLlxuICAgICAgICAqIEBwcm9wZXJ0eSBpc1J1bm5pbmdcbiAgICAgICAgKiBAdHlwZSBib29sZWFuXG4gICAgICAgICogQHJlYWRPbmx5XG4gICAgICAgICMjI1xuICAgICAgICBAaXNSdW5uaW5nID0gbm9cbiAgICAgICAgXG4gICAgICAgICMjIypcbiAgICAgICAgKiBJbmRpY2F0ZXMgaWYgYSB2b2ljZSBpcyBjdXJyZW50bHkgcGxheWluZyB0b2dldGhlciB3aXRoIHRoZSBtZXNzYWdlLlxuICAgICAgICAqIEBwcm9wZXJ0eSBpc1ZvaWNlUGxheWluZ1xuICAgICAgICAqIEB0eXBlIGJvb2xlYW5cbiAgICAgICAgKiBAcmVhZE9ubHlcbiAgICAgICAgIyMjXG4gICAgICAgIEBpc1ZvaWNlUGxheWluZyA9IG5vXG4gICAgICAgIFxuICAgICAgICAjIyMqXG4gICAgICAgICogQ3VycmVudCBtZXNzYWdlIGNhcmV0L2N1cnNvciBwb3NpdGlvbi5cbiAgICAgICAgKiBAcHJvcGVydHkgY2FyZXRQb3NpdGlvblxuICAgICAgICAqIEB0eXBlIGdzLlBvaW50XG4gICAgICAgICogQHJlYWRPbmx5XG4gICAgICAgICMjI1xuICAgICAgICBAY2FyZXRQb3NpdGlvbiA9IG5ldyBncy5Qb2ludCgwLCAwKVxuICAgICAgICBcbiAgICAgICAgIyMjKlxuICAgICAgICAqIEN1cnJlbnQgcmF3IG1lc3NhZ2UgdGV4dC5cbiAgICAgICAgKiBAcHJvcGVydHkgbWVzc2FnZVxuICAgICAgICAqIEB0eXBlIHN0cmluZ1xuICAgICAgICAqIEByZWFkT25seVxuICAgICAgICAjIyNcbiAgICAgICAgQG1lc3NhZ2UgPSBcIlwiXG4gICAgICAgIFxuICAgICAgICAjIyMqXG4gICAgICAgICogQWxsIGN1cnJlbnRseSBkaXNwbGF5ZWQgcmF3IG1lc3NhZ2VzLlxuICAgICAgICAqIEBwcm9wZXJ0eSBtZXNzYWdlc1xuICAgICAgICAqIEB0eXBlIHN0cmluZ1tdXG4gICAgICAgICogQHJlYWRPbmx5XG4gICAgICAgICMjI1xuICAgICAgICBAbWVzc2FnZXMgPSBbXVxuICAgICAgICBcbiAgICAgICAgIyMjKlxuICAgICAgICAqIFZvaWNlIGFzc29jaWF0ZWQgd2l0aCB0aGUgY3VycmVudCBtZXNzYWdlLlxuICAgICAgICAqIEBwcm9wZXJ0eSB2b2ljZVxuICAgICAgICAqIEB0eXBlIGdzLkF1ZGlvQnVmZmVyUmVmZXJlbmNlXG4gICAgICAgICMjI1xuICAgICAgICBAdm9pY2UgPSBudWxsXG4gICAgICAgIFxuICAgICAgICAjIyMqXG4gICAgICAgICogSW5kaWNhdGVzIGlmIGN1cnJlbnQgbWVzc2FnZSBpcyBwYXJ0aWFsLiBERVBSRUNBVEVELiBQbGVhc2UgZG8gbm90IHVzZS5cbiAgICAgICAgKiBAcHJvcGVydHkgcGFydGlhbFxuICAgICAgICAqIEBkZXByZWNhdGVkXG4gICAgICAgICogQHR5cGUgYm9vbGVhblxuICAgICAgICAqIEByZWFkT25seVxuICAgICAgICAjIyNcbiAgICAgICAgQHBhcnRpYWwgPSBub1xuICAgICAgICBcbiAgICAgICAgIyMjKlxuICAgICAgICAqIEluZGljYXRlcyBpZiB0aGUgbWVzc2FnZSBpcyBjdXJyZW50bHkgd2FpdGluZyBpbiBsaXZlLXByZXZpZXcuXG4gICAgICAgICogQHByb3BlcnR5IHdhaXRpbmdQcmV2aWV3XG4gICAgICAgICogQHR5cGUgYm9vbGVhblxuICAgICAgICAqIEByZWFkT25seVxuICAgICAgICAjIyNcbiAgICAgICAgQHdhaXRpbmdQcmV2aWV3ID0gbm9cbiAgICAgICAgXG4gICAgICAgICMjIypcbiAgICAgICAgKiBJbmRpY2F0ZXMgaWYgdGhlIGF1dG8tbWVzc2FnZSBpcyBlbmFibGVkLlxuICAgICAgICAqIEBwcm9wZXJ0eSBhdXRvTWVzc2FnZUVuYWJsZWRcbiAgICAgICAgKiBAdHlwZSBib29sZWFuXG4gICAgICAgICogQHJlYWRPbmx5XG4gICAgICAgICMjI1xuICAgICAgICBAYXV0b01lc3NhZ2VFbmFibGVkID0gbm9cbiAgICAgIFxuICAgICAgICBAb25NZXNzYWdlRmluaXNoID0gKHNlbmRlcikgPT5cbiAgICAgICAgICAgIEBvYmplY3QuZXZlbnRzLmVtaXQgXCJmaW5pc2hcIiwgdGhpc1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiBAb2JqZWN0LnNldHRpbmdzLmF1dG9FcmFzZSBvciBAb2JqZWN0LnNldHRpbmdzLnBhcmFncmFwaFNwYWNpbmcgPiAwXG4gICAgICAgICAgICAgICAgQG1lc3NhZ2UgPSBcIlwiXG4gICAgICAgICAgICBcbiAgICAgICAgQG9uTWVzc2FnZVdhaXRpbmcgPSAoc2VuZGVyKSA9PlxuICAgICAgICAgICAgaWYgIUBvYmplY3QudGV4dFJlbmRlcmVyLmlzQmF0Y2hlZCgpIG9yICFAb2JqZWN0LnRleHRSZW5kZXJlci5pc0JhdGNoSW5Qcm9ncmVzcygpXG4gICAgICAgICAgICAgICAgQG9iamVjdC50ZXh0UmVuZGVyZXIud2FpdEF0RW5kID0gIUBwYXJ0aWFsXG4gICAgICAgICAgICAgICAgQG9iamVjdC5ldmVudHMuZW1pdCBcIndhaXRpbmdcIiwgdGhpc1xuICAgICAgICAgICAgICAgIFxuICAgICMjIypcbiAgICAqIFJlZmVyZW5jZSB0byBnYW1lIHNldHRpbmdzLlxuICAgICogQHByb3BlcnR5IHNldHRpbmdzXG4gICAgKiBAdHlwZSBPYmplY3RcbiAgICAqIEBwcm90ZWN0ZWRcbiAgICAjIyNcbiAgICBAYWNjZXNzb3JzIFwic2V0dGluZ3NcIiwgZ2V0OiAtPiBHYW1lTWFuYWdlci5zZXR0aW5nc1xuICAgIFxuICAgICMjIypcbiAgICAqIEFkZHMgZXZlbnQtaGFuZGxlcnNcbiAgICAqXG4gICAgKiBAbWV0aG9kIHNldHVwRXZlbnRIYW5kbGVyc1xuICAgICMjIyBcbiAgICBzZXR1cEV2ZW50SGFuZGxlcnM6IC0+XG4gICAgICAgIEBvYmplY3QuZXZlbnRzLm9mZkJ5T3duZXIoXCJtZXNzYWdlRmluaXNoXCIsIHRoaXMpXG4gICAgICAgIEBvYmplY3QuZXZlbnRzLm9mZkJ5T3duZXIoXCJtZXNzYWdlV2FpdGluZ1wiLCB0aGlzKVxuICAgICAgICBcbiAgICAgICAgQG9iamVjdC5ldmVudHMub24gXCJtZXNzYWdlRmluaXNoXCIsIGdzLkNhbGxCYWNrKFwib25NZXNzYWdlRmluaXNoXCIsIHRoaXMpLCBudWxsLCB0aGlzXG4gICAgICAgIEBvYmplY3QuZXZlbnRzLm9uIFwibWVzc2FnZVdhaXRpbmdcIiwgZ3MuQ2FsbEJhY2soXCJvbk1lc3NhZ2VXYWl0aW5nXCIsIHRoaXMpLCBudWxsLCB0aGlzXG4gICAgICAgICAgICBcbiAgICAgICAgZ3MuR2xvYmFsRXZlbnRNYW5hZ2VyLm9mZkJ5T3duZXIoXCJwcmV2aWV3V2FpdGluZ1wiLCB0aGlzKVxuICAgICAgICBncy5HbG9iYWxFdmVudE1hbmFnZXIub2ZmQnlPd25lcihcInByZXZpZXdSZXN0YXJ0XCIsIHRoaXMpXG4gICAgICAgICAgICAgICAgXG4gICAgICAgIGdzLkdsb2JhbEV2ZW50TWFuYWdlci5vbiBcInByZXZpZXdXYWl0aW5nXCIsICgoc2VuZGVyKSA9PlxuICAgICAgICAgICAgQHdhaXRpbmdQcmV2aWV3ID0geWVzXG4gICAgICAgICksIG51bGwsIHRoaXNcbiAgICAgICAgXG4gICAgICAgIGdzLkdsb2JhbEV2ZW50TWFuYWdlci5vbiBcInByZXZpZXdSZXN0YXJ0XCIsICgoc2VuZGVyKSA9PlxuICAgICAgICAgICAgQHdhaXRpbmdQcmV2aWV3ID0gbm9cbiAgICAgICAgKSwgbnVsbCwgdGhpc1xuICAgICAgICBcbiAgICAjIyMqXG4gICAgKiBTZXR1cCB0aGUgY29tcG9uZW50LiBBZGRzIGV2ZW50IGhhbmRsZXJzLlxuICAgICpcbiAgICAqIEBtZXRob2Qgc2V0dXBcbiAgICAjIyNcbiAgICBzZXR1cDogLT5cbiAgICAgICAgQHNldHVwRXZlbnRIYW5kbGVycygpXG4gICAgIFxuICAgICMjIypcbiAgICAqIERpc3Bvc2VzIHRoZSBjb21wb25lbnQuXG4gICAgKlxuICAgICogQG1ldGhvZCB0b0RhdGFCdW5kbGVcbiAgICAjIyMgICBcbiAgICBkaXNwb3NlOiAtPlxuICAgICAgICBzdXBlclxuICAgICAgICBcbiAgICAgICAgZ3MuR2xvYmFsRXZlbnRNYW5hZ2VyLm9mZkJ5T3duZXIoXCJwcmV2aWV3V2FpdGluZ1wiLCB0aGlzKVxuICAgICAgICBncy5HbG9iYWxFdmVudE1hbmFnZXIub2ZmQnlPd25lcihcInByZXZpZXdSZXN0YXJ0XCIsIHRoaXMpXG4gICAgICAgICAgICAgICAgXG4gICAgIyMjKlxuICAgICogTm90IGltcGxlbWVudGVkIHlldC5cbiAgICAqXG4gICAgKiBAbWV0aG9kIHRvRGF0YUJ1bmRsZVxuICAgICMjI1xuICAgIHRvRGF0YUJ1bmRsZTogLT5cbiAgICAjIyMqXG4gICAgKiBOb3QgaW1wbGVtZW50ZWQgeWV0LlxuICAgICpcbiAgICAqIEBtZXRob2QgcmVzdG9yZVxuICAgICogQHBhcmFtIHtPYmplY3R9IGJ1bmRsZSAtIEEgZGF0YSBidW5kbGUuXG4gICAgIyMjICAgIFxuICAgIHJlc3RvcmU6IChidW5kbGUpIC0+XG4gICAgICAgIFxuICAgICMjIypcbiAgICAqIEFjdGlvbiB0byBzaG93IGEgZ2FtZSBtZXNzYWdlLlxuICAgICpcbiAgICAqIEBtZXRob2Qgc2hvd01lc3NhZ2VcbiAgICAqIEBwYXJhbSB7T2JqZWN0fSBzZW5kZXIgLSBUaGUgc2VuZGVyIG9mIHRoaXMgYWN0aW9uLlxuICAgICogQHBhcmFtIHtPYmplY3R9IHBhcmFtcyAtIEFuIG9iamVjdCBjb250YWluaW5nIHRoZSBuZWNlc3NhcnkgcGFyYW1ldGVycy5cbiAgICAjIyNcbiAgICBzaG93TWVzc2FnZTogKHNlbmRlciwgcGFyYW1zKSAtPlxuICAgICAgICBncy5HYW1lTm90aWZpZXIucG9zdENvbnRleHRDaGFuZ2UobGNzbShwYXJhbXMubWVzc2FnZSkpXG4gICAgICAgIFxuICAgICAgICBAcGFydGlhbCA9IHBhcmFtcy5wYXJ0aWFsXG4gICAgICAgIGRlYnVnZ2VyXG4gICAgICAgIEBtZXNzYWdlICs9IGxjc20ocGFyYW1zLm1lc3NhZ2UpXG4gICAgICAgIEBhZGRNZXNzYWdlKHBhcmFtcy5tZXNzYWdlLCBSZWNvcmRNYW5hZ2VyLmNoYXJhY3RlcnNbcGFyYW1zLmNoYXJhY3RlcklkXSwgQG9iamVjdC5tZXNzYWdlcy5sZW5ndGggPiAwIGFuZCBAb2JqZWN0LnNldHRpbmdzLnBhcmFncmFwaFNwYWNpbmcgPiAwLCAhQHBhcnRpYWwpXG4gICAgICAgIFxuICAgICAgICBpZiBAb2JqZWN0LnRleHRSZW5kZXJlci5pc0JhdGNoZWQoKVxuICAgICAgICAgICAgQG9iamVjdC50ZXh0UmVuZGVyZXIud2FpdEF0RW5kID0geWVzXG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIEBvYmplY3QudGV4dFJlbmRlcmVyLndhaXRBdEVuZCA9ICFAcGFydGlhbFxuICAgICAgICAgICAgXG4gICAgICAgIFxuICAgICMjIypcbiAgICAqIERlcHJlY2F0ZWQuIE5vdCBsb25nZXIgdXNlZC5cbiAgICAqXG4gICAgKiBAbWV0aG9kIHVwZGF0ZUJpdG1hcFxuICAgICMjI1xuICAgIHVwZGF0ZUJpdG1hcDogLT5cbiAgICAgICAgaWYgIUBvYmplY3QuYml0bWFwIG9yIEBvYmplY3QuYml0bWFwLndpZHRoICE9IEBvYmplY3QuZHN0UmVjdC53aWR0aCBvciBAb2JqZWN0LmJpdG1hcC5oZWlnaHQgIT0gQG9iamVjdC5kc3RSZWN0LmhlaWdodFxuICAgICAgICAgICAgQG9iamVjdC5iaXRtYXA/LmRpc3Bvc2UoKVxuICAgICAgICAgICAgQG9iamVjdC5iaXRtYXAgPSBuZXcgQml0bWFwKEBvYmplY3QuZHN0UmVjdC53aWR0aCwgQG9iamVjdC5kc3RSZWN0LmhlaWdodClcbiAgICAgICAgICAgIEBvYmplY3QuYml0bWFwLmZvbnQgPSBAb2JqZWN0LmZvbnRcbiAgICAgICAgICBcbiAgICAjIyMqXG4gICAgKiBSZXN0b3JlcyBhIE5WTCBnYW1lIG1lc3NhZ2Ugb2YgYW4gYXJyYXkgb2YgbWVzc2FnZS1vYmplY3RzLiBUaGF0IGlzXG4gICAgKiBuZWNlc3NhcnkgdG8gcmVzdG9yZSBhIE5WTCBnYW1lIG1lc3NhZ2UgZnJvbSBhIHNhdmUtZ2FtZS5cbiAgICAqXG4gICAgKiBAbWV0aG9kIHJlc3RvcmVNZXNzYWdlc1xuICAgICogQHBhcmFtIHtBcnJheX0gbWVzc2FnZXMgLSBBbiBhcnJheSBvZiBtZXNzYWdlcyB0byByZXN0b3JlLlxuICAgICMjI1xuICAgIHJlc3RvcmVNZXNzYWdlczogKG1lc3NhZ2VzKSAtPlxuICAgICAgICBAdXBkYXRlQml0bWFwKClcbiAgICAgICAgQGNsZWFyKClcbiAgICAgICAgXG4gICAgICAgIEBvYmplY3Qub3BhY2l0eSA9IDI1NVxuICAgICAgICBAb2JqZWN0LnNyY1JlY3QgPSBuZXcgUmVjdCgwLCAwLCBAb2JqZWN0LmRzdFJlY3Qud2lkdGgsIEBvYmplY3QuZHN0UmVjdC5oZWlnaHQpXG4gICAgICAgIFxuICAgICAgICBmb3IgbWVzc2FnZSBpbiBtZXNzYWdlc1xuICAgICAgICAgICAgQG9iamVjdC5mb250LmNvbG9yID0gbmV3IENvbG9yKG1lc3NhZ2UuY2hhcmFjdGVyPy50ZXh0Q29sb3IgfHwgQ29sb3IuV0hJVEUpXG4gICAgICAgICAgICBAb2JqZWN0LnRleHRSZW5kZXJlci5kcmF3Rm9ybWF0dGVkVGV4dEltbWVkaWF0ZWx5KDAsIDAsIEBvYmplY3QuZHN0UmVjdC53aWR0aCwgQG9iamVjdC5kc3RSZWN0LmhlaWdodCwgbGNzbShtZXNzYWdlLnRleHQgPyBtZXNzYWdlKSwgeWVzKVxuXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICAgIFxuICAgICMjIypcbiAgICAqIEFkZHMgYSBuZXcgbWVzc2FnZS5cbiAgICAqIFxuICAgICogQG1ldGhvZCBhZGRNZXNzYWdlXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZSAtIFRoZSBtZXNzYWdlLlxuICAgICogQHBhcmFtIHtPYmplY3R9IGNoYXJhY3RlciAtIERhdGFiYXNlLVJlY29yZCBvZiBhIGNoYXJhY3Rlci5cbiAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gbmV3TGluZSAtIEluZGljYXRlcyBpZiB0aGUgbWVzc2FnZSBzaG91bGQgbWFrZSBhIGxpbmUgYnJlYWsuXG4gICAgIyMjXG4gICAgYWRkTWVzc2FnZTogKG1lc3NhZ2UsIGNoYXJhY3RlciwgbmV3TGluZSwgd2FpdEF0RW5kKSAtPlxuICAgICAgICBAb2JqZWN0LnRleHRSZW5kZXJlci5wYXJ0aWFsTWVzc2FnZSA9IG51bGxcbiAgICAgICAgQG9iamVjdC5vZmZzZXQgPSB4OiAwLCB5OiAwXG4gICAgICAgIEBvYmplY3QudmlzaWJsZSA9IHllc1xuICAgICAgICBcbiAgICAgICAgQG9iamVjdC5tZXNzYWdlcy5wdXNoKHsgdGV4dDogbWVzc2FnZSwgY2hhcmFjdGVyOiBjaGFyYWN0ZXJ9KVxuICAgICAgICBcbiAgICAgICAgQG9iamVjdC50ZXh0UmVuZGVyZXIud2FpdEF0RW5kID0gd2FpdEF0RW5kXG4gICAgICAgIGlmIG5vdCBAb2JqZWN0LnNldHRpbmdzLmF1dG9FcmFzZVxuICAgICAgICAgICAgQG9iamVjdC50ZXh0UmVuZGVyZXIuY3VycmVudFkgKz0gQG9iamVjdC5zZXR0aW5ncy5wYXJhZ3JhcGhTcGFjaW5nXG4gICAgICAgIGlmIG5ld0xpbmVcbiAgICAgICAgICAgIEBvYmplY3QudGV4dFJlbmRlcmVyLm5ld0xpbmUoKVxuICAgICAgICBAdXBkYXRlQml0bWFwKClcbiAgICAgICAgICAgIFxuICAgICAgICBpZiBjaGFyYWN0ZXI/IGFuZCBAb2JqZWN0LnNldHRpbmdzLnVzZUNoYXJhY3RlckNvbG9yXG4gICAgICAgICAgICBAb2JqZWN0LmZvbnQuY29sb3IgPSBuZXcgQ29sb3IoY2hhcmFjdGVyPy50ZXh0Q29sb3IgfHwgQ29sb3IuV0hJVEUpXG4gICAgICAgICAgICBcbiAgICAgICAgQG9iamVjdC5vcGFjaXR5ID0gMjU1XG4gICAgICAgIEBvYmplY3Quc3JjUmVjdCA9IG5ldyBSZWN0KDAsIDAsIEBvYmplY3QuZHN0UmVjdC53aWR0aCwgQG9iamVjdC5kc3RSZWN0LmhlaWdodClcbiAgICAgXG4gICAgICAgIEB1cGRhdGUoKVxuICAgICAgICBAb2JqZWN0LnRleHRSZW5kZXJlci5kcmF3Rm9ybWF0dGVkVGV4dCgwLCAwLCBAb2JqZWN0LmRzdFJlY3Qud2lkdGgsIEBvYmplY3QuZHN0UmVjdC5oZWlnaHQsIG1lc3NhZ2UsIHllcylcblxuICAgICMjIypcbiAgICAqIENsZWFycyB0aGUgZ2FtZSBtZXNzYWdlIGJ5IGRlbGV0aW5nL2NsZWFyaW5nIGFsbCBtZXNzYWdlcy5cbiAgICAqXG4gICAgKiBAbWV0aG9kIGNsZWFyXG4gICAgIyMjXG4gICAgY2xlYXI6IC0+IFxuICAgICAgICBAb2JqZWN0LnRleHRSZW5kZXJlci5jbGVhcigpXG4gICAgICAgIEBvYmplY3QubWVzc2FnZXMgPSBbXVxuICAgICAgICBAbWVzc2FnZSA9IFwiXCJcbiAgICAgICAgXG4gICAgIyMjKlxuICAgICogQ2xvc2VzIHRoZSBnYW1lIG1lc3NhZ2UgYnkgbWFraW5nIGl0IGludmlzaWJsZS5cbiAgICAqXG4gICAgKiBAbWV0aG9kIGNsb3NlXG4gICAgIyMjXG4gICAgY2xvc2U6IC0+IFxuICAgICAgICBAb2JqZWN0LnZpc2libGUgPSBub1xuICAgIFxuICAgICMjIypcbiAgICAqIEdldHMgdGhlIGR1cmF0aW9uIG9mIGFuIGFzc29jaWF0ZWQgdm9pY2Ugb3IgMCBpZiBubyB2b2ljZSBpcyBhc3NvY2lhdGVkLlxuICAgICpcbiAgICAqIEBtZXRob2Qgdm9pY2VEdXJhdGlvblxuICAgICogQHJldHVybiB7bnVtYmVyfSBUaGUgZHVyYXRpb24gaW4gZnJhbWVzLlxuICAgICMjI1xuICAgIHZvaWNlRHVyYXRpb246IC0+XG4gICAgICAgIGR1cmF0aW9uID0gMFxuICAgICAgICBpZiBAdm9pY2U/IGFuZCAoQHNldHRpbmdzLmF1dG9NZXNzYWdlLndhaXRGb3JWb2ljZSBvciBAc2V0dGluZ3MudGltZU1lc3NhZ2VUb1ZvaWNlKVxuICAgICAgICAgICAgZHVyYXRpb24gPSBNYXRoLnJvdW5kKChAdm9pY2Uuc291cmNlLmJ1ZmZlci5kdXJhdGlvbiAqICgxLjAgLyBAdm9pY2Uuc291cmNlLnBsYXliYWNrUmF0ZS52YWx1ZSkpICogMTAwMCAvIDE2LjYpXG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIGR1cmF0aW9uID0gMFxuICAgICAgICAgICAgXG4gICAgICAgIHJldHVybiBpZiBAdGVtcFNldHRpbmdzLnNraXAgdGhlbiAxIGVsc2UgZHVyYXRpb25cbiAgICAgICAgXG4gICAgIyMjKlxuICAgICogR2V0cyB0aGUgZHVyYXRpb24gb2YgcmVuZGVyaW5nIHRoZSBnYW1lLW1lc3NhZ2UuXG4gICAgKlxuICAgICogQG1ldGhvZCBtZXNzYWdlRHVyYXRpb25cbiAgICAqIEByZXR1cm4ge251bWJlcn0gVGhlIGR1cmF0aW9uIGluIGZyYW1lcy5cbiAgICAjIyNcbiAgICBtZXNzYWdlRHVyYXRpb246IC0+IFxuICAgICAgICBkdXJhdGlvbiA9IEBvYmplY3QudGV4dFJlbmRlcmVyLmNhbGN1bGF0ZUR1cmF0aW9uKClcbiAgICAgICAgXG4gICAgICAgIHJldHVybiBpZiBAdGVtcFNldHRpbmdzLnNraXAgdGhlbiAxIGVsc2UgZHVyYXRpb25cbiAgICAgICAgXG4gICAgIyMjKlxuICAgICogR2V0cyB0aGUgdGltZSBiZXR3ZWVuIHR3byBtZXNzYWdlcyBpbiBhdXRvLXJlYWQgbW9kZS5cbiAgICAqXG4gICAgKiBAbWV0aG9kIGF1dG9NZXNzYWdlVGltZVxuICAgICogQHJldHVybiB7bnVtYmVyfSBUaGUgdGltZSBpbiBmcmFtZXMuXG4gICAgIyMjXG4gICAgYXV0b01lc3NhZ2VUaW1lOiAtPiBcbiAgICAgICAgaWYgQHRlbXBTZXR0aW5ncy5za2lwXG4gICAgICAgICAgICByZXR1cm4gMVxuICAgICAgICBlbHNlXG4gICAgICAgICAgICByZXR1cm4gTWF0aC5tYXgoTWF0aC5yb3VuZChAc2V0dGluZ3MuYXV0b01lc3NhZ2UudGltZSAqIEdyYXBoaWNzLmZyYW1lUmF0ZSksIEB2b2ljZUR1cmF0aW9uKCkgLSBAbWVzc2FnZUR1cmF0aW9uKCkpXG4gICAgXG4gICAgIyMjKlxuICAgICogR2V0cyB0aGUgY3VycmVudCBtZXNzYWdlIHNwZWVkLlxuICAgICpcbiAgICAqIEBtZXRob2QgbWVzc2FnZVNwZWVkXG4gICAgKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBtZXNzYWdlIHNwZWVkLlxuICAgICMjI1xuICAgIG1lc3NhZ2VTcGVlZDogLT4gTWF0aC5tYXgoMTEgLSBNYXRoLnJvdW5kKEdhbWVNYW5hZ2VyLnNldHRpbmdzLm1lc3NhZ2VTcGVlZCAqIDIuNSksIDApXG4gICAgXG4gICAgIyMjKlxuICAgICogQ2hlY2tzIGlmIGEgbW91c2UtYnV0dG9uIG9yIGtleSB3YXMgcHJlc3NlZCB0byBjb250aW51ZSB3aXRoIHRoZSBtZXNzYWdlLXJlbmRlcmluZy5cbiAgICAqXG4gICAgKiBAbWV0aG9kIGFjdGlvblRyaWdnZXJcbiAgICAqIEByZXR1cm4ge2Jvb2xlYW59IElmIHRydWUsIHRoZSBhbiBhY3Rpb24tYnV0dG9uIG9yIGFjdGlvbi1rZXkgaXMgcHJlc3NlZC5cbiAgICAjIyNcbiAgICBhY3Rpb25UcmlnZ2VyOiAtPiAoZ3MuT2JqZWN0TWFuYWdlci5jdXJyZW50LmlucHV0IGFuZCBAb2JqZWN0LnZpc2libGUgYW5kIEBvYmplY3QuZHN0UmVjdC5jb250YWlucyhJbnB1dC5Nb3VzZS54IC0gQG9iamVjdC5vcmlnaW4ueCwgSW5wdXQuTW91c2UueSAtIEBvYmplY3Qub3JpZ2luLnkpIGFuZCBJbnB1dC5Nb3VzZS5idXR0b25zW0lucHV0Lk1vdXNlLkxFRlRdID09IDIpIG9yIElucHV0LnRyaWdnZXIoSW5wdXQuQylcbiAgICBcbiAgICBmaW5pc2g6IC0+XG4gICAgICAgICNAb2JqZWN0LmNoYXJhY3RlciA9IG51bGxcbiAgICAgICAgXG4gICAgICAgIGlmIEBvYmplY3Qudm9pY2U/IGFuZCBHYW1lTWFuYWdlci5zZXR0aW5ncy5za2lwVm9pY2VPbkFjdGlvblxuICAgICAgICAgICAgQXVkaW9NYW5hZ2VyLnN0b3BTb3VuZChAb2JqZWN0LnZvaWNlLm5hbWUpXG4gICAgXG4gICAgZXJhc2U6IC0+XG4gICAgICAgIGZhZGluZyA9IEdhbWVNYW5hZ2VyLnRlbXBTZXR0aW5ncy5tZXNzYWdlRmFkaW5nXG4gICAgICAgIGR1cmF0aW9uID0gaWYgR2FtZU1hbmFnZXIudGVtcFNldHRpbmdzLnNraXAgdGhlbiAwIGVsc2UgZmFkaW5nLmR1cmF0aW9uXG4gICAgICAgIFxuICAgICAgICBAb2JqZWN0LmFuaW1hdG9yLmRpc2FwcGVhcihmYWRpbmcuYW5pbWF0aW9uLCBmYWRpbmcuZWFzaW5nLCBkdXJhdGlvbiwgPT5cbiAgICAgICAgICAgIFNjZW5lTWFuYWdlci5zY2VuZS5jdXJyZW50Q2hhcmFjdGVyID0geyBuYW1lOiBcIlwiIH1cbiAgICAgICAgICAgIEBjbGVhcigpXG4gICAgICAgICAgICBAb2JqZWN0LnZpc2libGUgPSBub1xuICAgICAgICApXG4gICAgICAgIFxuICAgICMjIypcbiAgICAqIEZJWE1FOiBEZXByZWNhdGVkPyBJdCBpcyBhbHNvIGEgcmUtZGVmaW5pdGlvbiBvZiBncy5Db21wb25lbnRfVmlzdWFsLnVwZGF0ZU9yaWdpbi5cbiAgICAqXG4gICAgKiBAbWV0aG9kIHVwZGF0ZU9yaWdpblxuICAgICMjI1xuICAgIHVwZGF0ZU9yaWdpbjogLT5cbiAgICAgICAgb3ggPSAwXG4gICAgICAgIG95ID0gMFxuICAgICAgICBpZiBAb2JqZWN0LnBhcmVudD8gYW5kIEBvYmplY3QucGFyZW50LmRzdFJlY3Q/XG4gICAgICAgICAgICBwID0gQG9iamVjdC5wYXJlbnRcbiAgICAgICAgICAgIHdoaWxlIHA/IGFuZCBwLmRzdFJlY3Q/XG4gICAgICAgICAgICAgICAgb3ggKz0gcC5kc3RSZWN0LnhcbiAgICAgICAgICAgICAgICBveSArPSBwLmRzdFJlY3QueVxuICAgICAgICAgICAgICAgIHAgPSBwLnBhcmVudFxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgQG9iamVjdC5vcmlnaW4ueCA9IG94XG4gICAgICAgIEBvYmplY3Qub3JpZ2luLnkgPSBveVxuICAgICAgICBcbiAgICAjIyMqXG4gICAgKiBVcGRhdGVzIHRoZSBvYmplY3QuIFxuICAgICpcbiAgICAqIEBtZXRob2QgdXBkYXRlT2JqZWN0XG4gICAgKiBAcHJpdmF0ZVxuICAgICMjI1xuICAgIHVwZGF0ZU9iamVjdDogLT5cbiAgICAgICAgQHVwZGF0ZU9yaWdpbigpXG4gICAgICAgIFxuICAgICAgICBpZiBAdGVtcFNldHRpbmdzLnNraXAgYW5kIG5vdCBAd2FpdGluZ1ByZXZpZXdcbiAgICAgICAgICAgIEBvYmplY3QudGV4dFJlbmRlcmVyLmlzV2FpdGluZyA9IG5vXG4gICAgXG4gICAgIyMjKlxuICAgICogVXBkYXRlcyB0aGUgbWVzc2FnZS5cbiAgICAqXG4gICAgKiBAbWV0aG9kIHVwZGF0ZU1lc3NhZ2VcbiAgICAqIEBwcml2YXRlXG4gICAgIyMjXG4gICAgdXBkYXRlTWVzc2FnZTogLT5cbiAgICAgICAgQGNhcmV0UG9zaXRpb24gPSBAb2JqZWN0LnRleHRSZW5kZXJlci5jYXJldFBvc2l0aW9uXG4gICAgICAgIFxuICAgICAgICBpZiBAdGVtcFNldHRpbmdzLnNraXAgYW5kIChAc2V0dGluZ3MuYWxsb3dTa2lwVW5yZWFkTWVzc2FnZXMgb3IgR2FtZU1hbmFnZXIuZ2xvYmFsRGF0YS5tZXNzYWdlc1tAbWVzc2FnZV0/LnJlYWQpXG4gICAgICAgICAgICBAb2JqZWN0LnRleHRSZW5kZXJlci5kcmF3SW1tZWRpYXRlbHkgPSB5ZXNcbiAgICAgICAgICAgIEBvYmplY3QudGV4dFJlbmRlcmVyLndhaXRBdEVuZCA9IEB3YWl0aW5nUHJldmlld1xuICAgICAgICAgICAgQG9iamVjdC50ZXh0UmVuZGVyZXIud2FpdEF0RW5kVGltZSA9IDBcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgI0BvYmplY3QudGV4dFJlbmRlcmVyLmRyYXdJbW1lZGlhdGVseSA9IG5vXG4gICAgICAgICAgICBAdXBkYXRlU3BlZWQoKVxuICAgICAgICAgICAgQHVwZGF0ZUF1dG9NZXNzYWdlKClcbiAgICAgICAgICAgIFxuICAgICMjIypcbiAgICAqIFVwZGF0ZXMgdGhlIHNwZWVkIG9mIHRoZSBtZXNzYWdlLiBUaGF0IGRlcGVuZHMgb24gZ2FtZS1zZXR0aW5ncyBpZiBhIG1lc3NhZ2VcbiAgICAqIGlzIHRpbWVkIHRvIGl0cyB2b2ljZSBvciBub3QuXG4gICAgKlxuICAgICogQG1ldGhvZCB1cGRhdGVTcGVlZFxuICAgICogQHByaXZhdGVcbiAgICAjIyNcbiAgICB1cGRhdGVTcGVlZDogLT5cbiAgICAgICAgdm9pY2VEdXJhdGlvbiA9IEB2b2ljZUR1cmF0aW9uKClcbiAgICAgICAgaWYgdm9pY2VEdXJhdGlvbiA+IDAgYW5kIEBzZXR0aW5ncy50aW1lTWVzc2FnZVRvVm9pY2VcbiAgICAgICAgICAgIEBvYmplY3QudGV4dFJlbmRlcmVyLnNwZWVkID0gdm9pY2VEdXJhdGlvbiAvIEBtZXNzYWdlLmxlbmd0aFxuICAgICAgICBlbHNlXG4gICAgICAgICAgICBAb2JqZWN0LnRleHRSZW5kZXJlci5zcGVlZCA9IEBtZXNzYWdlU3BlZWQoKVxuICAgICAgICAgICAgXG4gICAgIyMjKlxuICAgICogVXBkYXRlIGF1dG8tcmVhZCBtb2RlLlxuICAgICpcbiAgICAqIEBtZXRob2QgdXBkYXRlQXV0b01lc3NhZ2VcbiAgICAqIEBwcml2YXRlXG4gICAgIyMjXG4gICAgdXBkYXRlQXV0b01lc3NhZ2U6IC0+XG4gICAgICAgIGlmIEBzZXR0aW5ncy5hdXRvTWVzc2FnZS5zdG9wT25BY3Rpb24gYW5kIEBhY3Rpb25UcmlnZ2VyKClcbiAgICAgICAgICAgIEBzZXR0aW5ncy5hdXRvTWVzc2FnZS5lbmFibGVkID0gbm9cbiAgICAgICAgICAgIFxuICAgICAgICBpZiBAc2V0dGluZ3MuYXV0b01lc3NhZ2UuZW5hYmxlZCBhbmQgbm90IEBwYXJ0aWFsXG4gICAgICAgICAgICBpZiBAb2JqZWN0LnRleHRSZW5kZXJlci53YWl0QXRFbmRcbiAgICAgICAgICAgICAgICBAb2JqZWN0LnRleHRSZW5kZXJlci5pc1dhaXRpbmcgPSBub1xuICAgICAgICAgICAgQG9iamVjdC50ZXh0UmVuZGVyZXIud2FpdEF0RW5kVGltZSA9IEBhdXRvTWVzc2FnZVRpbWUoKVxuICAgICAgICAgICAgQG9iamVjdC50ZXh0UmVuZGVyZXIud2FpdEF0RW5kID0gbm9cbiAgICAgICAgZWxzZSBpZiBAYXV0b01lc3NhZ2VFbmFibGVkICE9IEBzZXR0aW5ncy5hdXRvTWVzc2FnZS5lbmFibGVkXG4gICAgICAgICAgICBAb2JqZWN0LnRleHRSZW5kZXJlci53YWl0QXRFbmQgPSB5ZXNcbiAgICAgICAgICAgIEBvYmplY3QudGV4dFJlbmRlcmVyLndhaXRBdEVuZFRpbWUgPSAwXG4gICAgICAgICAgICBcbiAgICAgICAgQGF1dG9NZXNzYWdlRW5hYmxlZCA9IEBzZXR0aW5ncy5hdXRvTWVzc2FnZS5lbmFibGVkXG4gICAgICAgICAgICBcbiAgICAjIyNcbiAgICAqIFVwZGF0ZXMgdGhlIGdhbWUgbWVzc2FnZSBiZWhhdmlvclxuICAgICpcbiAgICAqIEBtZXRob2QgdXBkYXRlXG4gICAgIyMjXG4gICAgdXBkYXRlOiAtPlxuICAgICAgICBAb2JqZWN0Lm5lZWRzVXBkYXRlID0geWVzXG4gICAgICAgIEB1cGRhdGVPYmplY3QoKVxuICAgICAgICBAdXBkYXRlTWVzc2FnZSgpXG4gICAgICAgIFxuICAgICAgICBpZiBAY2hhcmFjdGVyICE9IEBvYmplY3QuY2hhcmFjdGVyICAgXG4gICAgICAgICAgICBncy5HbG9iYWxFdmVudE1hbmFnZXIuZW1pdChcInRhbGtpbmdFbmRlZFwiLCB0aGlzLCBjaGFyYWN0ZXI6IEBjaGFyYWN0ZXIpXG4gICAgICAgICAgICBAY2hhcmFjdGVyID0gQG9iamVjdC5jaGFyYWN0ZXJcbiAgICAgICAgICAgIFxuICAgICAgICBpZiBAb2JqZWN0LnRleHRSZW5kZXJlci5pc1dhaXRpbmcgIT0gQGlzV2FpdGluZyBvciBAb2JqZWN0LnRleHRSZW5kZXJlci5pc1J1bm5pbmcgIT0gQGlzUnVubmluZyBvciAoQHZvaWNlPy5wbGF5aW5nICYmICghQG9iamVjdC5jaGFyYWN0ZXI/LnRpbWVUYWxraW5nVG9Wb2ljZVZvbHVtZSBvciBAdm9pY2UuYXZlcmFnZVZvbHVtZSA+IEBvYmplY3QuY2hhcmFjdGVyLnRhbGtpbmdWb2x1bWUpKSAhPSBAaXNWb2ljZVBsYXlpbmdcbiAgICAgICAgICAgIEBpc1dhaXRpbmcgPSBAb2JqZWN0LnRleHRSZW5kZXJlci5pc1dhaXRpbmdcbiAgICAgICAgICAgIEBpc1J1bm5pbmcgPSBAb2JqZWN0LnRleHRSZW5kZXJlci5pc1J1bm5pbmdcbiAgICAgICAgICAgIEBpc1ZvaWNlUGxheWluZyA9IChAdm9pY2U/LnBsYXlpbmcgJiYgKCFAb2JqZWN0LmNoYXJhY3Rlcj8udGltZVRhbGtpbmdUb1ZvaWNlVm9sdW1lIG9yIEB2b2ljZS5hdmVyYWdlVm9sdW1lID4gQG9iamVjdC5jaGFyYWN0ZXIudGFsa2luZ1ZvbHVtZSkpXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmIG5vdCBAdGVtcFNldHRpbmdzLnNraXBcbiAgICAgICAgICAgICAgICBpZiBAdm9pY2U/LnBsYXlpbmdcbiAgICAgICAgICAgICAgICAgICAgaWYgbm90IEBpc1ZvaWNlUGxheWluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgZ3MuR2xvYmFsRXZlbnRNYW5hZ2VyLmVtaXQoXCJ0YWxraW5nRW5kZWRcIiwgdGhpcywgY2hhcmFjdGVyOiBAb2JqZWN0LmNoYXJhY3RlcilcbiAgICAgICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgZ3MuR2xvYmFsRXZlbnRNYW5hZ2VyLmVtaXQoXCJ0YWxraW5nU3RhcnRlZFwiLCB0aGlzLCBjaGFyYWN0ZXI6IEBvYmplY3QuY2hhcmFjdGVyKVxuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgaWYgQGlzV2FpdGluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgZ3MuR2xvYmFsRXZlbnRNYW5hZ2VyLmVtaXQoXCJ0YWxraW5nRW5kZWRcIiwgdGhpcywgY2hhcmFjdGVyOiBAb2JqZWN0LmNoYXJhY3RlcilcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiBAaXNSdW5uaW5nXG4gICAgICAgICAgICAgICAgICAgICAgICBncy5HbG9iYWxFdmVudE1hbmFnZXIuZW1pdChcInRhbGtpbmdTdGFydGVkXCIsIHRoaXMsIGNoYXJhY3RlcjogQG9iamVjdC5jaGFyYWN0ZXIpXG4gICAgICAgIFxuICAgICAgICBpZiBAb2JqZWN0LmxheW91dFJlY3Q/IGFuZCBAb2JqZWN0LnBhcmVudD8uZHN0UmVjdD9cbiAgICAgICAgICAgIGlmIEBvYmplY3QubGF5b3V0UmVjdC54IHRoZW4gQG9iamVjdC5kc3RSZWN0LnggPSBAb2JqZWN0LmxheW91dFJlY3QueChAb2JqZWN0LnBhcmVudC5kc3RSZWN0LndpZHRoKVxuICAgICAgICAgICAgaWYgQG9iamVjdC5sYXlvdXRSZWN0LnkgdGhlbiBAb2JqZWN0LmRzdFJlY3QueSA9IEBvYmplY3QubGF5b3V0UmVjdC55KEBvYmplY3QucGFyZW50LmRzdFJlY3QuaGVpZ2h0KVxuICAgICAgICAgICAgaWYgQG9iamVjdC5sYXlvdXRSZWN0LndpZHRoIHRoZW4gQG9iamVjdC5kc3RSZWN0LndpZHRoID0gQG9iamVjdC5sYXlvdXRSZWN0LndpZHRoKEBvYmplY3QucGFyZW50LmRzdFJlY3Qud2lkdGgpXG4gICAgICAgICAgICBpZiBAb2JqZWN0LmxheW91dFJlY3QuaGVpZ2h0IHRoZW4gQG9iamVjdC5kc3RSZWN0LmhlaWdodCA9IEBvYmplY3QubGF5b3V0UmVjdC5oZWlnaHQoQG9iamVjdC5wYXJlbnQuZHN0UmVjdC5oZWlnaHQpXG52bi5Db21wb25lbnRfTWVzc2FnZUJlaGF2aW9yID0gQ29tcG9uZW50X01lc3NhZ2VCZWhhdmlvciJdfQ==
//# sourceURL=Component_MessageBehavior_137.js