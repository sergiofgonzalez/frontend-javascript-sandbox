# 04 &mdash; Hello Forms!
> handling forms from JavaScript applications

## Description

When a field is contained in a `<form>` element, it will have a property `form` linking back to the form's DOM element, and the `<form>` element will have a property `elements` with an array-like collection of the fields it contains.

When not using JavaScript, the `name` attribute of a form field will determine the *key* associated to the value that will be submitted. That `name` attribute can also be used as a key-value map as in `form.elements.inputText`.

A button with a type `type="submit"` will cause the form to be submitted according to the configured HTTP method and configured path. However, submitting a form means that the browser will navigate away to the indicated page, and that is not always desired. 
Instead, when using a JavaScript application, it's better to define a listener for the `submit` event on the form and then use `preventDefault` so that the browser does not navigate away from the page.
Doing so will allow you to:
+ Write code that validates the value of the fields before submitting the form.
+ Write code that handles the interaction with the server using `fetch` or `XMLHttpRequest` and thus saving the page reload.

In the example, we have an HTML page with a simple form in which we perform some data validation before the form is submitted. We also control that the form cannot be submitted if any validation fails. 

This is performed as an example, rather than as actual validation production code.