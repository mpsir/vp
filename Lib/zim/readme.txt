
ZIM ZIP

ZIMjs is JavaScript framework for coding on the HTML Canvas:
https://zimjs.com

This zip contains the Frame Templates described at:
https://zimjs.com/frame.html

Just copy the html page you need to get started with your own project.
The easiest template is the FIT template so start there if you are new to ZIM.
There are comments in the code to explain the Frame set up.
In the "ready" event there is a comment that says "put your code here".
This is where you start coding - you can delete the sample button.


Documentation for what functions and classes you can use are found here:
http://zimjs.com/docs.html

There is a learn section for ZIM here with all sorts of tutorials and lessons:
https://zimjs.com/learn.html

There are many examples of common Interactive Media tasks here:
https://zimjs.com/bits.html

There are video tutorials with screen captures here:
https://zimjs.com/vids.html

------------------------------
SUMMARY OF CHANGES TO VERSIONS (latest to oldest)
https://zimjs.com/updates.html for full list
------------------------------


////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
ZIM TEN (10)
ZIM 10 offers a more integrated Physics and a formalized Pick() class for ZIM VEE dynamic parameters.
There is a new site as well as specific video entries for each doc element.

PHYSICS - IMPROVEMENT
See: https://zimjs.com/physics/
Integrated Physics into ZIM DisplayObjects and the Docs.
Still need to import Box2D and the ZIM physics module - updated to version 2.
Making a physics object and mapping a ZIM object is no longer needed.
var circle = new Circle().center().addPhysics();
will create a default world and drop a circle in it!
Access the physics object with circle.physics
Or premake the world with new Physics() - to customize gravity, borders, scroll, etc.
The addPhysics() lets you set a bunch of parameters about the body.
Access the physics body with circle.body

DisplayObject Methods:
A set of methods are added to the DisplayObject when physics is in place:
impulse(), force() and torque() methods to push objects around and spin them.
impulse() is a one time push like shooting a pool ball
force() is a force over time like gravity or wind and is applied in a Ticker, etc.
torque() will rotate or spin the object around its center
The control() method will let keyboard keys move the object.
The follow() method will let the stage follow the object when the Physics scroll parameter is set to true
Contact can be tested for with contact() and contactEnd()
each receives a callback function that is provided with the other contacting object and body

Physics Methods:
The physics class has a join() method that can join objects in a variety of physics joints.
The physics class has a drag() method to specify which objects are draggable.
There is a debug() method to see the physics world behind ZIM.
The world can be set up to be bigger than the frame and scroll to follow an object.

PICK
Added a Pick() class to featured code module
This takes the place of zik() when processing ZIM VEE values.
ZIM VEE is so handy that a more generic class was created to share with the world of coding
Pick() accepts parameters for a series, an array for randomly picked, a range object for a range or a function that returns a value
The Pick object has a choose() method that is used internally - but can be used by coders in general.
There is also a chainable num() method that lets you set the number of choices
The Pick object also has a loop() method so you can loop through the options getting the next picked option each time.
If you have an array and want a series you can use JS6 Spread ... or use new Options(series([your array]));
ZIM Pick is a stand-alone class that can be copied and used in other languages for delayed parameters.

SVG CONTAINER
Added SVGContainer class - that turns SVG into ZIM Squiggles or Blob paths
Thank you to KV from our Slack team https://zimjs.com/slack for the help on this!
The tech is still in experimental stage but will translate most SVG - no CSS on SVG...
The paths can then be used to animate along, drag along, make a LabelOnPath, etc.
Also consider svgToBitmap() if you are just wanting to view an SVG file in ZIM

HIERARCHY
Added a zim Hierarchy() class to accommodate nested data.
This is used by the accordion but could be used in making a "Mind Map" or a Tree interface, etc.
The Hierarchy class comes with handy methods to traverse a hierarchy.
This is similar to DOM processing but uses Object literals and as such, can store any Object

LIST ACCORDION
See: https://zimjs.com/ten/accordion.html
Added an accordion parameter to List to handle expanding and collapsing sections to a List.
Uses ZIM Hierarchy for creating and tracking the nesting.

TIP
Added a Tip() class under components just after Toggle.
Tip() is a Label that has show() and hide() added to it
Tip will hide automatically 2000 ms after showing - or whatever you pass in as a time.
Tip also has align, valign and margin, marginH, marginV to easily position based on a target
There is also an outside parameter you can set to position outside a target
Tip is added to the stage - initially it was added to the target but the target might be rotated, etc.
Thanks Ami Hanya for the requestion for Toast ;-)

