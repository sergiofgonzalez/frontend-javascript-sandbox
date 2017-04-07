# e01 &mdash; Hello DOM!
> Revisiting introducing the DOM

## Description
In the example, the following changes to [01-hello-dom](../01-hello-dom/) are introduced:
+ Besides returning true or false, we also print:
  + the text that was searched
  + the string in which it was found
  + the element in which it was searched

In order to do that, instead of returning a simple *true/false* the function that traverses the DOM returns a JavaScript object that captures some additional information:
+ The string in which the text has been searched in is `node.nodeValue`
+ The element in which the text was found is `node.parentNode.localName`