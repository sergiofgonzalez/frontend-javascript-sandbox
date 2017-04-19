"use strict";

const textGreeting = document.querySelector("#text-greeting");
const textLength = document.querySelector("#text-length");


textGreeting.selectionStart = textGreeting.value.indexOf("...");
textGreeting.selectionEnd = textGreeting.value.length;

textLength.textContent = `${ textGreeting.value.length } character${ textGreeting.value.length !== 1? "s" : ""}`;

textGreeting.addEventListener("input", updateTextLengthInfo);

textGreeting.addEventListener("keydown", evt => {
  if (evt.key === "F2") {
    replaceSelection(textGreeting, "Hello to Jason Isaacs!");
    updateTextLengthInfo();
    event.preventDefault();
  }
});

function replaceSelection(textField, replacementText) {
  const from = textField.selectionStart;
  const to = textField.selectionEnd;
  textField.value = textField.value.slice(0, from) + replacementText + textField.value.slice(to);
  textField.selectionStart = textField.selectionEnd = from + replacementText.length;
}

function updateTextLengthInfo() {
  textLength.textContent = `${ textGreeting.value.length } character${ textGreeting.value.length !== 1? "s" : ""}`;
}