GENERAL
Added enabled property to List
Added selectedRollBackgroundColor and selectedRollColor to Tabs, List, Pad - sigh BREAK.  These default to rollBackgroundColor and rollColor
Added dampKeyup to MotionController and dampKeyup property to control the damping on the Accelerator when keyup is used in MotionController.
See: https://zimjs.com/explore/sidescroller.html
Added expand to Window overlay rather than black with alpha .01
Made loop() work on an HTMLCollection (it already works on a NodeList)
Added q, r, s, t points to ZIM Point - used with SVG - Cubic Beziers and Arc
Added addChar(char) and removeChar() to Keyboard()
Added x and y to rot() to rotate around any point (relative to the container)
Added event object to hotSpot click - also added callOver and callOut parameters
Added "myCanvasAlternative" system to show alternative content if no canvas
or to screen readers and possibly search engine indexing
Added hotSpots property to HotSpots which is an array of HotSpot objects
Fixed sink to work with new Emitter system (particles container independent of emitter position)
Adjusted Tile so it does not clone first item but rather uses item passed in to Tile.

*** patches
Adjusted cloning - to initially only copy matrix if shape or not a ZIM object
but realized that that lost cloning of x, y, scale and skew so backed out of that change.
Added buttonDown property to Tabs and itemDown property to List to get currently pressed item.
Added getItemIndex(item) method to List
Added clamp parameters to Proportion, ProportionDamp and Parallax defaults to true
Set this to false to get values outside min and max range - thanks Ami Hanya for the prompting
Adjusted scrollTop on Frame to default to false - this was for older iPhones - live version 5 - and does nothing otherwise
It was reported that it might mess up mobile when tag mode is scrolled to the bottom - so we have defaulted it to false.
Fixed stopAnimate() so it works with drag:true setting
Fixed Blob controlLength parameter - was not using parameter value - now it is!
Made Squiggle and Blob move parameter only stop overall dragging when set to false - that is what was intended
Passed a CreateJS tick object to any function added to Ticker with add()
this gives delta, time, timeStamp, etc. - thanks Alfred Yim for the prompting!
Ticker.raw() functions receive a DOMHighResTimeStamp
Fixed Tile to properly not clone if clone:false is set - thanks Racheli Golan for the find.
This was introduced initially in 10 for ZIM Shapes accepting ZIM VEE for size and color - we mixed up a conditional and it is now patched.
Adjusted Blob to properly close path so there is no gap on thick borders
Controls were hiding behind transform objects since updates in 9.5
This has been fixed but should be monitored further.
NOTE - as of 2/26/2019
SVGContainer has been updated - thanks KV for all the testing and updates on that.
Here is a mess of an example: https://zimjs.com/explore/svgcontainer2.html
Note - currently it does not do arcs nor does it use styles.
Note - there are a few differences we are still working on so expect another patch.
Diffences have been patched as of 3/1/2019
Also added label property to end of Sprite parameters
This will stop the sprite on the label for texture packer approach
See https://zimjs.com/explore/fruit.html
SVGContainer() and svgToBitmap() now handle remote SVG, SVG tag and SVG string as input




////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
ZIM NIO (9)
Mini-site: https://zimjs.com/nio/ that demonstrates new features - here is a summary:
animate() - convenience props: path, orient, flip, flipVertical, zoom, speed, layer, fade, extra
animate() - parameters: dynamic, drag, clamp, startPaused
animate() - properties added to target: percentSpeed, percentComplete
animate() - methods added to target: paused() - to support Accelerator()
Accelerator() - now accepts targets with dynamic animation
MotionController() - now accepts an Accelerator as a target
** more details below

PIZZAZZ 4 - Blob and Squiggle shapes and animation path shapes
https://zimjs.com/nio/paths.html

DOCS - CUSTOMIZE
	Added a TOP link to the search area
	Added a Customize link to a tool to make a list of items used in your ZIM code
	https://zimjs.com/customize.html
	These will make various sets of links that will feature these items
	https://zimjs.com/docs.html?item=Circle - opens Circle docs.
	https://zimjs.com/docs.html?items=Button,Dial,Emitter - shows Feautured Items.

