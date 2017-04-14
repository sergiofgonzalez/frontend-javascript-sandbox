"use strict";

/* globals InfoboxLogger */

const logger = new InfoboxLogger("infobox");

const getBtn = document.querySelector("#get-button");
const postBtn = document.querySelector("#post-button");
const errorBtn = document.querySelector("#get-error");

getBtn.addEventListener("click", () => {
  const req = new XMLHttpRequest();
  req.open("GET", "example/data", true);
  req.addEventListener("load", () => {
    logger.insertln(`response=${ req.responseText }; status=${ req.status }; statusText=${ req.statusText }; Content-Type=${ req.getResponseHeader("Content-Type") }`);
  });
  req.addEventListener("error", evt => {
    logger.insertln(`Network error: ${ evt.type }`);
  });
  req.send(null);
});

postBtn.addEventListener("click", () => {
  const req = new XMLHttpRequest();
  req.open("POST", "example/data", true);
  req.addEventListener("load", () => {
    logger.insertln(`response=${ req.responseText }; status=${ req.status }; statusText=${ req.statusText }; Content-Type=${ req.getResponseHeader("Content-Type") }`);
  });
  req.addEventListener("error", evt => {
    logger.insertln(`Network error: ${ evt.type }`);
  });
  req.send(null);
});

errorBtn.addEventListener("click", () => {
  const req = new XMLHttpRequest();
  req.open("GET", "non-existent", true);
  req.addEventListener("load", () => {
    logger.insertln(`response=${ req.responseText }; status=${ req.status }; statusText=${ req.statusText }; Content-Type=${ req.getResponseHeader("Content-Type") }`);
  });
  req.addEventListener("error", evt => {
    logger.insertln(`Network error: ${ evt.type }`);
  });
  req.send(null);
});