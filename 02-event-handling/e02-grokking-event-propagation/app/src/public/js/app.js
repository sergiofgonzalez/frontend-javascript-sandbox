"use strict";

/* globals InfoboxLogger */

const logger = new InfoboxLogger("infobox");

const surroundingPara = document.querySelector("#surrounding-para");
const btn = surroundingPara.querySelector("button");

btn.addEventListener("mousedown", evt => {
  logger.println(`Button received a "mousedown" event`);
  if (evt.button === 2) {
    logger.println(`Right button clicked: preventing further propagation`);
    evt.stopPropagation();
  }
});

surroundingPara.addEventListener("mousedown", evt => {
  logger.println(`Surrounding "<p>" received a "mousedown" event`);
  logger.println(`Event received from: ${ evt.target.tagName }`);
  if (evt.target.tagName === "BUTTON" && evt.target.firstChild.nodeType === document.TEXT_NODE) {
    logger.println(`Button clicked was: ${ evt.target.childNodes[0].textContent }`);
  }
});

