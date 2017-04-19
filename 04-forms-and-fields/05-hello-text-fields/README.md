# 05 &mdash; Hello Text Fields!
> interacting with text fields

## Description

Text fields (fields created by `<input type="text">` and `<textarea>` tags) share a common interface:
+ Their elements have a `value` property that holds their current content as a string. It's a read/write property.
+ The `selectionStart` and `selectionEnd` properties gives us information about the cursor and selection in the text. If nothing is selected, the two properties hold the same number, indicating the position of the cursor. Otherwise it gives us the start and end position of the selected text. They're read/write properties.
+ A `change` event fires every time the field loses focus after its content was changed (not everytime something is typed).
+ A `input` event is fired everytime the user types a character, deletes text or otherwise manipulates the field's contents (you should register a handler for this event to immediately respond to changes in these types of fields).

In the example, we have a document with a `<textarea>` with three rows in which we illustrate all of these concepts:
+ There's some text initially selected
+ We listen to key events and insert a some fixed text in the field when a certain key is pressed
+ We listen to input events in the text field to report the actual length of the field