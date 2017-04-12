"use strict";

/* globals InfoboxLogger */

const logger = new InfoboxLogger("infobox");

const [btn1, btn2, triggerBtn, disableBtn] = document.querySelectorAll("button");


btn1.addEventListener("click", () => {
  btn1.classList.toggle("active");
  if (btn1.getAttribute("aria-pressed") === "false") {
    btn1.setAttribute("aria-pressed", "true");
  } else {
    btn1.setAttribute("aria-pressed", "false");
  }
});

btn2.addEventListener("click", () => {
  btn2.classList.toggle("active");  
  if (btn2.getAttribute("aria-pressed") === "false") {
    btn2.setAttribute("aria-pressed", "true");
  } else {
    btn2.setAttribute("aria-pressed", "false");    
  }
});


const triggerAction = () => {
  let greeting = "Hello to";
  if (btn1.getAttribute("aria-pressed") === "true") {
    greeting += ` ${ btn1.textContent }`;
  }
  if (btn2.getAttribute("aria-pressed") === "true") {
    greeting += ` ${ btn2.textContent }`;
  }

  logger.println(greeting);
};

triggerBtn.addEventListener("click", triggerAction);



disableBtn.addEventListener("click", () => {
  if (disableBtn.classList.contains("btn-danger")) {
    triggerBtn.removeEventListener("click", triggerAction);
    disableBtn.textContent = "Enable Greeting";
    disableBtn.classList.remove("btn-danger");
    disableBtn.classList.add("btn-success");
  } else {
    triggerBtn.addEventListener("click", triggerAction);
    disableBtn.textContent = "Disable Greeting";
    disableBtn.classList.remove("btn-success");
    disableBtn.classList.add("btn-danger");
  }

});
