# 06 &mdash; Layout Considerations
> understanding how the browser lays out the elements and how to obtain from JavaScript the precise position of an element

## Description

There are two types of HTML elements:
+ **block elements** &mdash; such as `<p>` and `<h1>` that take up the whole width of the document and are rendered on separate lines.
+ **inline elements** &mdash; such as `<strong>` and `<a>` that are rendered inline with their surrounding text.

For any given moment, browsers are able to compute a layout, which gives each element a size and position based on its type and content. This layout is then used to actually draw the document.

This information can be accessed from JavaScript:
+ `offsetWidth` and `offsetHeight` give you the space an element takes in pixels
+ `clientWidth` and `clientHeight` give you the size of the space inside the element (ignoring the border width)
+ `getBoundingClientRect()` returns an object with `top`, `bottom`, `left` and `right` properties indicating the pixel positions of the sides of the element relative to the *top-left* of the screen.
+ The global vars `pageXOffset` and `pageYOffset` give you the current scroll position, and are useful if you want to know the position of the element relative to the whole document, rather than the screen.

Browsers wait as long as they can before they trigger the re-layout of a document, because this is a heavy task. Therefore, a program that repeatedly reads the DOM and changes it will run very slowly.

In the example, we demonstrate how constantly reading layout info and modifying the DOM is ~40 times slower than writing the DOM.
The idea is to write a variable number of *X* characters until they occupy more than 2000 pixels. In the first version of the function, we are constantly writing and reading the offsetWidth of the element, while in the second one, we write *5 Xs*, compute how much space it took and then calculate how many *Xs* we have to write.

```javascript
/* quite slow */
const target = document.getElementById("one");
while (target.offsetWidth < 2000) {
  target.appendChild(document.createTextNode("X"));
}

/* super fast */
const target = document.getElementById("two");
target.appendChild(document.createTextNode("XXXXX"));
const total = Math.ceil(2000 / (target.offsetWidth / 5));
for (let i = 5; i < total; i++) {
  target.appendChild(document.createTextNode("X"));
}

```