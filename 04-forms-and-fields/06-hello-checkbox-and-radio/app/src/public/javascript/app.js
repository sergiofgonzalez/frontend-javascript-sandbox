"use strict";

const jumbotron = document.querySelector(".jumbotron");
const checkbox = document.querySelector("#purple-checkbox");

const radios = document.getElementsByName("backgroundColorRadios");

checkbox.addEventListener("change", () => {
  checkbox.checked ? setColor("mediumpurple") : setColor("");
});


for (const radio of radios) {
  radio.addEventListener("change", evt => {
    setColor(evt.target.value);
  });
}

function setColor(color) {
  jumbotron.style.background = color;
}
