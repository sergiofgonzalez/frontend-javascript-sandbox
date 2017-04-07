"use strict";

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

document.getElementById("quote")
  .appendChild(
    elt("footer", "---", elt("strong", "Anonymous"), 
        ", preface to the 2nd edition of ", 
        elt("em", "Famous Anonymous quotes for parents"), 
        ", 2017"));