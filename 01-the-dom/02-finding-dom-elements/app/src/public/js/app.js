"use strict";

console.log("==== <li> elements");
const liElements = document.getElementsByTagName("li");
for (const liElem of liElements) {
  console.log(liElem.innerText);
}
console.log("=================");

console.log(`==== element with id="button"`);
const button = document.getElementById("button");
console.log(button.innerText);
console.log("=================");

console.log(`==== element with class="lead"`);
const itemsWithLeadClass = document.getElementsByClassName("lead");
for (const itemWithLead of itemsWithLeadClass) {
  console.log(`${ itemWithLead.localName }: ${ itemWithLead.innerText }`);
}
console.log("=================");

// Note that the methods work from the given node
const [ulElem] = document.getElementsByTagName("ul");
const paras = ulElem.getElementsByTagName("p");
console.log(paras);
const leads = ulElem.getElementsByClassName("lead");
console.log(leads);
console.log("=================");