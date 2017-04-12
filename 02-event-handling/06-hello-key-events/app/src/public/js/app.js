"use strict";

/* globals InfoboxLogger */

const logger = new InfoboxLogger("infobox");

const keyCallback = evt => {
  let modKeys = "";
  if (evt.shiftKey) {
    modKeys += "+ Shift";
  }
  if (evt.ctrlKey) {
    modKeys += "+ Ctrl";
  }
  if (evt.metaKey ) {
    modKeys += "+ Meta";
  }
  logger.println(`evt.type = ${ evt.type }; evt.key = ${ evt. key }${ modKeys }`);
};

addEventListener("keydown", keyCallback);
addEventListener("keypress", keyCallback);
addEventListener("keyup", keyCallback);


addEventListener("keydown", evt => {
  if (evt.key === "B") {
    document.body.style.background = "SlateGray";
  }
});

addEventListener("keyup", evt => {
  if (evt.key === "B") {
    document.body.style.background = "";
  }
});

addEventListener("keydown", evt => {
  if (evt.key === " ") {
    document.body.style.display = "none";
  }
});

addEventListener("keyup", evt => {
  if (evt.key === " ") {
    document.body.style.display = "";
  }
});