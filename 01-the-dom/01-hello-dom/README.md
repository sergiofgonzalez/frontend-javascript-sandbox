# 01 &mdash; Hello DOM!
> Introducing the DOM

## Description
DOM is a tree structure, and therefore, recursive functions tend to be more appropriate for DOM related operations.

Each node features a property `nodeType` that lets you identify the type of node you are visiting. The most interesting node types are:
+ `ELEMENT_NODE` &mdash; An element such as `<p>` or `<div>`
+ `TEXT_NODE` &mdash; The actual text of an element

To move through the DOM you have the following links to nearby nodes:
+ `childNodes` array-like object that can be iterated with `for...of`.
+ `parentNode` point to its containing node.
+ `firstChild` point to its first child or `null` for elements without children.
+ `lastChild` point to its first child or `null` for elements without children.
+ `previousSibling` point to the prev element or `null` for elements without siblings.
+ `nextSibling` point to the next element or `null` for elements without siblings.

In the example, a function is created to traverse the DOM from a particular node looking for matching text.

```javascript
function isTextFoundInNode(node, text) {
  if (node.nodeType === document.ELEMENT_NODE) {
    for (const childNode of node.childNodes) {
      if (isTextFoundInNode(childNode, text)) {
        return true;
      }
    }
    return false;
  } else if (node.nodeType === document.TEXT_NODE) {
    return node.nodeValue.indexOf(text) > -1;
  }
}
```

The function first checks the `nodeType` to obtain the type of the node it is visiting. If it is an element node, a recursive search in its children is initiated. Otherwise, if it is a text node, the `nodeValue` property is accessed to obtain the text of the element.