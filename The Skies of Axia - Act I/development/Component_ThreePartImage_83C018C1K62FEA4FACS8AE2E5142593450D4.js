// Generated by CoffeeScript 1.12.7
(function() {
  var Component_ThreePartImage,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  Component_ThreePartImage = (function(superClass) {
    extend(Component_ThreePartImage, superClass);


    /**
    * Called if this object instance is restored from a data-bundle. It can be used
    * re-assign event-handler, anonymous functions, etc.
    *
    * @method onDataBundleRestore.
    * @param Object data - The data-bundle
    * @param gs.ObjectCodecContext context - The codec-context.
     */

    Component_ThreePartImage.prototype.onDataBundleRestore = function(data, context) {
      return this.setupEventHandlers();
    };


    /**
    * A three-part image component displays an object on screen using three
    * sub-images: start, middle and end. The start and end will be rendered
    * with fixed size while the middle-part will be stretched in a way like this:<br>
    * <br>
    * |Start-Part Fixed|<-----------Middle-Part Stretched----------->|End-Part Fixed<br>
    * <br>
    * A three-part image is automatically added to the graphics-system
    * and rendered every frame until it gets disposed. It can be horizontal or
    * vertical.
    *
    * @module gs
    * @class Component_ThreePartImage
    * @extends gs.Component_Visual
    * @memberof gs
    * @constructor
     */

    function Component_ThreePartImage(viewport) {
      Component_ThreePartImage.__super__.constructor.call(this);

      /**
      * The native three-part image graphic object.
      * @property threePartImage
      * @type gs.ThreePartImage
       */
      this.threePartImage = new gs.ThreePartImage(viewport != null ? viewport : Graphics.viewport);

      /**
      * The name of the image used to construct the three-part image.
      * @property image
      * @type string
      * @protected
       */
      this.image = null;
    }


    /**
    * Disposes the three-part image.
    *
    * @method dispose
     */

    Component_ThreePartImage.prototype.dispose = function() {
      Component_ThreePartImage.__super__.dispose.apply(this, arguments);
      return this.threePartImage.dispose();
    };


    /**
    * Adds event-handlers for mouse/touch events
    *
    * @method setupEventHandlers
     */

    Component_ThreePartImage.prototype.setupEventHandlers = function() {
      return this.threePartImage.onIndexChange = (function(_this) {
        return function() {
          return _this.object.rIndex = _this.threePartImage.index;
        };
      })(this);
    };


    /**
    * Setup the three-part image component. This method is automatically called by the
    * system.
    * @method setup
     */

    Component_ThreePartImage.prototype.setup = function() {
      return this.setupEventHandlers();
    };


    /**
    * Updates the three-part image properties from the game object properties.
    *
    * @method updateProperties
     */

    Component_ThreePartImage.prototype.updateProperties = function() {
      this.threePartImage.x = this.object.dstRect.x - this.object.dstRect.width * (this.object.zoom.x - 1.0) * this.object.anchor.x;
      this.threePartImage.y = this.object.dstRect.y - this.object.dstRect.height * (this.object.zoom.y - 1.0) * this.object.anchor.y;
      this.threePartImage.width = this.object.dstRect.width;
      this.threePartImage.height = this.object.dstRect.height;
      this.threePartImage.firstPartSize = this.object.firstPartSize || 16;
      this.threePartImage.middlePartSize = this.object.middlePartSize || 1;
      this.threePartImage.lastPartSize = this.object.lastPartSize || 16;
      this.threePartImage.visible = this.object.visible;
      this.threePartImage.ox = -this.object.origin.x;
      this.threePartImage.oy = -this.object.origin.y;
      this.threePartImage.z = (this.object.zIndex || 0) + (!this.object.parent ? 0 : this.object.parent.zIndex || 0);
      this.threePartImage.angle = this.object.angle || 0;
      this.threePartImage.anchor.x = this.object.anchor.x;
      return this.threePartImage.anchor.y = this.object.anchor.y;
    };


    /**
    * Updates the padding.
    *
    * @method updatePadding
     */

    Component_ThreePartImage.prototype.updatePadding = function() {
      if (this.object.padding != null) {
        this.threePartImage.x += this.object.padding.left;
        this.threePartImage.y += this.object.padding.top;
        this.threePartImage.width -= this.object.padding.left + this.object.padding.right;
        return this.threePartImage.height -= this.object.padding.top + this.object.padding.bottom;
      }
    };


    /**
    * Updates the skin-image used to construct the three-part image.
    *
    * @method updateImage
     */

    Component_ThreePartImage.prototype.updateImage = function() {
      var bitmap, ref;
      if ((this.object.image != null) && this.image !== this.object.image) {
        this.image = this.object.image;
        bitmap = ResourceManager.getBitmap(((ref = this.object.imageFolder) != null ? ref : "Graphics/Pictures") + "/" + this.object.image);
        return this.threePartImage.skin = bitmap;
      }
    };


    /**
    * Updates the three-part image.
    *
    * @method update
     */

    Component_ThreePartImage.prototype.update = function() {
      Component_ThreePartImage.__super__.update.apply(this, arguments);
      this.object.rIndex = this.threePartImage.index;
      this.updateProperties();
      this.updatePadding();
      return this.updateImage();
    };

    return Component_ThreePartImage;

  })(gs.Component_Visual);

  gs.Component_ThreePartImage = Component_ThreePartImage;

}).call(this);
