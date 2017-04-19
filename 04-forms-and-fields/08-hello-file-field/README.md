# 08 &mdash; Hello File Fields
> interacting with `<input type="file">` fields

## Description

File fields are intended to allow the user select a file to be uploaded to a server through a form. As a side effect, once a user has selected a file, a frontend JavaScript program can read the file contents using the `FileReader` interface.

File fields have a property `files` which is an array-like object containing the file or files chosen. Each of the entries feature a `name`, `type` and `size` property.
The file field support a `multiple` attribute, which makes it possible to select multiple files at the same time.

Reading a file is done by creating a `FileReader` object, registering a `load` event handler for it and calling its `readAsText` method. A `FileReader` will also fire an `error` event when reading fails for any reason. The error itself will end up in the reader's error property.

In the example, we illustrate how to work with both types of file fields. In the first one as soon as a file is chosen we display some of the file properties.

The second file field is a multiple select and apart from that, we also illustrate how to read the contents of the selected files, using the `FileReader` interface: 
```javascript
function readLocalFile(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => resolve(reader.result));
    reader.addEventListener("error", () => reject(reader.error));
    reader.readAsText(file);
  });
}
```