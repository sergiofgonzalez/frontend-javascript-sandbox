# 07 &mdash; Hello Select Fields
> interacting with Select fields

## Description

Select fields allowing single choice are conceptually similar to radio buttons, while when given the `multiple` attribute are more akin to checkboxes.

+ The `size` attribute of the `<select>` tag is used to set the number of options that are visible at the same time.
+ Each `<option>` tag has a `value` attribute that when not given takes the value of the `<option>` text.
+ The `value` property of the `<select>` element gives you the currently selected option. For `<select multiple>` this property *DOES NOT* give you an array with the selected options.
+ In `<select multiple>` the `<option>` tags can be accessed as an array-like object through the field's `options` property. Each `option` has a property `selected` which can be used to check what options were selected.

In the example we have a simple and multiple `<select>` and illustrate the concepts explained above.