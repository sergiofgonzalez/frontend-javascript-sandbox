"use strict";

const para = document.getElementById("willChangeColor");
console.log(`Current Style: ${ para.style }`);



const intervalHandler = setInterval(() => {
  const numSeconds = document.getElementById("numSeconds");
  let [remSeconds] = numSeconds.textContent.match(/\d+/);
  remSeconds = parseInt(remSeconds);
  if (remSeconds) {
    remSeconds--;
    numSeconds.textContent = `${ remSeconds } second${ remSeconds != 1 ? "s" : ""}`;
  } else {
    clearInterval(intervalHandler);
    para.style.color = "green";
    para.style.fontFamily = "Courier New, Courier, monospace";
    para.textContent = "This is a paragraph whose style has changed after 5 seconds";
  }
}, 1000);