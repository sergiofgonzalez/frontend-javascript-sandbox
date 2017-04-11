"use strict";

/* globals InfoboxLogger */

const logger = new InfoboxLogger("infobox");

const btn = document.querySelector("button");


const btnClickCallback = () => {
  logger.println("The button has been clicked!");
  btn.removeEventListener("click", btnClickCallback);
  btn.disabled = true;
};

btn.addEventListener("click", btnClickCallback);