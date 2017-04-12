# 04 &mdash; Hello Event Propagation
> introduces the concept of *Event Propagation* and the `stopPropagation` method

## Description

Event handlers register on parent nodes with children are also triggered when events are received on their children elements.

In the example, we define two *buttons* within a `<p>` and define event handlers for the `click` event on the two buttons and the paragraph.

When the first button is clicked, both the `click` event handlers on the button and the surrounding paragraph are triggered. However, when the other button is clicked on, an `event.stopPropagate()` is used to prevent propagation to reach parents.
