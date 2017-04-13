"use strict";

/* globals InfoboxLogger */

const logger = new InfoboxLogger("infobox");

const bar = document.querySelector(".progress div");

addEventListener("scroll", () => {
  const max = document.body.scrollHeight - innerHeight;
  const percent = (pageYOffset / max) * 100;
  bar.style.width = `${ percent }%`;
  logger.overwriteln(`scrollHeight=${ document.body.scrollHeight }; innerHeight=${ innerHeight }; pageYOffset=${ pageYOffset }`);
});