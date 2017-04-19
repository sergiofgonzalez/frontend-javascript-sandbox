"use strict";

const singleFileField = document.querySelector("#single-file-field");

singleFileField.addEventListener("change", () => {
  if (singleFileField.files.length === 1) {
    const file = singleFileField.files[0];
    const textFilename = document.querySelector("#text-filename");
    const textFileSize = document.querySelector("#text-filesize");
    const textFileType = document.querySelector("#text-filetype");
    textFilename.textContent = file.name;
    textFileSize.textContent = file.size;
    textFileType.textContent = file.type;
  }
});

const multipleFileField = document.querySelector("#multiple-file-field");
const tableBody = document.querySelector("#file-info-block");

multipleFileField.addEventListener("change", async () => {
  if (tableBody.children.length != 0) {
    [...tableBody.children].forEach(child => {
      child.remove();
    });
  }
  for (let i = 0; i < multipleFileField.files.length; i++) {
    const file = multipleFileField.files[i];
    let fileContents;
    try {
      fileContents = await readLocalFile(file);
    } catch (e) {
      fileContents = "File Contents could not be read";
    }
    tableBody.append(elt("tr", elt("td", i + 1), elt("td", file.name), elt("td", file.size), elt("td", file.type), elt("td", fileContents.slice(0, 35))));
  }
});


function elt(type, ...children) {
  const node = document.createElement(type);
  for (let child of children) {
    if (typeof child === "string") {
      child = document.createTextNode(child);
    }
    node.append(child);
  }
  return node;
}

function readLocalFile(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => resolve(reader.result));
    reader.addEventListener("error", () => reject(reader.error));
    reader.readAsText(file);
  });
}