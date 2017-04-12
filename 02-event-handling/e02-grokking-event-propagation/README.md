# e02 &mdash; Grokking Event Propagation
> A more involved example about event propagation

## Description

Event handlers register on parent nodes with children are also triggered when events are received on their children elements.

In the example, a row with five buttons rea defined within a surrounding `<p>` and event handlers for the first button and surround paragraph for the `mousedown` event are also defined.

The following logic is added:
+ When the *"Click Me!"* button is clicked with the left button, the event is triggered on the button and propagated to the surrounding paragraph.
+ When the *"Click Me!"* button is clicked with the right button, the event is triggered on the button, but not propagated to the surrounding paragraph using `evt.stopPropagation()`
+ Clicking on the rest of the buttons are identified by defining a handler on the surrounding paragraph with the following logic:
```javascript
surroundingPara.addEventListener("mousedown", evt => {
  if (evt.target.tagName === "BUTTON" && evt.target.firstChild.nodeType === document.TEXT_NODE) {
    logger.println(`Button clicked was: ${ evt.target.childNodes[0].textContent }`);
  }
});
```

**Note**
If you define another row of buttons within the surrounding para, the event is not being propagated. This is not a JavaScript problem, but rather a problem with the HTML definition for the `<p>` element (see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/p).

If you read carefully, you'll see that *a `<p>` start tag is automatically closed if another `<p>` element is found. As a consequence, you cannot have a `<p>` within a `<p>`.

The situation changes if you use a `<div>` instead of a `<p>`.