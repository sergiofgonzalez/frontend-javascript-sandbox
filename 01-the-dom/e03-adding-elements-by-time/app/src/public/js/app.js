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

setInterval(() => {
  const tableBody = document.getElementById("dynTableBody");
  tableBody.appendChild(
    elt("tr", 
      elt("th", tableBody.childElementCount.toString()), 
      elt("td", new Date().toISOString())));
}, 2500);