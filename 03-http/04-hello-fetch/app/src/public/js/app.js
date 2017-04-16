"use strict";

/* globals InfoboxLogger */

const logger = new InfoboxLogger("infobox");

const loadBtn = document.querySelector("#load-btn");
const unloadBtn = document.querySelector("#unload-btn");
const infoBtn = document.querySelector("#info-btn");
const sendBtn = document.querySelector("#send-btn");
const submitFormBtn = document.querySelector("#submit-form-btn");
const imagePlaceholder = document.querySelector("img");

/*
  Retrieve an image as a blob and place it in the HTML document
*/
loadBtn.addEventListener("click", async () => {
  logger.insertln("About to insert image");
  const response = await fetch("img/jack-gisel-240255.jpg");
  const objectUrl = URL.createObjectURL(await response.blob());
  imagePlaceholder.src = objectUrl;
});

unloadBtn.addEventListener("click", () => {
  logger.insertln("Removing image");
  imagePlaceholder.src = "";
});

/*
  Empty HTTP GET that retrieves JSON results
*/
infoBtn.addEventListener("click", async () => {
  logger.insertln("Retrieving info via HTTP GET");
  try {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    const options = {
      method: "GET",
      headers
    };
    const res = await fetch("/info", options);
    logger.insertln(`${ res.statusText } (${ res.status })`);
    if (res.ok) {
      if (res.headers.get("Content-Type").indexOf("application/json") !== -1) {
        const data = await res.json();
        logger.insertln(`name = ${ data.name }`);
      }
    } else {
      logger.insertln("Request did not complete successfully");
    }
  } catch (e) {
    logger.insertln("Network error!");
  }
});

/*
  JSON encoded HTTP POST: sending and retrieving info
*/
sendBtn.addEventListener("click", async () => {
  logger.insertln("Retrieving info via HTTP POST");

  const body = {
    name: "Idris",
    surname: "Elba"
  };
  try {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    const options = {
      method: "POST",
      headers,
      body: JSON.stringify(body)
    };
    const res = await fetch("/info", options);
    logger.insertln(`${ res.statusText } (${ res.status })`);
    if (res.ok) {
      if (res.headers.get("Content-Type").indexOf("application/json") !== -1) {
        const data = await res.json();
        logger.insertln(`message = ${ data.message }`);
      }
    } else {
      logger.insertln("Request did not complete successfully");
    }
  } catch (e) {
    logger.insertln("Network error!");
  }
});

/*
  Form encoded POST
*/

submitFormBtn.addEventListener("click", async () => {
  logger.insertln("Retrieving info via HTTP POST");
  
  const body = new FormData();
  body.append("email", document.querySelector("#inputEmail").value);
  body.append("password", document.querySelector("#inputPassword").value);
  
  try {
    const headers = new Headers();
    headers.append("Content-Type", "multipart/form-data");    
    const options = {
      method: "POST",
      headers,
      body
    };
    const res = await fetch("/login", options);
    logger.insertln(`${ res.statusText } (${ res.status })`);
    if (res.ok) {
      if (res.headers.get("Content-Type").indexOf("application/json") !== -1) {
        const data = await res.json();
        logger.insertln(`message = ${ data.message }`);
      }
    } else {
      logger.insertln("Request did not complete successfully");
    }
  } catch (e) {
    logger.insertln("Network error!");
  }
});