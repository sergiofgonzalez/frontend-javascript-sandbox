# 03 &mdash; Hello Event Object
> introduces the event object received by the event handler

## Description

Event handler callback functions are passed an event object that gives us additional information about the event, such as the mouse button that was pressed.

In the example we register a `click` event on the document and scan the `evt.button` property to see which button was pressed.

Note that the information in an event object depends on the event type. The `event.type` property is a string that identifies the type of event.
