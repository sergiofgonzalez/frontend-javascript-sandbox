# 08 &mdash; Cascading Style Sheets (CSS)
> styling HTML using CSS

## Description

A style sheet is a set of rules dictating how to style elements in a document.
It can be given inside a `<style>` tag:
```html
...
    <style>
      strong {
        font-style: italic;
        color: gray;
      }
    </style>
...
``` 
But this approach does not scale well (the same thing that happens to inline JavaScript) so we typically reference an external *style sheet* from the HTML file:
```html
  <link rel="stylesheet" href="css/styles1.css">
```

The *cascading* in *CSS* name means that multiple rules are combined following a *waterfall-like* mechanism so that some rules are overlaid by others.

+ When multiple rules define a value for the same property, the most recently read rule wins (assuming the rules have the same specificity, otherwise, the most specific rule will win. A rule's specificity is a measure of how precisely it describes matching elements. For example, `p.a` is more specific than `p`.)
+ Style declarations applied on a particular element using the `style` attribute always win

When writing a CSS rules, you can target:
+ DOM elements &mdash; as in `strong { color: gray; }`.
+ Elements with a particular class spec &mdash; as in `.subtle { font-size: 60% }`, which will be applied with elements featuring `class="subtle`.
+ Elements with a particular id &mdash; as in `#msg { color: red }`, which will be applied with the element having `id="msg"`. 

Things can get messy pretty fast when using CSS, because the CSS syntax allows you to mix the three previous *rules* in the same rule declaration to create things such as: `p.a.b#main { color: green }`, which means the style will be applied to:
+ `p` elements
+ featuring both *a* and *b* classes as in `class="a b"`
+ with `id="main"`

Note that the spaces are relevant, and therefore `p .a .b #main { ... }` will not work.

 The notation `p > a` can be used to apply a given style to all `<a>` that are direct children of `<p>`.

 The notation `p some-class` can be used to apply a given style to all elements with `class="some-class"` that are direct or indirect children of `<p>`.

 The following cheatsheet can be used as a quick summary for CSS rules:

| Syntax        | Applies To...                                    |
|---------------|--------------------------------------------------|
| strong {}     | `<strong>`                                       |
| p {}          | `<strong>`                                       |
| a {}          | `<a>`                                            |
| .subtle {}    | elems with `class="subtle"`                      |
| #main         | elems with `id="main"`                           |
| p.a.b#main {} | `<p>` nodes with `class="a b"` and `id="main"`   |
| p > a {}      | `<a>` nodes that are direct descendants of `<p>` |
| p a {}        | `<a>` nodes inside `<p>`                         |

In the example, there is an HTML that references a custom CSS document with which you can apply to verify the effect of changing things such as removing the `>`.