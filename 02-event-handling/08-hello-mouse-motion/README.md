# 08 &mdash; Hello Mouse Motion!
> handling 

## Description

Every time the mouse pointer moves, `mousemove` event is triggered. This event is useful in mouse-dragging functionality. On the event info you can read:
+ `pageX` and `pageY` which give you the coordinates relative to the whole document meaning that will never read (0,0) if the browser screen has been resized and scrolled and you can't see the top-left of the document.
+ `clientX` and `clientY` which give you the coordinates within the applications client area, meaning that when the cursor is at the top-left corner will be (0, 0) independently of whether the screen has been resized.

Whenever the mouse pointer enters or leaves a node, a `mouseover` or `mouseout` event fires, this can be used to implement hovering effects without CSS.