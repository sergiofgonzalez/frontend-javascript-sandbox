"use strict";

/* globals InfoboxLogger */

const logger = new InfoboxLogger("infobox");

addEventListener("click", () => {
  logger.println("The document has been clicked!");
});

