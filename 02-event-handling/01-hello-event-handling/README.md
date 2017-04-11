# 01 &mdash; Hello Event Handling!
> using `addEventListener` at the document level

## Description

Very simple example that registers an event listener for the click event at the document level using:
```javascript
addEventListener("click", () => {
  logger.println("The document has been clicked!");
});
```

As we're using `addEventListener` as a global function, the event will be triggered when it detects a click anywhere in the whole window.