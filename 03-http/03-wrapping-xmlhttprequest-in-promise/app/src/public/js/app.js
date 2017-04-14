"use strict";

/* globals InfoboxLogger, httpRequest */

const logger = new InfoboxLogger("infobox");

const getBtn = document.querySelector("#get-button");
const postBtn = document.querySelector("#post-button");

getBtn.addEventListener("click", async () => {
  try {
    const response = await httpRequest("example/data?param1=value1&param2=value2", "GET", {name: "Idris"});
    logger.insertln(`${ response.statusText }(${ response.status }) data=${ response.data }`);
  } catch (e) {
    logger.insertln(`An error has occurred while submitting HTTP request wrapped in a promise: ${ e.err }`);
  }
});

postBtn.addEventListener("click", async () => {
  try {
    const response = await httpRequest("example/data", "POST", {name: "Jason", surname: "Isaacs"});
    logger.insertln(`${ response.statusText }(${ response.status }) data=${ response.data }`);
  } catch (e) {
    logger.insertln(`An error has occurred while submitting HTTP request wrapped in a promise: ${ e.err }`);
  }
});