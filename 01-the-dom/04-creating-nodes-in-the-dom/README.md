# 04 &mdash; Creating Nodes in the DOM
> modifying the DOM

## Description

Illustrates how to create elements in the DOM  using:
+ `let node = document.createElement(type)` &mdash; creates an orphan DOM element of the given type (e.g. document.createElement("strong") created a `<strong>` element).
+ `let node = document.createTextNode(text)` &mdash; creates an orphan *Text Node* containing the given text.
+ `parentNode.appendChild(childNode)` &mdash; modifies the DOM appending the given childNode at the end of the `parentNode` children.

The example uses the following support function:
```javascript
function elt(type, ...children) {
  const node = document.createElement(type);
  for (let child of children) {
    if (typeof child === "string") {
      child = document.createTextNode(child);
    }
    node.appendChild(child);
  }
  return node;
}
```

This function returns a node that can be linked to an existing one, as in:
```javascript
document.getElementById("someElementId").appendChild(elt("div"), "div contents");
```

And it also supports creating nested elements:
```javascript
document.getElementById("someElementId").appendChild(elt("div"), elt("p", "A paragraph"));
```
