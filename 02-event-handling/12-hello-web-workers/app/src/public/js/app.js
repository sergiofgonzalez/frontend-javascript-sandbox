"use strict";

/* globals InfoboxLogger */

const logger = new InfoboxLogger("infobox");

logger.insertln("Instantiating web worker");
const worker = new Worker("js/worker.js");
worker.postMessage(5);

worker.addEventListener("message", evt => {
  logger.insertln(`The worker has responded: ${ evt.data }`);
});