DYNAMIC AND PATH ANIMATIONS - IMPROVEMENT - Thanks Andi Erni and others for the promptings!
	The speed of animations can be controlled with the percentSpeed property on the target
	Animations can be combined in an Accelerator to control all at once
	(along with Dynamos (dynamic Sprites) and Scrollers)
	Accelerators can be controlled with a MotionController (or techniques below)
	percentSpeed also works with Slider, Dial, Stepper, Swiper and Parallax
	percentSpeed also can be added to wiggle or animate

	Animations can also be scrubbed with the percentComplete property on the target
	percentComplete works with Slider, Dial, Stepper, Swiper and Parallax
	percentComplete also can be added to wiggle or animate

	Animation along a path (Blob or Squiggle) supports dynamic animation
	Objects can now be dragged along a path - see DRAG below

	PERCENTSPEED
		Added dynamic parameter to animate().
		Set dynamic to true to be able to change the speed of the animation
		with the percentSpeed property of the target object.
		See https://zimjs.com/nio/speed.html
		Adjusted Accelerator so it accepts any object with a percentSpeed
		including an object that is being dynamically animated.
		Added a clamp parameter to animate() to limit dynamic animations to edges of their times
		otherwise time can go well beyond and take just as long to reverse to active animation time range
		See https://zimjs.com/nio/controls.html
		Adjusted MotionController so if an Accelerator is passed in
		the MotionController operates percentSpeed rather than x and y
		in any of its types - mousemove, keydown, gamestick, etc.
	PERCENTCOMPLETE
		Added percentComplete property to any object being animated.
		Setting this gives manual control for instance with a Slider, Dial, mouse position, Parallax, etc.
		http://zimjs.com/nio/parallax.html
	FLIP
		In addition to orient, there is now flip and flipVertical convenience props for animate()
		set these to true to flip the target with scaleX and scaleY depending on direction
		http://zimjs.com/nio/flip.html
	DRAG
		Added a drag parameter to animate() that lets you drag path animations
		Set startPaused to true to pause the animation and drag or drag a moving animation.
		Added a redirect convenience property to the props object.
		This defaults to true so that drag will alter the direction of the animation IF rewind is set
		Set this to false to not alter the direction - you can still drag backwards
		but when you let go, it will go in the direction the animation was going
		http://zimjs.com/nio/drag.html

ZIM NIO EXTRA! - IMPROVEMENT
	EXTRA! provides animation based on animation.
	This allows for setting zoom, depth, speed, fade, etc. based on target y value while animating on a path
	but EXTRA! also opens up endless possibilities as the input and output does not have to be the target.
	This means that animation can also control properties of other objects
	and other object properties can control the animation.
	http://zimjs.com/nio/extra.html

	There is a general and full format for EXTRA! but convenience properties are also provided.
	These primarily help with depth while animating along a path (Squiggle or Blob) or just a straight line with x and y.

	ZOOM, SPEED, LAYER, FADE
	Added zoom, speed, layer and fade convenience properties to animate props
	These accept an array of values - [inputMin, inputMax, outputMin(default 0), outputMax(defaunt stageH)]
	zoom:[.5,1.5] will scale the target to .5 if its location is at 0 and 1.5 if at stageH and then proportionally in between
	speed:[50,100] will make the animation play at a slower speed the higher the target is on the stage
	layer:[0,10] will make the target change layers from the bottom to the top if animated along the y from y=0 to y=stageH
	fade:[0.5,1] will make the alpha fade as the target recedes to the back (top of the stage)
	This will help with depth animation to make things farther away animate more slowly
	and give the ability to animate around an object depth-wise.

	EXTRA
	In addition to the convenience properties above, ZIM EXTRA! has a more general and complete format:
	Pass in a single EXTRA! object or an array of EXTRA! objects: extra:{} or extra:[{},{},{}]
	The object has the following properties - all are optional except the outputProp which is required:
	   |ZIM VEE| - each object below optionally accepts a ZIM VEE value for zik() to pick randomly from
	   inputObj - (default target) - the object with the input property - probably the animation target but could be any object
	   inputProperty - (default "y") - a string of the property name for the input - "x", "rotation", etc.
	   inputMin - (default 0) - the minimum input value for the calculation - also see constrain
	   inputMax - (default stageH) - the maximum input value for the calculation - also see constrain
	   outputObj - (default target) - the object whose output property is being changed - probably the animation target but could be any object
	   outputProp - (default "scale") - a string of the property name of the output - "scale", "layer", "rotation", etc.
	   outputMin - (default 0) - the minimum output value for the calculation - also see constrain
	   outputMax - (default 1) - the maximum output value for the calculation - also see constrain
	   factor - (default 1) setting factor to -1 will reverse the direction of the animation
	   outputRound - (default false) set to true to receive rounded output values
	   constrain - (default true) constrain the output value to outputMin and outputMax
		   set to false to let values go beyond provided mins and maxes
		   this is quite usual when a proportion is easily figured at a certain range
		   and continued increase or decrease is desired outside the range - just turn constrain to false.
	   EXAMPLES:
	   extra:{outputProp:"scaleX"} would animate the scaleX of the target from 0-1 over the stage height
	   extra:{outputObj:circle, outputProp:"alpha"} would animate the alpha of circle based on the animated target's y position
	   extra:{inputObj:circle, inputProp:"x", inputMax:stageW, outputProp:"level"} would animate the target's child index as the circle's x goes across the screen
	   ** in the last two examples, circle is a different object than the target of the animation - circle might be animating independently or based on a Slider value, etc.

