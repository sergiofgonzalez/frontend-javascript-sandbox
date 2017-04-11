"use strict";

/* globals InfoboxLogger */

const logger = new InfoboxLogger("infobox");


addEventListener("click", evt => {
  logger.println(`event: ${ evt }`);
  logger.println(`event.type: ${ evt.type }`);
  if (evt.button === 0) {
    logger.println("Left button was clicked", 2, true);
  } else if (evt.button === 1) {
    logger.println("Middle button was clicked", 2, true);
  } else if (evt.button === 2) {
    logger.println("Right button was clicked");
  } else {
    logger.println(`Unexpected button code: ${ evt.button }`);
  }
});
