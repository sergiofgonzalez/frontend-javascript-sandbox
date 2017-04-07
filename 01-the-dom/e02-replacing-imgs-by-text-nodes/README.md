# e02 &mdash; Replacing Images by Text Nodes
> modifying the DOM

## Description

In the example, given an HTML page with images, we replace the `<img>` tags in the document with the text held in their `alt` attribute. Therefore, the application not only removes the images, but also adds a new text node to replace them.

Thus, the document will change from:
```html
      <img src="img/pengo.jpg" class="img-fluid" alt="Pengo the pet penguin"><br>
      <img src="img/perry.png" class="img-fluid" alt="Perry, the platypus">
```

to 
```html
      "Pengo the pet penguin"<br>
      "Perry, the platypus"
```


The example uses three switchable approaches to do the implementation. The first one (pre-ES6) is really awkward due to the fact that the DOM methods return an array-like structure that is not a real array, and that changes as soon as you use `replaceChild`.

The other two options, create a real *array* out of the *NodeList* and are therefore more robust and concise.