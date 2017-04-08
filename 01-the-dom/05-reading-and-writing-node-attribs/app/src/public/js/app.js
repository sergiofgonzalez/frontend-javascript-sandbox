"use strict";

const paras = document.getElementsByTagName("p");
[...paras].forEach(p => {
  if (p.getAttribute("data-classification") === "secret") {
    p.innerText = getMaskedString(p.innerText.length);
  } else {
    p.setAttribute("data-classification", "unprotected");
  }
});

function getMaskedString(len, maskingChar = "*") {
  let maskingString = "";
  for (let i = 0; i < len; i++) {
    maskingString += maskingChar;
  }
  return maskingString;
}