CORNER
Modified all corner properties to accept an Array [topLeft, topRight, bottomRight, bottomLeft]
new Button({corner:[20,20,20,0]}).center();
https://zimjs.com/nio/corners.html

TAP
An chainable tap(call, distance, time, once) method has been added to all DisplayObjects along with a noTap() method
This acts like a traditional click where you down up without moving the mouse (within the distance parameter)
This is handy too as the methods are chainable.  The callback function will receive the traditional event object

HOV
Added a short chainable method hov(value, prop) to change the value of a hovered object
By default this is the alpha if a number is passed or the color if a string is passed
new Circle().center().cur().alp(.5).hov(.8).tap((e)=>{e.target.color = red; stage.update();});

GENERAL
Added interpolate and percentage parameters to closestPointAlongCurve()
That returns either a closest interpolated point
or the percent along a path such a point would be - used by drag parameter in animate.
Added damp parameter to Slider and Dial
use with Ticker rather than "change" event - eg:
Ticker.add(function () {circle.x = slider.currentValue;});
Fixed Stepper clone - was missing new color (for text color) parameter
Updated segmentPercents to segmentRatios
to keep all percents 0-100 and all ratios 0-1
Fixed pos() to position properly inside rotated and scaled bounds
had been using boundsToGlobal() should have been using getTransformedBounds()
Fixed thickness now being cloned properly in Squiggle
Removed labelColor and labelOffColor from Tabs as these were replaced by color and offColor - BREAKS parameter order after corner
Adjusted Tabs and Pad color and rollColor of "selected" tab to be colorOff rather than color when currentSlected is false
Adjusted Tabs and Pad so if currentSelected is false, the current selected button does not loose its rollover when pressed
All control objects now have a type property that gives the class name as a string - DisplayObjects already have this
Added pane and textArea properties to Blob and Squiggle to refer to the recordPoints Pane and its TextArea - helps to add interface to popup if desired
like to let user modify point details and submit back to app.
BREAK - changed Window titleBarColor to titleBarBackgroundColor and added a titleBarColor for the text color
Fixed glitch in title bar when not draggable - letting you click through to content - no longer does this
Added size property to Label to change font size after creation - thanks Ami Hanya for the prompting

Welcome to ZIM NIO - fresh on the heels of ZIM OCT - which brought STYLE and cool Tile updates and more!
TypeScript has been updated, code page, Examples page, front page logo, Distill, Bubbling videos, Templates are updated.
Blog to come, social media to come, etc.




////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
ZIM OCT (8)
STYLE
Replaced DEFAULTFONT with a general STYLE system. IMPROVEMENT
STYLE can be used to set any parameter on a DisplayObject.
For instance: Circle, Blob, Button, Pane, Bitmap, Sprite, etc.
These are applied at the time the objects are made.
They are cascading with each level overriding the previous level:

1. GENERAL: any style can be specified in general
   corner:30 will make all corners default to 30
2. TYPE: styles for object type can be set to override the general styles
   Button:{corner:0} will make all button corners default to 0
3. GROUP: styles for a group can be set to override the type styles
   homePage:{corner:20} will make all objects of that group default to 20
4. OBJECT: styles applied as parameters to the object override all other styles
   new Button({corner:40}) will make this button have a corner of 40

STYLE = {
  corner:20,
  backgroundColor:pink,
  type:{
     Button:{width:{min:100, max:500}, corner:0, centerReg:true, move:{y:series([-150, -50, 50, 150])}},
     Dial:{add:true, x:800, y:600, backgroundColor:red, scale:2, outline:true},
     Pane:{corner:ignore, color:white, draggable:true, width:300, label:"HI!"},
     ProgressBar:{add:true, x:200, y:600, barType:"rectangle", transform:true},
     Tabs:{add:true, x:100, y:100}
  },
  group:{
     homePage:{corner:30}
  }
}
new Button(); // will have a corner of 0 and be pink
new Button({group:"homePage"}); // will have a corner of 30 and be pink
new Button({corner:10, group:"homePage"}); // will have a corner of 10 and be pink
new Button({corner:"ignore"}) // will have a corner of its default 20 and be pink
new Button({style:false}).pos(700,100,stage); // will have original default styles
new Dial(); // will be red and scaled twice as big and have an outline
new Tabs(); // will have a corner of 20 and selection will be pink
var p = new ProgressBar({corner:15}); // will be a bar with transform tools, corner 15
p.percent = 25;
new Pane().show(); // will ignore corner 30 and use its original 20 - it will say HI! in white and be draggable

