"use strict";


/* let's display some debug info on the HTML */
println("Information about the Jumbotron", undefined, true);
const [jumbotron] = document.getElementsByClassName("jumbotron");
println("offsetWidth and offsetHeight give you the space an element takes in pixels", undefined, true);
println(`offsetWidth=${ jumbotron.offsetWidth }`, 2);
println(`offsetHeight=${ jumbotron.offsetHeight }`, 2);
println("clientWidth and clientHeight give you the size in pixels inside the element", undefined, true);
println(`clientWidth=${ jumbotron.clientWidth }`, 2);
println(`clientHeight=${ jumbotron.clientHeight }`, 2);
println("getBoundingClientRect() returns an object with the coordinates of the object relative to the top-left corner of the screen", undefined, true);
println(`top=${ jumbotron.getBoundingClientRect().top }`, 2);
println(`bottom=${ jumbotron.getBoundingClientRect().bottom }`, 2);
println(`left=${ jumbotron.getBoundingClientRect().left }`, 2);
println(`right=${ jumbotron.getBoundingClientRect().right }`, 2);
println("You can use pageXOffset and pageYOffset to obtain the position relative to the document", undefined, true);
println(`top rel to the doc=${ jumbotron.getBoundingClientRect().top + pageYOffset }`, 2);
println(`bottom  rel to the doc=${ jumbotron.getBoundingClientRect().bottom + pageYOffset }`, 2);
println(`left  rel to the doc=${ jumbotron.getBoundingClientRect().left + pageXOffset }`, 2);
println(`right  rel to the doc=${ jumbotron.getBoundingClientRect().right + pageXOffset }`, 2);


function println(text, indentation = 0, highlight = false) {
  const infoBox = document.getElementById("infobox");
  let textToPrint = text;
  if (indentation) {
    for (let i = 0; i < indentation; i++) {
      textToPrint = "\u00a0" + textToPrint;
    }
  }
  if (highlight) {
    const strong = document.createElement("strong");
    strong.appendChild(document.createTextNode(textToPrint));
    infoBox.appendChild(strong);
  } else {
    infoBox.appendChild(document.createTextNode(textToPrint));
  }
  infoBox.appendChild(document.createElement("br"));
}

