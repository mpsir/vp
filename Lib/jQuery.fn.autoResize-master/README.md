## jQuery.fn.autoResize

*This is a much-needed update of the [slightly buggy 2009 version](http://james.padolsey.com/javascript/jquery-plugin-autoresize/)*

A plugin for jQuery which changes the dimensions of input elements to suit the amount of data entered. It operates on `textarea`, `input[type=text]` and `input[type=password]` elements.

Usage is as follows:

	$('textarea#foo').autoResize();

You can pass options:

	$('textarea#foo').autoResize({
		maxHeight: 200,
		minHeight: 100
	});

Available options include:

 * `extraSpace`: (default: `50`) A number to signify how many pixels of free space beyond the last letter typed you want the element to resize to. *Warning*: Resizing `<input>` elements won't work properly unless this is set to around the equivelant of `1em/16px`. 
 * `minWidth`: (default: `"original"`) A number or the string `"original"` to signify the current width as the minimum (note: This option is only useful on `<input>` elements, i.e. elements that resize width-ways)
 * `maxWidth`: (default: `500`) A number or the string `"original"` to signify the current width as the maximum (note: This option is only useful on `<input>` elements, i.e. elements that resize width-ways)
 * `minHeight`: (default: `"original"`) A number or the string `"original"` to signify the current height as the minimum (note: This option is only useful on `<textarea>` elements, i.e. elements that resize height-ways)
 * `maxHeight`: (default: `500`) A number or the string `"original"` to signify the current height as the maxiumum (note: This option is only useful on `<textarea>` elements, i.e. elements that resize height-ways)
 * `onBeforeResize`: A callback function fired just before a resize occurs.
 * `onAfterResize`: A callback function fired just after a resize occurs.
 * `animate`: (default: `{duration: 200}`) Set to either `false` or an animation configuration object, i.e. the one passed as the second argument to `jQuery.fn.animate`. This signifies whether or not the element should animate when it resizes (set to `false` if you don't want animation).

 You can unbind listeners bound to by this plugin like so:

 	$(foo).unbind('.autoResize');

... or destroy everything, including stub clone objects used for the effect:

	$(foo).data('AutoResizer').destroy();

---

**Please report bugs in Github (the issues tab).**

### Tested on the following browsers:

 * Opera 11.5
 * Firefox 4/6
 * Safari 5.0
 * IE9 (*IE6-8 too, but see below*)
 * Chrome 15

*Note*: It will work in IE6-8 also, but only if your TEXTAREA has `display:block;` (`display:inline;`, the default, doesn't appear to work very well)

### Changlog

 * `1.1` - Starting version, forked from [original](http://james.padolsey.com/demos/plugins/jQuery/autoresize.jquery.js).
 * `1.11` - Added support for pasting (thanks to [Alex](https://github.com/jamespadolsey/jQuery.fn.autoResize/pull/2)), and fixed bug with width not being copied.
 * `1.12` - Bug fix (crucial for multiple AutoResizables on a single page)
 * `1.13` - Now handles accidental instantiation on the same element more than once. Previous AutoResizer instances will be destroyed (events unbound, references removed, element clones removed etc.).
 * `1.13.1` - [Issue 9](https://github.com/jamespadolsey/jQuery.fn.autoResize/issues/9) fixed.
 * `1.13.2` - [Issue 14](https://github.com/jamespadolsey/jQuery.fn.autoResize/issues/14) fixed.
 * `1.13.3` - [Issue 15](https://github.com/jamespadolsey/jQuery.fn.autoResize/issues/15) fixed.
 * `1.13.4` - [Issue 16](https://github.com/jamespadolsey/jQuery.fn.autoResize/issues/16) fixed.
 * `1.14` - Added `onBeforeResize` and `onAfterResize` callbacks (`onResize` is **deprecated** but still works). `.check()` now only runs when the value of the element has changed (avoids non-character-keys issue, e.g. CTRL+A). Initial `.check()` call is only done if the element is currently visible ([Issue 13](https://github.com/jamespadolsey/jQuery.fn.autoResize/issues/13)). If you're making an element visible and wish to trigger a resize, do `$(yourEl).data('AutoResizer').check()`.