STYLE = {
   borderColor:dark,
   borderWidth:5,
   type:{
      Rectangle:{
         // color:red,
         color:[red, pink, purple], // pick a random color from here
         centerReg:true,
         animate:{props:{rotation:360}, time:500, ease:"linear", loop:true},
         move:{x:series([-200, 0, 200])}
      }
   }
}
// make three spinning rectangles
loop(3, function(){new Rectangle();});

See: https://zimjs.com/style.html for an example

TRANSFORM STYLES
Transformations can also be applied (all are numbers - visible is a Boolean):
x, y, rotation, alpha, scale, scaleX, scaleY, regX, regY, skewX, skewY, visible
a bounds style has a value of {x:Number, y:Number, width:Number, height:Number}
where x and y are optional

RANDOM, RANGES, SERIES, FUNCTIONS
Any property value can be a ZIM VEE value to make use of ZIM zik (pick)
color:[red, green, blue] will pick a random color for each object for which the style is applied
x:series([100,200,300]) will place subsequent objects at these locations
width:{min:100, max:500} will make objects with a width within this range
See Docs on ZIM zik() and ZIM series() for more information

FUNCTION STYLES
The following functions have been added:
addTo, center, centerReg, transform, drag, gesture, outline, mov, animate, wiggle
Values of true will give default functionality for all but mov, animate and wiggle
ZIM DUO configuration objects can be set as a value for any of these
example: drag:true;  or  drag:{onTop:false}
For animate and wiggle, [] can be put around multiple configuration objects
to wiggle in the x and y for instance or run multiple animate calls on the object

CONVENIENCE STYLES
add:true - has been provided to add to the stage (use addTo for other containers)
move:{x:value, y:value} or move:x - mirrors the mov Function style (just adding the e)
style:false - will turn off all styles for the selector

EXCLUSION
A value of ignore can be used to exclude any earlier styles and return to the original default.
ignore is a ZIM global variable - if zns is true then use zim.ignore or just "ignore".
Setting style:false will exclude the object from all styles
All DisplayObjects have a style parameter (default true). Set to false to ignore styles.

GROUPS
All DisplayObjects have a group parameter.
This parameter accepts a string or a comma delimited string of multiple groups.
The group of components can then be targeted in the Group section of STYLE.
A group can contain just one component and act like an ID in CSS.

COLORS
Colors have been reworked for the components (they stay the same for shapes)
Basically, color is now used for text and backgroundColor for the backgrounds - like CSS.

color - text (and rollColor)
backgroundColor - background of component (and rollBackgroundColor)
foregroundColor - foreground of component
borderColor - border on background and foreground
indicatorColor - indicator of component

SUMMARY OF PARAMETER CHANGES - BREAK
Most non-Label color and rollColor parameters and properties
have been changed to backgroundColor and rollBackgroundColor
color and rollColor have been kept when the component has text
and these now refer to the text - specifying a Label will override these.
Added backgroundColor to CheckBox and RadioButtons for the box and circle
The Tabs and Pad offColor is now the text color
and they get an offBackgroundColor to specify non-selected buttons
and they get backing and rollBacking parameters before the waitBacking

Exceptions:
Most components have their color parameter changed to backgroundColor.
The exceptions are those which shift to a foregroundColor parameter:
Waiter, ProgressBar, Indicator has its color parameter changed to foregroundColor.
The color parameter remains on the ProgressBar for its text color.
Waiter has its foregroundColor moved to before its backgroundColor - for consistency

Keyboard:
Changed Keyboard parameters so text gets color and backgrounds get backgroundColor
There are a bunch of these so here they are - old on the left and new on the right:
color to backgroundColor
textColor to color
shiftColor to shiftBackgroundColor
shiftHoldColor to shiftHoldBackgroundColor
placeColor to placeBackgroundColor
placeTextColor to placeColor
shiftBackgroundColor to shiftColor

