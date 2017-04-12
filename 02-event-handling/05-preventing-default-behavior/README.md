# 05 &mdash; Prevening Default Behavior
> using `event.preventDefault` to prevent triggering hardwired default actions

## Description

In the example, a page with two buttons are defined. For the first one, we don't want the contextual menu to pop-up when the right-button is clicked.

To implement that, we define an event listener for the `contextmenu` event and in the callback, we checked that the first button has been clicked and then call `preventDefault` to achieve our goals. Clicking anywhere else in the document will make the context menu to pop up.

Note that you can also define the handler at the document level, and then check that the button that has been clicked on is the intended one:
```javascript
addEventListener("contextmenu", evt => {
  if (evt.target.tagName === "BUTTON" && evt.target.tagName.id === "btn-no-context-menu") {
    logger.println(`using "preventDefault" to disable popping up contextMenu`);
    evt.preventDefault(); 
  }
});
```

However, i tend to favor defining the listener on the specific object, as you don't have to navigate through the event properties to check that the correct button has been clicked.
