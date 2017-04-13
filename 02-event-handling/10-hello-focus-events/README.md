# 09 &mdash; Hello Focus Events!
> handling `scroll` event

## Description

When an element gains focus, the browser fires a `focus` event on it.
When an element loses focus, the browser fires a `blur` event on it.

Note that unlike other events, `focus` and `blur` events do not propagate from children to parent.

Note also that the `window` object will receive `focus` and `blur` events when the user moves on or away from the browser window in which the document is shown.

In the example, a document with two `<input>` elements is defined. Along with the input, we have a couple of alerts that will be displayed when the associated element gains focus, and will be hidden again when it loses focus.

Document level event listeners for `focus` and `blur` that will display in the *infobox* a message explaining whether the document is in focus or not. This can be useful to disable animations or background logic when the tab is not in focus.