// TOGGLE
There are objects that have control interfaces that can be shown or hidden:
Grid, Guide, Layout, Blob, Squiggle and objects with outline() or transform()
We have added a toggle(state) method to these
This has also been added to the Manager class which gives it to the GridManager, GuideManager, LayoutManager and TransformManager
Using toggle() will show the control (if hidden) or hide the control (if showing)
You can also use toggle(true) to specifically show and toggle(false) to specifically hide
A read-only toggled property has been added that is true if visible and false if not
BREAK - the transform(), Blob() and Squiggle() toggle parameter and property have been changed to allowToggle
Added the toggle system to Keyboard and ColorPicker, ProgressBar and Waiter (Pane already had one)
Many of these have hot keys to toggle or press on / press off to toggle and these still work
They also have show() and hide() and visible properties or showControls() and hideControls() and controls property
These will still work as well.
Added a show(), hide() to ColorPicker to allow it to act like a pop-up like Pane, Waiter, ProgressBar and Keyboard
Added an optional container parameter to ColorPicker - ColorPicker can still be added with addTo(), center(), etc.
but if it is being used as a pop-up, the show() and hide() or toggle() should be used.

// BACKINGS and BACKGROUNDS
The term backing is now consistently used for a custom DisplayObject added to a component
(such as a Pizzazz shape or pattern)
The term background is now consistently used for a built in background rectangle
These are specified with the backgroundColor parameter for Label, Indicator, etc. objects
In the past, both backingColor and backgroundColor were used which was inconsistent.
BREAK Changed Indicator, Tabs, ColorPicker and TextArea backingColor to backgroundColor
Renamed the backing properties of these to background to access the rectangle

// DOCS
Changed the order of the modules as they appear in the docs
FRAME, DISPLAY, METHODS, CONTROLS, CODE, WRAP, META
In the actual file, wrap and code come first and frame second last
This is needed as wrap and code do not require CreateJS
But from a user standpoint, the Frame, Display, Methods and Controls are most important
Hopefully you will get used to it - and it will be a good change
Changed the text docs as well and adjusted search to work with new changes
Added SubSection Markers and reorganized items within modules

// GENERAL
BREAK - changed drag parameters to draggable - as conflicts with drag function style
BREAK - changed the name of the Label backgroundCorner to just corner (easier to style)
BREAK - Added a corner property to Indicator after backgroundColor
BREAK - Added a borderColor and borderWidth to Keyboard - so changes parameter order
BREAK - added a borderWidth property to Stepper and Indicator - this is after borderColor so breaks parameter order
Also made border work on Indicator background
Adjusted copy() to not break when cloning a null value
IMPROVEMENT Fixed Button rollPersist to work if release outside of Button
Added indicatorColor property to CheckBox and RadioButtons that defaults to color
Adjusted ColorPicker so color text does not shift when picked (due to changes in centerReg() functionality)
PATCH - fixed bounds of cloned Container without initial bounds set - thanks Ami for the find.
PATCH - fixed ColorPicker when not with all colors, lastColor was set to blue and now it is not
This meant that the change event would not fire if the first color chosen is blue ;-).
IMPROVEMENT - clone() now clones the type property
so if you change the type of a Rectangle and clone it, the clone will have the changed type
Handy for passing an object with a custom type="Pattern" in for backings in STYLE
Adjusted Keyboard so selectedIndex starts at the end of the label text - also fixed backspace at 0 index with existing text bug
Fixed animate() when running a series with as a global function with no target
the last change for overriding by default only if x and y are animating - was expecting a target - fixed now...
IMPROVEMENT - updated Button so when it has a backing or icon,
it removes the rollover state when enabled is set to false
Adjusted backing on Label to mask backings of type="Pattern"
Adjusted Squiggle and Blob to drop properly when scaled or rotated

WELCOME TO ZIM OCT!
A kids section is also being added to ZIM Skool for workshops and secondary school lessons
Please let others know about ZIM and we'd love to hear from you at https://zimjs.com/slack - very productive!



////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
ZIM HEP (7)
Added a Keyboard() class to the Display Objects (thanks Frank Los for the design and code)
Keyboard works with Label() to provide single line editable text without needing the system keyboard
Added top() and bot() chainable methods to put object at top or bottom of container - thanks Ami Hanya for the recommendation.
IMPROVEMENT Added links to libraries at the top of the docs for SOCKET, GAME, PHYSICS, THREE, PIZZAZZ, PIZZAZZ 2
as well as made all these files consistent in introduction and documentation format (inside CDN files)
Launched Physics and Three as version 1.0 - Game and Socket were already version 1 and Pizzazz is different
IMPROVEMENT Added video links to Docs - a little button near view and bits at the bottom of each doc entry
IMPROVEMENT Added wheel event to Window for mousewheel scrolling - was using out-of-date events
Added a scrolling event to Window when it is scrolled
Added an HTML NodeList to ZIM loop() - see ZIM zet() to get a NodeList like $() in JQuery
Dedicated ZIM Portal to Stephen Hawkings - may he portal on!
Added Button borderColor property - thanks Chris Spolton!
Added an svgToBitmap() conversion function to META module to convert SVG to a ZIM Bitmap
Thanks Kenil Domadia for the recommendation
For Base64 Bitmap support made Bitmap update the stage after 50ms and then after another 50ms
this is because there is a delay in creating a Bitmap from data - thanks Ami Hanya for the prompting
All the changes are reflected in ZIM TypeScript Typings http://zimjs.com/typescript/zim_ts.zip

