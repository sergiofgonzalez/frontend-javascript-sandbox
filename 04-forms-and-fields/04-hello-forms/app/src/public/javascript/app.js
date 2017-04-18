"use strict";

/* globals InfoboxLogger */

const logger = new InfoboxLogger("infobox");

const form = document.querySelector("form");
const nameInput = form.elements.inputName;
const surnameInput = form.elements.inputSurname;
const btn = document.querySelector("button");



form.addEventListener("submit", (evt) => {
  logger.insertln("Simulating sending data to the server: fields will be disabled now!");
  evt.preventDefault();
  btn.disabled = true;
  nameInput.disabled = true;
  surnameInput.disabled = true;
  setTimeout(() => {
    btn.disabled = false;
    nameInput.disabled = false;
    surnameInput.disabled = false;    
    logger.insertln("Form submission has been enabled again");
  }, 5000);
});

/*
  Add some validation
*/
nameInput.addEventListener("blur", () => {
  if (nameInput.value.length < 5) {
    const alert = nameInput.parentElement.children.alert;
    alert.style = "";
    alert.textContent = "The field must be at least 5 characters long";
  } else {
    nameInput.parentElement.children.alert.style = "display:none";
  }
  setButtonStatus();
});

nameInput.addEventListener("focus", () => {
  nameInput.parentElement.children.alert.style = "display:none";
});

surnameInput.addEventListener("blur", () => {
  if (surnameInput.value.length < 10) {
    const alert = surnameInput.parentElement.children.alert;
    alert.style = "";
    alert.textContent = "The field must be at least 10 characters long";
  } else {
    surnameInput.parentElement.children.alert.style = "display:none";
  }
  setButtonStatus();
});

surnameInput.addEventListener("focus", () => {
  surnameInput.parentElement.children.alert.style = "display:none";
});


function setButtonStatus() {
  if (nameInput.value.length < 5 || surnameInput.value.length < 10) {
    btn.disabled = true;
  } else {
    btn.disabled = false;
  }
}

addEventListener("keyup", () => {
  if (nameInput.value.length < 5 || surnameInput.value.length < 10) {
    btn.disabled = true;
  } else {
    btn.disabled = false;
  }  
});
