"use strict";

/* globals InfoboxLogger */

const logger = new InfoboxLogger("infobox");

const surroundingPara = document.querySelector("#surrounding-para");
const btnPropagate = document.querySelector("#btn-propagate");
const btnNoPropagate = document.querySelector("#btn-no-propagate");

btnPropagate.addEventListener("click", evt => {
  logger.println(`${ evt.type } received in the button "With Propagation!"`);
});

surroundingPara.addEventListener("click", evt => {
  logger.println(`${ evt.type } received in the surrounding "<p>"`);
  logger.println("=================================");  
});

btnNoPropagate.addEventListener("click", evt => {
  logger.println(`${ evt.type } received in the button "With Stop Propagate"`);
  evt.stopPropagation();
  logger.println("=================================");  
});