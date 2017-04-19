# 06 &mdash; Hello Checkbox and Radio!
> interacting with Checkboxes and Radio Buttons

## Description

A checkbox field is a binary toggle. It's value van be read/write through its `checked` property which holds a boolean value.
A `<label>` tag is used to associate a piece of text with an input field. Its `for` attribute should refer to the `id` of the field it is describing. Clicking a label will make the field get the *focus* and will toggle its value when it is a checkbox or radio button.

A radio button is similar to a checkbox, but it's implicitly linked to other radio buttons with the same `name` attribute so that only one of them can be active at any time.
Remember that the method `document.getElementsByName` returns all elements with a given `name` attribute, and that as `<input>` fields both checkboxes and radio values can be read/written with the `value` property.

In the example, we have a simple HTML document with a checkbox and a set of radio buttons that can be interacted with to change some style properties.
