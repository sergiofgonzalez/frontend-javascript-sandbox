"use strict";

async function httpRequest(url, method = "GET", body = {}) { // eslint-disable-line no-unused-vars
  return new Promise((resolve, reject) => {
    const req = new XMLHttpRequest();
    req.open(method.toUpperCase(), encodeURI(url));
    req.addEventListener("load", () => {
      if (req.status < 400) {
        resolve({
          data: req.responseText,
          status: req.status,
          statusText: req.statusText
        });
      } else {
        reject({
          err: new Error(`Server responded with an error status code: ${ req.status }`),
          status: req.status,
          statusText: req.statusText          
        });
      }
    });
    req.addEventListener("error", () => {
      reject({
        err: new Error(`Network Error: The server could not be contacted or a fata communication error occurred`)
      });
    });
    req.setRequestHeader("Content-Type", "application/json");
    req.send(JSON.stringify(body));
  });
}