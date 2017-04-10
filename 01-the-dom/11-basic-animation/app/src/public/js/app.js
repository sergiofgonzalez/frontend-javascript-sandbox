"use strict";

const img = document.querySelector("img");
const infobox = document.querySelector("#infobox");

let angle = 0;
let lastTime = null;

let speed = 0.001;

function animate(time) {
  const timeDelta = time -lastTime;
  if (lastTime !== null) {
    angle += (time - lastTime) * speed;
  }
  lastTime = time;
  img.style.top = (Math.sin(angle) * 100) + "px";
  img.style.left = (Math.cos(angle) * 100) + "px";

  displayInInfobox([
    `angle = ${ angle }`,
    `time - lastTime = ${ timeDelta }`,
    `speed = ${ speed }`,
    `top = ${ img.style.top }`,
    `left = ${ img.style.left }`
  ]);
  requestAnimationFrame(animate);
}

requestAnimationFrame(animate);


function displayInInfobox(lines) {
  [...infobox.childNodes].forEach(childNode => infobox.removeChild(childNode));
  for (const line of lines) {
    infobox.appendChild(document.createTextNode(line));
    infobox.appendChild(document.createElement("br")); 
  }
}