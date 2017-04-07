"use strict";


// Removing the element "Catorce"
const liElems = document.getElementsByTagName("li");
for (const liElem of liElems) {
  if (liElem.innerText.toLowerCase() === "catorce") {
    liElem.parentNode.removeChild(liElem);  // preposterous
  }
}


// Get the second element and append it at the end
const [, secondLiElem] = document.getElementsByTagName("li");
secondLiElem.parentNode.appendChild(secondLiElem); // this has an interesting effect of swapping 2nd and 3rd


// Swap first and second
const lis = document.getElementsByTagName("li");
const [ul] = document.getElementsByTagName("ul");
ul.insertBefore(lis[2], lis[0]);

// Replace first element with the second one
const newLis = document.getElementsByTagName("li");
ul.replaceChild(newLis[1], newLis[0]);
