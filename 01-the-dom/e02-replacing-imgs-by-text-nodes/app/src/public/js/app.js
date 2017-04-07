"use strict";



/* Option 1: use the NodeList returned by run the loop backwards 
const imgs = document.body.getElementsByTagName("img");
for (let i = imgs.length - 1; i >= 0; i--) {
  const img = imgs[i];
  if (img.alt) {
    const textNode = document.createTextNode(img.alt);
    img.parentNode.replaceChild(textNode, img);
  }
}
*/

/* Option 2: Convert to array with Array.from 
const imgs = Array.from(document.body.getElementsByTagName("img"));
imgs.forEach(img => {
  if (img.alt) {
    const textNode = document.createTextNode(img.alt);
    img.parentNode.replaceChild(textNode, img);    
  }
});
*/

/* Option 3: Use the spread operator */
[...document.body.getElementsByTagName("img")].forEach(img => {
  if (img.alt) {
    const textNode = document.createTextNode(img.alt);
    img.parentNode.replaceChild(textNode, img);    
  }
});