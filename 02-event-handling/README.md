# 02: Event Handling
> Handling Events in your Document

## [01 &mdash; Hello Event Handling](./01-hello-event-handling/)
Illustrates how to use `addEventListener` to register a handler for the `click` event in your document.

## [02 &mdash; Removing Event Handlers](./02-removing-event-handlers/)
Illustrates how to use `removeEventListener` to deregister a handler for a previously registered listener.

## [03 &mdash; Hello Event Object!](./03-hello-event-object/)
Introduces the event object that is passed to the listener callback and that contains information about the event.

## [04 &mdash; Hello Event Propagation!](./04-hello-event-propagation/)
Illustrates the use of `stopPropagation` method to prevent an event that is triggered on an element to be propagated to parent elements.

## [05 &mdash; Preventing Default Behavior!](./05-preventing-default-behavior/)
Illustrates the use of `preventDefault` method to disable default actions on DOM elements. In the example, it's demonstrated how to prevent the context menu to pop-up when a `<button>` is right-clicked.

## [06 &mdash; Hello Key Events!](./06-hello-key-events/)
Introduces basics of key event handling: `keydown`, `keyup` and `keypress` event handling.

## [07 &mdash; Hello Mouse Clicks!](./07-hello-mouse-clicks/)
Introduces basics of mouse click handling: `mousedown`, `mouseup`, `click` and `dblclick` event handling.

## [e01 &mdash; Grokking State and Event Handling](./e01-grokking-document-state-and-event-handling/)
An example that tests `addEventListener` and `removeEventListener` but intertwined with state management via element attributes and class element reading.

## [e02 &mdash; Grokking Event Propagation](./e02-grokking-event-propagation/)
An example of using event propagation to detect which button was clicked without defining an event listerner for each of the buttons of a button group.