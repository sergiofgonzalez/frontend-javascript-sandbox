"use strict";

/* globals InfoboxLogger */

const logger = new InfoboxLogger("infobox");

addEventListener("mousemove", evt => {
  logger.overwriteln(`evt.type = ${ evt.type }; evt.pageX = ${ evt.pageX }; evt.pageY = ${ evt.pageY }; evt.clientX = ${ evt.clientX }; evt.clientY = ${ evt.clientY }`);
});

addEventListener("mouseout", evt => {
  logger.overwriteln(`evt.type = ${ evt.type }; evt.pageX = ${ evt.pageX }; evt.pageY = ${ evt.pageY }; evt.clientX = ${ evt.clientX }; evt.clientY = ${ evt.clientY }`);
});

addEventListener("mouseover", evt => {
  logger.overwriteln(`evt.type = ${ evt.type }; evt.pageX = ${ evt.pageX }; evt.pageY = ${ evt.pageY }; evt.clientX = ${ evt.clientX }; evt.clientY = ${ evt.clientY }`);
});
