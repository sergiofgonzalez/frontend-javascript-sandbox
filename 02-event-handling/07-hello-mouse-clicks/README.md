# 07 &mdash; Hello Mouse Clicks!
> handling 

## Description

+ `mousedown` is generated when the mouse button is pressed
+ `mouseup` is generated when the mouse button is released
+ `click` is triggered on the most specific node that contained both the press and release
+ `dbclick` is generated when two `click` event happens close together

To get precise information about the place wherea a mouse event happened have a look at `pageX`and `pageY` properties. `clientX` and `clientY` give you the coordinates relative to the part of the document that is currently scrolled into view.

In the example, we define event handlers for all those events and on top of that, we draw a small blue dot each time a `click` is detected. The dot is displayed in the location in which the event was detected.