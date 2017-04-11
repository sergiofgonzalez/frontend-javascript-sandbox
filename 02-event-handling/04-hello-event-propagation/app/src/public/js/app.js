"use strict";

/* globals InfoboxLogger */

const logger = new InfoboxLogger("infobox");

const surroundingPara = document.querySelector("#surrounding-para");
const btn = document.querySelector("button");

btn.addEventListener("click", evt => {
  logger.println(`${ evt.type } received in the button`);
});

surroundingPara.addEventListener("click", evt => {
  logger.println(`${ evt.type } received in the surrounding "<p>"`);
});

