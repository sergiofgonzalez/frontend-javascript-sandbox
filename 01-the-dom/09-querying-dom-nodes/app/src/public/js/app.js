"use strict";

println(`Number of p nodes in the DOM: ${ document.querySelectorAll("p").length }`);
println(`Number of div nodes in the DOM: ${ document.querySelectorAll("div").length }`);

const [jumbotron] = document.querySelectorAll(".jumbotron");
println(`Number of div nodes inside the Jumbotron: ${ jumbotron.querySelectorAll("div").length }`);

println(`Number of nodes with class="animal": ${ document.querySelectorAll(".animal").length }`);
println(`Number of nodes with class="character": ${ document.querySelectorAll(".character").length }`);
println(`Number of nodes with class="animal" inside a class="character": ${ document.querySelectorAll(".character > .animal").length }`);

println(`Number of nodes with id="infobox": ${ document.querySelectorAll("#infobox").length }`);

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