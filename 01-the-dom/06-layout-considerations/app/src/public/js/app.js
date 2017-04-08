"use strict";

function timeFunctionExecution(label, action) {
  console.time(label);
  action();
  console.timeEnd(label);
}

timeFunctionExecution("naive", () => {
  let numXs = 0;
  const target = document.getElementById("one");
  while (target.offsetWidth < 2000) {
    target.appendChild(document.createTextNode("X"));
    ++numXs;
  }
  console.log(`${ numXs } Xs written`);
});

timeFunctionExecution("clever", () => {
  let numXs = 0;
  const target = document.getElementById("two");
  target.appendChild(document.createTextNode("XXXXX"));
  numXs+=5;
  const total = Math.ceil(2000 / (target.offsetWidth / 5));
  for (let i = 5; i < total; i++) {
    target.appendChild(document.createTextNode("X"));
    ++numXs;
  }
  console.log(`${ numXs } Xs written`);    
});