KEYFOCUS - IMPROVEMENT
Added a global KEYFOCUS constant to keep track of which component has keyboard focus
This is a system for all components with keyboard controls (set to active)
The first component made will set KEYFOCUS to itself
Anytime a component is used it sets KEYFOCUS to itself
Components have a keyFocus property that can be manually set
There is only one component with key focus
so setting removes key focus from the last key focused component
Added KEYFOCUS to TypeScript
If tabbing from one component to the next is needed, consider using ZIM Accessibility()
Made keydown change components only if component is on stage

POS()
BREAK inserted an index parameter to pos(x,y,container,index,add) - also now accepts DUO
Was going to make the default be adding to stage - but after some thought, decided not to
You must still explicitly specify the container
We had changed it but then were getting errors where things were showing up unexpectedly in score boards, etc
and it just seems a little too dangerous

ZIM GESTURE
Added onTop and surround parameters to ZIM gesture() - thanks Frank Los for the suggestions
surround currently does not work if rotate is true
Adjusted gesture() rect parameter to handle resized and rotated objects
This is an IMPROVEMENT but also slightly BREAKS code with old rect values
Here you specify the rectangle to contain the object - not the registration point of the object
So this is slightly different than the rect provided to ZIM drag
To accommodate this we have added an update parameter to the gestureRect
This defaults to true and Gesture will dynamically update the gestureRect as the object scales and rotates
Internally, it passes a false to the new update parameter.

GENERAL FIXES
Removed ColorPicker indicator if currentIndex is less than 0
Fixed grip on ColorPicker to be dragable by setting shape to mouseEnabled false so background is selectable
IMPROVEMENT - adjusted TextArea so readOnly parameter works
Fixed decimal values for Stepper - some values had micro additions - these have been rounded to the decimal number
Adjusted tabs so that if currentEnabled is true, clicking button leaves button on rollcolor - like a button would - good for button bars
Fixed stage property in waitModal for buttons, tabs, etc.
Fixed next mousedown and hold on Stepper when mouse not moved.
Made animate() return the target for chaining when ANIMATE is set to false.
Changed loop() docs for method to not include loop function functionality
but rather refer to the loop() function in CODE module
BREAK - changed the Squiggle borderDashedCommand to dashedCommand as the Squiggle has no border
Squiggle is no longer implements a ZIM Shape in TypeScript as it has no border
Adjusted outline of Label to show above backing and backgroundColor
Adjusted wiggle to not use animate with a Ticker if object does not have a stage
Adjusted Slider so inside setting properly centers the slider in bounds
Added JS document.Window and document.Blob references before overwriting with ZIM Window and Blob




////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
ZIM SIX (6)
Made ZIM Accessible - IMPROVEMENT
Added zim.Accessibility() class to handle tabbing to any ZIM Display Object and send messages to Screen Readers
http://zimjs.com/code/screenreader has a detailed example
You basically pass zim.Accessibility() an array of objects (with optional titles)
These will be tabbed to if they are on the stage and the title or a default title sent to the Screen Reader
There is also a talk() method to be able to send a message to the Screen Reader at any time
Gave all ZIM Display objects a type property that matches the class name as a String (case sensitive)
BREAK - removed former (marked as temporary) work with tab order in Tabs, Stepper, and Frame - this is all replaced and updated in zim.Accessibility()
IMPROVEMENT Adjusted Window to handle removing of Window while being rolled over (thanks Frank Los for the bug report)
Added SLACK support discussions https://zimjs.slack.com
Removed clone override from Swipe, Frame, and a few others that did not need it - just an oversight
indicator.currentIndex is now constrained from -1 to num-1 where num is the number of lights
Added readerDecimals parameter to Slider and Dial with default 2 decimal places the screen reader will read
Added keyArrows parameter to Slider, Dial and ColorPicker for arrow key usage if in focus
Added keyArrowsStep parameters to Slider, Dial so Screen Reader does not read all the decimals
Adjusted bar of slider for positioning when pressed - was half a step off due to button registration change - IMPROVEMENT
Also expanded hitArea on bar - IMPROVEMENT
Added spellCheck parameter to TextArea - default true but can set to false
Added an allowDefault parameter to zim.Frame that passes value through to CreateJS Touch.enable() method's third parameter
Note: the third parameter does not seem to be working so an issue has been added to CreateJS GitHub - thanks Jonghyun Kim for working on this with us
https://github.com/CreateJS/EaselJS/issues/898
This will also prevent Frame from using zil to keep the canvas still
You can set allowDefault to false and then manually remove the zil events for specific key or scrollwheel functionality
Although the ZIM namespace was removed in 5.5.0, it will be handy to remember that from version 6 on, the ZIM namespace is not required


