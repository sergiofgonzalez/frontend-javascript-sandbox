"use strict";

const mainCourseSelect = document.querySelector("#maincourse-select");
const mainCourseText = document.querySelector("#text-maincourse");

displaySelectedMeal();

mainCourseSelect.addEventListener("change", displaySelectedMeal);

function displaySelectedMeal() {
  if (mainCourseSelect.value === "none") {
    mainCourseText.textContent = "None selected Yet!";
  } else {
    mainCourseText.textContent = mainCourseSelect.value;
  }
}

const binNumberSelect = document.querySelector("#bin-number-select");
const effectivePermissionsText = document.querySelector("#effective-permissions");

binNumberSelect.addEventListener("change", () => {
  let number = 0;
  for (const option of binNumberSelect.options) {
    if (option.selected) {
      number += parseInt(option.value);
    }
  }
  effectivePermissionsText.textContent = number;
});