# 09 &mdash; Querying DOM Nodes
> using `querySelectorAll` method

## Description

The `querySelectorAll` method defined on both the document object and nodes takes a selector string, like the one you'd use on CSS declarations, and returns a *node list* containing all the matching elements that are descendants of the element on which the method is applied:

println(`Number of nodes with class="animal": ${ document.querySelectorAll(".animal").length }`);
println(`Number of nodes with class="character": ${ document.querySelectorAll(".character").length }`);
println(`Number of nodes with class="animal" inside a class="character": ${ document.querySelectorAll(".character > .animal").length }`);

println(`Number of nodes with id="infobox": ${ document.querySelectorAll("#infobox").length }`);


| Syntax                                 | Returns...                                         |
|----------------------------------------|------------------------------------------------------|
| `document.querySelectorAll("p")`       | A list with all the `<p>` elements in the document   |
| `someNode.querySelectorAll("p")`       | A list with all the `<p>` elements within `someNode` |
| `document.querySelectorAll(".a")`      | A list with all the elements with `class="a"`        |
| `document.querySelectorAll("#main")`   | A list with the element with `id="main"`             |
| `document.querySelectorAll(".a > .b")` | A list with the elements with `class="b"` that are direct descendants of elems with `class="a"` |

The method `querySelector` is similar to `querySelectorAll` but only returns the first matching node.

**NOTE**
Unlike `getElementsByTagName` and similar methods, the node list returned by `querySelectorAll` is not live, so changes won't be reflected in the document.


In the example, we have a JavaScript program that uses `querySelectorAll` to count different elements found in the HTML page.