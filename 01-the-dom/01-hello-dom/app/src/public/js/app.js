"use strict";

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


console.log(isTextFoundInNode(document.body, "book"));
console.log(isTextFoundInNode(document.body, "video"));

