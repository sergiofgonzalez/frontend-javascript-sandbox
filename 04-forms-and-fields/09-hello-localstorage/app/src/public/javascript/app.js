"use strict";

const notes = JSON.parse(localStorage.getItem("notes")) || {"To Do":""};

const list = document.querySelector("#list");
const current = document.querySelector("#current-note");
const btn = document.querySelector("button");
current.value = notes[list.value];



for (const name in notes) {
  if (notes.hasOwnProperty(name)) {
    addToList(name);
  }
}


function addToList(name) {
  const option = document.createElement("option");
  option.textContent = name;
  list.appendChild(option);
}

function saveToStorage() {
  localStorage.setItem("notes", JSON.stringify(notes));
}

function addNote() {
  const name = prompt("Note Title", "");
  if (!name) {
    return;
  }
  if (!(name in notes)) {
    notes[name] = "";
    addToList(name);
    saveToStorage();
  }
  list.value = name;
  current.value = notes[name];
}

list.addEventListener("change", () => {
  current.value = notes[list.value];
});

current.addEventListener("change", () => {
  notes[list.value] = current.value;
  saveToStorage();
});

btn.addEventListener("click", addNote);
