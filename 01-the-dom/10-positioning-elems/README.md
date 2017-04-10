# 10 &mdash; Positioning DOM Elements
> 

## Description

The `position` style drives the layout of an element:
+ `static` &mdash; the element sits in its normal place in the document.
+ `relative` &mdash; the element takes up space in the ocument, but the properties `top` and `left` can be used to move the element the given amount of pixels *relative* to its normal place.
+ `absolute` &mdash; the element is removed from the normal document flow, so that it no longer takes up space and may be overlaid on top of other elements. In this case, the `top` and `left` properties are used to absolutely position the element relative to the top-left corner of the nearest enclosing element whose `position` property isn't static, or relative to the document if such element does not exist.

In the example, we reposition both the elements with *jumbotron* and *lead* classes with rules that change their position relatively and absolutely:
```css
.jumbotron {
  position: relative;
  top: 0px;
  left: 100px;
}

.lead {
  position: absolute;
  top: 50px;
  left: -50px;
}
```