# 05 &mdash; Reading and Writing Node Attributes
> using `getAttribute` and `setAttribute` to read and write arbitraty attributes of Node elements

## Description

Illustrates how to use `getAttribute` and `setAttribute` on DOM elements.
In the example, the HTML contains a paragraph tagged with the attribute:
```html
...
  <p class="form-control-static" data-classification="secret">super-secret-password</p>
```

The program locates all paragraphs tagged with `data-classification="secret"` and masks the contents of the paragraph.

Note:
The commonly used attribute `class` cannot be used to retrieve the *CSS class* from the DOM element as it is a reserved keyword in JavaScript. Alternatively, you can:
+ use `node.className`
+ use `node.getAttribute("class")`