# e04 &mdash; Simplistic Syntax Highlighter
> using `getAttribute` and `setAttribute` to highlight some JavaScript keywords found in a page

## Description

The application traverses the DOM looking for `<pre>` sections tagged with the attribute `data-language=javascript` and if so, highlights some JavaScript keywords using `<strong>`.

The mechanism is extremely simple albeit awkward:

First we define the tokens that will be recognized for JavaScript, and then we build an array with all the `<pre>` elements found in the document containing a `data-language` attribute.

Then, for each of the elements found we apply the following actions:
1. Get a copy of the text of the element using `node.textContent`.
2. Clear the current contents of the node, that we will be populating while processing
3. Run a *regex* `match` on the text with the language
4. While there is something to process:
  1. Extract the text before the match
  2. Create a text node with the extracted text and append it to the `pre`
  3. Create a `strong` node and add the match as a child to this newly created `strong` element
  4. Append the `strong` node and containing text to the `pre` node
  5. Reposition start for the next match, so that it starts right after what has been already processed

```javascript
var languages = {
  javascript: /\b(function|return|const|let|var)\b/g
};

const pres = document.getElementsByTagName("pre");
Array.from(pres)
  .filter(pre => pre.getAttribute("data-language"))
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
```