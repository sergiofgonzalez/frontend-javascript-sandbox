"use strict";

/* globals InfoboxLogger */

const logger = new InfoboxLogger("infobox");
const btnWithoutContextMenu = document.querySelector("#btn-no-context-menu");

btnWithoutContextMenu.addEventListener("contextmenu", evt => {
  logger.println(`using "preventDefault" to disable popping up contextMenu`);
  evt.preventDefault(); 
});