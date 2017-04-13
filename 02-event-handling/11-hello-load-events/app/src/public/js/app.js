"use strict";

/* globals InfoboxLogger */

const logger = new InfoboxLogger("infobox");

addEventListener("load", evt => {
  logger.insertln(`${ evt.timeStamp} |- global: ${ evt. type }`);
  console.log(`${ evt.timeStamp} |- global: ${ evt. type }`);
});

document.body.addEventListener("load", evt => {
  logger.insertln(`${ evt.timeStamp} |- local: ${ evt. type }`);
  console.log(`${ evt.timeStamp} |- local: ${ evt. type }`);
});

const infoboxScript = document.querySelector("#infobox-script");
infoboxScript.addEventListener("load", evt => {
  logger.insertln(`${ evt.timeStamp} |- infoboxScript: ${ evt. type }`);
  console.log(`${ evt.timeStamp} |- infoboxScript: ${ evt. type }`);
});

const appScript = document.querySelector("#app-script");
appScript.addEventListener("load", evt => {
  logger.insertln(`${ evt.timeStamp} |- app-script: ${ evt. type }`);
  console.log(`${ evt.timeStamp} |- app-script: ${ evt. type }`);
});

const pict = document.querySelector("img");
pict.addEventListener("load", evt => {
  logger.insertln(`${ evt.timeStamp} |- infoboxScript: ${ evt. type }`);
  console.log(`${ evt.timeStamp} |- infoboxScript: ${ evt. type }`);
});

addEventListener("beforeunload", evt => {
  evt.returnValue = "\o/";
});