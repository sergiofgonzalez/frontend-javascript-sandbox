"use strict";

/* globals InfoboxLogger */

const logger = new InfoboxLogger("infobox");

const inputText = document.querySelector("#inputText");
const inputPassword = document.querySelector("#inputPassword");
const inputField = document.querySelector("#inputField");

inputText.addEventListener("focus", () => {
  logger.insertln(`Focus is on ${ document.activeElement.tagName} (${ document.activeElement.id })`);
});

inputText.addEventListener("blur", () => {
  logger.insertln(`Focus is on ${ document.activeElement.tagName} (${ document.activeElement.id })`);
});

inputPassword.addEventListener("focus", () => {
  logger.insertln(`Focus is on ${ document.activeElement.tagName} (${ document.activeElement.id })`);
});

inputPassword.addEventListener("blur", () => {
  logger.insertln(`Focus is on ${ document.activeElement.tagName} (${ document.activeElement.id })`);
});

inputField.addEventListener("focus", () => {
  logger.insertln(`Focus is on ${ document.activeElement.tagName} (${ document.activeElement.id })`);
});

inputField.addEventListener("blur", () => {
  logger.insertln(`Focus is on ${ document.activeElement.tagName} (${ document.activeElement.id })`);
});