"use strict";

/* globals InfoboxLogger */

const logger = new InfoboxLogger("infobox");

const fullName = document.querySelector("#fullName");
const age = document.querySelector("#age");

fullName.addEventListener("focus", () => {
  const alert = document.querySelector("#fullNameAlert");
  alert.style.display = "";
});

fullName.addEventListener("blur", () => {
  const alert = document.querySelector("#fullNameAlert");
  alert.style.display = "none";
});

age.addEventListener("focus", () => {
  const alert = document.querySelector("#ageAlert");
  alert.style.display = "";
});

age.addEventListener("blur", () => {
  const alert = document.querySelector("#ageAlert");
  alert.style.display = "none";
});

addEventListener("focus", () => {
  logger.overwriteln("Document has come into focus");
});

addEventListener("blur", () => {
  logger.overwriteln("Document has lost its focus");
});