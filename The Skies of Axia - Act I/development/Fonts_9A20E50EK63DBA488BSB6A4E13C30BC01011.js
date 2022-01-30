// Generated by CoffeeScript 1.12.7

/**
* Enumeration containing default fonts.
*
* @module gs
* @class Fonts
* @memberof gs
* @static
* @final
 */

(function() {
  var Fonts;

  Fonts = (function() {
    function Fonts() {}

    Fonts.initialize = function() {
      var size;
      size = Math.round(9 / 240 * Graphics.height);

      /**
      * Used as default font for text if no font is specified.
      *
      * @property TEXT
      * @type gs.Font
      * @static
      * @final
       */
      this.TEXT = ResourceManager.getFont("Verdana", size);
      this.TRANSPARENT = new Font("Verdana", size);
      return this.TRANSPARENT.color.alpha = 0;
    };

    return Fonts;

  })();

  gs.Fonts = Fonts;

}).call(this);