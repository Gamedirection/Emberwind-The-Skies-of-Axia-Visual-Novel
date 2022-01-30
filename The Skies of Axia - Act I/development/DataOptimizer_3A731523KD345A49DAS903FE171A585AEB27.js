// Generated by CoffeeScript 1.12.7
(function() {
  var DataOptimizer;

  DataOptimizer = (function() {

    /**
    * The data optimizer is to optimize data structures coming from data files to
    * make processing faster. One way of optimization for example is to convert
    * regular array to typed arrays.
    *
    * @module gs
    * @class DataOptimizer
    * @memberof gs
    * @static
    * @constructor
     */
    function DataOptimizer() {
      this.labels = {};
      this.labelJumps = {};
    }


    /**
    * Converts the specified number-array to a typed Int16 array.
    *
    * @method arrayToNativeArray
    * @param {Array} array - The array to convert.
    * @return {Int16Array} The typed array.
    * @static
     */

    DataOptimizer.prototype.arrayToNativeArray = function(array) {
      var i, j, length, ref, result;
      result = null;
      length = array.length || Object.keys(array).length;
      if (array != null) {
        if (window.ArrayBuffer != null) {
          result = new ArrayBuffer(length * 2);
          result = new Int16Array(result);
        } else {
          result = new Array(length);
        }
        for (i = j = 0, ref = length; 0 <= ref ? j < ref : j > ref; i = 0 <= ref ? ++j : --j) {
          result[i] = array[i];
        }
      }
      return result;
    };


    /**
    * Creates a typed Int16 array if supported. Otherwise a regular array is created.
    *
    * @method nativeArray16
    * @param {number} size - The size of the array in elements.(Not in bytes).
    * @return {Int16Array} The Int16 array.
    * @static
     */

    DataOptimizer.prototype.nativeArray16 = function(size) {
      var result;
      result = new Array(size);
      return result;
    };


    /**
    * Creates a typed Int8 array if supported. Otherwise a regular array is created.
    *
    * @method nativeArray16
    * @param {number} size - The size of the array in elements.(Not in bytes).
    * @return {Int8Array} The Int8 array.
    * @static
     */

    DataOptimizer.prototype.nativeArray8 = function(size) {
      var result;
      result = new Array(size);
      return result;
    };


    /**
    * Removes a single empty command like a comment.
    *
    * @method removeEmptyCommand
    * @private
    * @param {Object[]} commands - A list of commands.
    * @param {Object} command - The command to optimize.
    * @static
     */

    DataOptimizer.prototype.removeEmptyCommand = function(command, index, commands) {
      var result;
      if (GameManager.inLivePreview) {
        return false;
      }
      result = false;
      switch (commands[index].id) {
        case "gs.Comment":
          commands.splice(index, 1);
          result = true;
          break;
        case "gs.EmptyCommand":
          commands.splice(index, 1);
          result = true;
      }
      return result;
    };


    /**
    * Checks if a common event call can be optimized by inline it. In special cases,
    * such as recursion or parameters, an optimization is no possible.
    *
    * @method optimizeCommonEventCall
    * @private
    * @param {Object[]} commands - A list of commands.
    * @param {number} index - Index of the command in command-list.
    * @param {Object} command - The command to optimize.
    * @return If <b>true</b> the call can be safly inline. Otherwise <b>false</b>
    * @static
     */

    DataOptimizer.prototype.canInlineCommonEventCall = function(command, index, commands, callStack) {
      var c, commonEvent, i, j, len, ref, result;
      result = !(command.params.commonEventId.index != null);
      commonEvent = RecordManager.commonEvents[command.params.commonEventId];
      if (commonEvent != null ? commonEvent.inline : void 0) {
        if (callStack.indexOf(commonEvent) !== -1) {
          result = false;
        } else {
          callStack.push(commonEvent);
          ref = commonEvent.commands;
          for (i = j = 0, len = ref.length; j < len; i = ++j) {
            c = ref[i];
            if (c.id === "gs.CallCommonEvent") {
              result = this.canInlineCommonEventCall(c, i, commonEvent.commands, callStack);
            }
          }
        }
      }
      return result;
    };


    /**
    * Optimizes a common event call.
    *
    * @method optimizeCommonEventCall
    * @private
    * @param {Object[]} commands - A list of commands.
    * @param {number} index - Index of the command in command-list.
    * @param {Object} command - The command to optimize.
    * @static
     */

    DataOptimizer.prototype.optimizeCommonEventCall = function(command, index, commands) {
      var commonEvent;
      commonEvent = RecordManager.commonEvents[command.params.commonEventId];
      if (commonEvent != null ? commonEvent.inline : void 0) {
        if (this.canInlineCommonEventCall(command, index, commands, [])) {
          commands.splice(index, 1);
          return commands.splice.apply(commands, [index, 0].concat(Object.copy(commonEvent.commands)));
        }
      }
    };


    /**
    * Optimizes the variable-access by replacing the domain-string with the domain-index
    * value at runtime to allow faster domain access using integer numbers instead of strings.
    *
    * @method optimizeVariableAccess
    * @param {Object} data - The data to opimize, e.g. the params-object of a command.
    * @static
     */

    DataOptimizer.prototype.optimizeVariableAccess = function(data) {
      var domainIndex, e, p, ref, ref1, results;
      if (data != null ? data.__optimized : void 0) {
        return;
      }
      if (data != null) {
        data.__optimized = true;
      }
      results = [];
      for (p in data) {
        if (data[p] instanceof Array && !data[p].__optimized) {
          data[p].__optimized = true;
          results.push((function() {
            var j, len, ref, results1;
            ref = data[p];
            results1 = [];
            for (j = 0, len = ref.length; j < len; j++) {
              e = ref[j];
              results1.push(this.optimizeVariableAccess(e));
            }
            return results1;
          }).call(this));
        } else if (p === "domain" && data.scope > 0 && (data.index != null)) {
          domainIndex = GameManager.variableStore.domains.indexOf(data[p]);
          results.push(data[p] = domainIndex === -1 ? data[p] : domainIndex);
        } else if (typeof data[p] === "object" && !(data[p] instanceof String || data[p] instanceof Array)) {
          if (!((ref = data[p]) != null ? ref.__optimized : void 0)) {
            this.optimizeVariableAccess(data[p]);
          }
          results.push((ref1 = data[p]) != null ? ref1.__optimized = true : void 0);
        } else {
          results.push(void 0);
        }
      }
      return results;
    };


    /**
    * Optimizes a single sub-message created by {CP} text code. It will split the sub-message into multiple
    * independent ShowMessage commands at {P} text code.
    *
    * @method optimizeSubMessage
    * @private
    * @param {string} message - The sub message.
    * @param {Object} command - The command to optimize.
    * @param {number} index - Index of the command in command-list.
    * @param {Object[]} commands - A list of commands.
    * @return {number} The current command-pointer where add/insert the next command (If necessary).
    * @static
     */

    DataOptimizer.prototype.optimizeSubMessage = function(message, command, index, commands) {
      var i, j, len, messageCommand, subMessage, subMessages;
      subMessages = message.split("{P}");
      for (i = j = 0, len = subMessages.length; j < len; i = ++j) {
        subMessage = subMessages[i];
        messageCommand = Object.flatCopy(command);
        messageCommand.params = Object.flatCopy(messageCommand.params);
        if (i === 0) {
          messageCommand.params.message = subMessage;
        } else {
          messageCommand.params.message = subMessage.replace("\n", "");
        }
        commands.splice(index, 0, messageCommand);
        index++;
      }
      return index;
    };


    /**
    * Optimizes a single ShowMessage command. It will split the command into multiple
    * independent ShowMessage commands at {P} text code for example.
    *
    * @method optimizeShowMessage
    * @private
    * @param {Object} command - The command to optimize.
    * @param {number} index - Index of the command in command-list.
    * @param {Object[]} commands - A list of commands.
    * @return {number} The current command-pointer where add/insert the next command (If necessary).
    * @static
     */

    DataOptimizer.prototype.optimizeShowMessage = function(command, index, commands) {
      var clearCommand, i, j, len, msg, subMessage, subMessages;
      msg = lcs(command.params.message);
      if (msg.contains("{CP}") || msg.contains("{P}")) {
        commands.splice(index, 1);
        subMessages = msg.split("{CP}");
        for (i = j = 0, len = subMessages.length; j < len; i = ++j) {
          subMessage = subMessages[i];
          index = this.optimizeSubMessage(subMessage, command, index, commands);
          if (i < subMessages.length - 1) {
            clearCommand = {
              id: "gs.ClearMessage",
              indent: command.indent,
              params: {
                fieldFlags: {
                  duration: 1
                },
                duration: 30,
                waitForCompletion: true
              }
            };
            commands.splice(index, 0, clearCommand);
            index++;
          }
        }
        index--;
      }
      return index;
    };


    /**
    * Optimizes a single command.
    *
    * @method optimizeCommand
    * @private
    * @param {Object[]} commands - A list of commands.
    * @param {number} index - Index of the command in command-list.
    * @param {Object} command - The command to optimize.
    * @static
     */

    DataOptimizer.prototype.optimizeCommand = function(command, index, commands) {
      var ref;
      this.optimizeVariableAccess(command.params);
      switch (command.id) {
        case "gs.ShowMessage":
          index = this.optimizeShowMessage(command, index, commands);
          break;
        case "gs.CallCommonEvent":
          this.optimizeCommonEventCall(command, index, commands);
          break;
        case "gs.Label":
          this.labels[command.params.name] = index;
          if ((ref = this.labelJumps[command.params.name]) != null) {
            ref.forEach(function(c) {
              return c.params.labelIndex = index;
            });
          }
          break;
        case "vn.Choice":
          command.params.action.labelIndex = this.labels[command.params.action.label];
          if (!this.labelJumps[command.params.action.label]) {
            this.labelJumps[command.params.action.label] = [];
          }
          this.labelJumps[command.params.action.label].push(command);
          break;
        case "gs.CheckSwitch":
        case "gs.CheckNumberVariable":
        case "gs.CheckTextVariable":
          command.params.labelIndex = this.labels[command.params.label];
          if (!this.labelJumps[command.params.label]) {
            this.labelJumps[command.params.label] = [];
          }
          this.labelJumps[command.params.label].push(command);
          break;
        case "gs.JumpToLabel":
          command.params.labelIndex = this.labels[command.params.name];
          if (!this.labelJumps[command.params.name]) {
            this.labelJumps[command.params.name] = [];
          }
          this.labelJumps[command.params.name].push(command);
      }
      return index;
    };


    /**
    * Optimizes a list of event/scene commands by removing unnecessary commands like
    * comments or empty commands. It also optimizes label jumps. Adds an <b>optimized</b> to
    * the specified command-list to indicate that the list was already optimized. If <b>optimized</b>
    * property of command-list is set to <b>true</b> this method will return immediately.
    *
    * @method optimizeEventCommands
    * @param {Object[]} commands - A list of commands to optimize.
    * @static
     */

    DataOptimizer.prototype.optimizeEventCommands = function(commands) {
      var i;
      if (commands.optimized) {
        return;
      }
      i = 0;
      this.labels = {};
      this.labelJumps = {};
      if (!$PARAMS.preview) {
        while (i < commands.length) {
          commands[i].indent = commands[i].indent || 0;
          if (this.removeEmptyCommand(commands[i], i, commands)) {
            i--;
          }
          i++;
        }
      }
      i = 0;
      while (i < commands.length) {
        i = this.optimizeCommand(commands[i], i, commands);
        i++;
      }
      return commands.optimized = true;
    };

    return DataOptimizer;

  })();

  window.DataOptimizer = new DataOptimizer();

  gs.DataOptimizer = DataOptimizer;

}).call(this);