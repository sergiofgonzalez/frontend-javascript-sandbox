"use strict";

/*
  Simulates a long-running task
  performed by a Web Worker
*/


addEventListener("message", evt => {
  setTimeout(() => postMessage(evt.data * evt.data), 2500);
});