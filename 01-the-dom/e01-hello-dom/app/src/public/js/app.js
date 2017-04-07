"use strict";

function isTextFoundInNode(node, text) {
  if (node.nodeType === document.ELEMENT_NODE) {
    for (const childNode of node.childNodes) {
      const result = isTextFoundInNode(childNode, text);
      if (result.found) {
        return result;
      }
    }
    return { found: false };
  } else if (node.nodeType === document.TEXT_NODE) {
    return {
      found: node.nodeValue.indexOf(text) > -1,
      stringSearched: text,
      wholeString: node.nodeValue,
      element: node.parentNode.localName
    };
  } else {
    return { found: false };
  }
}


console.log(isTextFoundInNode(document.body, "book"));
console.log(isTextFoundInNode(document.body, "video"));
console.log(isTextFoundInNode(document.body, "doomed"));


