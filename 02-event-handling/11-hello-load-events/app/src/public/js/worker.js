"use strict";

/*
  Simulates a long-running task
  performed by a Web Worker
*/


function workerTask(num1, num2) { // eslint-disable-line no-unused-vars
  postMessage(num1 + num2);
}