# 00-prj-template-express
> a more involved project template using *Express*

## Description

A web form consists of any any number of input fields grouped in a `<form>` tag. HTML allows for a number of different styles for fields:

| `<input type="...">` | Description                                          |
|----------------------|------------------------------------------------------|
| text                 | A single line text field                             |
| password             | Same as text but hides the text that is typed        |
| checkbox             | An on/off switch                                     |
| radio                | Part of a multiple-choice field                      |
| file                 | Allows the user to choose a file from their computer |

Form fields do not necessarily have to appear in a `<form>` tag. When they appear outside of a `<form>` they cannot be submitted via HTML, but they can using JavaScript.

Multiline text fields have their own tag `<textarea>` which, as opposed to `<input>` it requires a closing tag.

Finally, the `<select>` tag is used to create a field that allows the user to select from a number of predefined options.

Whenever the value of a form field changes, a `change` event will be fired.

In the example, all those type of fields are displayed. There is no JavaScript associated to the fields yet.