////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
ZIM VEE (5)
No major changes to existing ZIM structure.
Added ZIM VEE values to various parameters that allow for passing in options.
The options can be run at a later date to provide a more dynamic result.
The options can be specified by an array, a ZIM RAND object or a function returning a value.
A ZIM RAND object is an object literal with min, max, and optional integer and negative parameters.
For instance, the ZIM interval() can receive a ZIM VEE value to run at a random time each interval.

An Emitter class is now available for emitting particles.
The Emitter class uses ZIM VEE values so you can emit random particles.

A Blob class is now available that lets you present a blob with Bezier curves.
These can be editable, savable, not editable or hidden.
A ZIM VEE value can be passed in to the Bezier handle length to make random blobs.

WebGL is now directly supported with the gpu parameter of ZIM Frame.
This uses the new StageGL system in CreateJS and has certain display limitations so see docs.

As of 5.5.0 you no longer need the zim namespace:
var circle = new Circle(); // will work for any code function, display object or control
// you can still use the namespace as follows:
var circle = new zim.Circle();
// and you can require the namespace by setting var zns = true before loading ZIM (see templates)
// the namespace makes sure that zim code does not interfere with other code
// but most of the time, all the code is in ZIM - and if not, it is easy to require the namespace.


////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
ZIM 4TH (4)
Added all the Create module functions as methods on ZIM objects.
Previously we ran functions (which are still available).

var circle = new zim.Circle();
zim.center(circle, stage); // center function
zim.drag(circle); // drag function

Now we can use the functions as methods:

var circle = new zim.Circle();
circle.center(stage); // center method
circle.drag(); // drag method

ZIM 4TH also introduced ZIM Container, Shape, Sprite, MovieClip and Bitmap
that are all the same as the CreateJS equivilants
except they have all the Create module functions added as methods
and they have width and height read only properties.
Since the zim shapes (Rectangle, Circle, Triangle) and all the components
Label, Button, Dial, Slider, Window, Pane, Tabs, etc. are zim Containers
they all have the methods and width and height added as well.
The new methods are:

drag() noDrag() dragRect() setSwipe()
hitTestPoint() hitTestReg() hitTestRect()
hitTestCircle() hitTestBounds() hitTestGrid()
boundsToGlobal()
move() animate()
scale() scaleTo() fit()
centerReg() center()
outline() place() expand()
mask()

Example:
circle.alpha = 0;
circle.animate({alpha:1}, 700);

or with ZIM DUO

circle.animate({obj:{scale:2}, time:700, loop:true});

NOTE: ZIM 4TH also flattened the props parameter for move and animate.
This moves the loop and rewind properties formerly in props
to just regular parameters of move and animate (see documentation).
For instance, the loop above was props:{loop:true} now it is loop:true.


////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
ZIM TRI (version 3 of ZIM)
Made it so that center(obj, container) and centerReg(obj, Container)
add the obj to the container
so there is no need for container.addChild(obj).
A zim.Ticker was also added which runs with move() and animate().
You can also add your functions with zim.Ticker.add(function, stage).


////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
ZIM DUO (version 2 of ZIM)
Added support for two ways to pass parameters.

1. new zim.Rectangle(100, 100, "red", null, null, 10);
Where you need to fill in null to keep the order of the parameters.

2. new zim.Rectangle({width:100, height:100, color:"red", corner:10});
Where you use a single configuration object
using the parameter names as outlined in the documentation.



For a more complete list of changes see GIT HUB:
https://github.com/danzen/zimjs



******************************************************

ZIM will allow you to make wonderful interactive media
on the ubiquitous HTML browser platform and mobile through PhoneGap.
ZIM has taken thousands of hours to build and test
so that you can save time and thought to build efficiently.

Your donation and donations of coders before you
help keep us going to bring you the very best.
Donations can be made through PayPal to Agency Zen
http://zimjs.com/donate/
