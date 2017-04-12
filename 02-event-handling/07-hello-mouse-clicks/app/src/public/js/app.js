"use strict";

/* globals InfoboxLogger */

const logger = new InfoboxLogger("infobox");

addEventListener("click", evt => {
  const dot = document.createElement("div");
  dot.className = "dot";
  dot.style.left = `${ evt.pageX - 4 }px`;
  dot.style.top = `${ evt.pageY - 4 }px`;
  document.body.appendChild(dot);
  displayGeneralEvtInfo(evt);
});

addEventListener("mousedown", evt => {
  displayGeneralEvtInfo(evt);
});

addEventListener("mouseup", evt => {
  displayGeneralEvtInfo(evt);
});

addEventListener("dblclick", evt => {
  displayGeneralEvtInfo(evt);
});

function displayGeneralEvtInfo(evt) {
  logger.insertln(`${ evt.type }`);
}