import moment from "moment";
import {
    getFilters
} from "./filters";
import {
    sortNotes,
    getNotes
} from "./notes";
// Genereate Dom Structure for a note
const generateNoteDom = (note) => {
    const noteEl = document.createElement("a");
    const textEl = document.createElement("p");
    const statusEl = document.createElement("p");

    // Setup the note title text
    if (note.title.length > 0) {
        textEl.textContent = note.title;
    } else {
        textEl.textContent = "Unname Note";
    }
    textEl.classList.add("list-item__title");
    noteEl.appendChild(textEl);

    // Setup the link
    noteEl.setAttribute("href", `edit.html#${note.id}`);
    noteEl.classList.add("list-item");

    // Setup the status message
    statusEl.textContent = generateLastEdited(note.updatedAt);
    statusEl.classList.add("list-item__subtitle");
    noteEl.appendChild(statusEl);
    return noteEl;
};

// Reneder application notes
const renderNotes = () => {
    const notesEl = document.querySelector("#notes");
    const filters = getFilters();
    const notes = sortNotes(filters.sortBy);
    const filterdNotes = notes.filter((note) =>
        note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    );

    notesEl.innerHTML = "";

    if (filterdNotes.length > 0) {
        filterdNotes.forEach((note) => {
            const noteEl = generateNoteDom(note);
            notesEl.appendChild(noteEl);
        });
    } else {
        const emptyMessage = document.createElement("p");
        emptyMessage.textContent = "No notes to show";
        emptyMessage.classList.add("empty-message");
        notesEl.appendChild(emptyMessage);
    }
};

const initEditPage = (noteId) => {
    const titleElement = document.querySelector("#note-title");
    const bodyElement = document.querySelector("#note-body");
    const removeElement = document.querySelector("#remove-note");
    const dateElement = document.querySelector("#last-edited");
    const notes = getNotes();
    const note = notes.find((note) => note.id === noteId);

    if (!note) {
        location.assign("index.html");
    }

    titleElement.value = note.title;
    bodyElement.value = note.body;
    dateElement.textContent = generateLastEdited(note.updatedAt);
};

// Genereate Lase Edited Message
const generateLastEdited = (timeStamp) => {
    return `Last Edited ${moment(timeStamp).fromNow()}`;
};

export {
    generateNoteDom,
    renderNotes,
    generateLastEdited,
    initEditPage
};