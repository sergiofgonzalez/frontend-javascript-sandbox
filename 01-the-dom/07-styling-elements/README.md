# 07 &mdash; Styling Elements in the DOM
> using `style` element property to change the appearance of a DOM elements

## Description

You can use the `style` property of an element to change default styling of an element.

For example:
```html
<a href="#" style="color: green">styled link</a>
```

A style attribute can contain several declarations separated by `;`
```html
<a href="#" style="color: green; text-decoration: line-through">styled link</a>
```

But you can influence a lot of other aspects, such as whether the element is treated as a *block* or *inline* element, using `display` and the values:
+ `display: block` &mdash; the inline element will be treated as a block element (it can be ignored by the browser)
+ `display: none` &mdash; the element will not be displayed, but will be present in the HTML
+ `display: inline` &mdash; the block element will be treated as an inline element (it can be ignored by the browser)
```html
A <strong style="display: block">strong</strong> treated as an inline block.
```

From JavaScript, use the node's `style` property to change the style of an element, as in:
```javascript
const para = document.getElementById("some-paragraph");
para.style.color = "green";
para.style.fontFamily = "Courier New, Courier, monospace";
```

In the example, we illustrate all of this concepts by using `style` attribute and also create a paragraph with a given style that we changed after 5 seconds have passed.