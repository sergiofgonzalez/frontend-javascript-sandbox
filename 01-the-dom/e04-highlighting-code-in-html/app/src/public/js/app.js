"use strict";

var languages = {
  javascript: /\b(function|return|const|let|var)\b/g
};

const pres = document.getElementsByTagName("pre");
Array.from(pres).filter(pre => pre.getAttribute("data-language"))
  .forEach(pre => {
    const lang = pre.getAttribute("data-language");
    if (lang in languages) {
      highlightCodeBlock(pre, languages[lang]);
    }
  });

function highlightCodeBlock(node, langKeywords) {
  const text = node.textContent;
  node.textContent = "";

  let match = langKeywords.exec(text);
  let pos = 0;
  while (match) {
    const before = text.slice(pos, match.index);
    node.appendChild(document.createTextNode(before));
    const strong = document.createElement("strong");
    strong.appendChild(document.createTextNode(match[0]));
    node.appendChild(strong);
    pos = langKeywords.lastIndex;
    match = langKeywords.exec(text);
  }
  const after = text.slice(pos);
  node.appendChild(document.createTextNode(after));
}
