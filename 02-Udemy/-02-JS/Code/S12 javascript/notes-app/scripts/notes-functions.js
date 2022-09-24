'use strict';
// Read existing Notes
const getSaveNotes = () => {
  const notesJSON = localStorage.getItem('notes');

  try {
    return notesJSON ? JSON.parse(notesJSON) : [];
  } catch (e) {
    return [];
  }
};

//Remove Note

const removeNote = (id) => {
  const noteIndex = notes.findIndex((note) => note.id === id);
  if (noteIndex > -1) {
    return notes.splice(noteIndex, 1);
  }
};

// Generate The Dom Structure
const generateNoteDom = (note) => {
  const noteEl = document.createElement('a');
  const textEl = document.createElement('p');
  const statusEl = document.createElement('p');

  // Setup the note title text
  if (note.title.length > 0) {
    textEl.textContent = note.title;
  } else {
    textEl.textContent = 'Unname Note';
  }
  textEl.classList.add('list-item__title');
  noteEl.appendChild(textEl);

  // Setup the link
  noteEl.setAttribute('href', `edit.html#${note.id}`);
  noteEl.classList.add('list-item');

  // Setup the status message
  statusEl.textContent = generateLastEdited(note.updatedAt);
  statusEl.classList.add('list-item__subtitle');
  noteEl.appendChild(statusEl);
  return noteEl;
};

// Sort your notes by one of three ways
const sortNotes = (notes, sortBy) => {
  if (sortBy === 'byEdited') {
    return notes.sort((a, b) => {
      if (a.updatedAt > b.updatedAt) {
        return -1;
      } else if (a.updatedAt < b.updatedAt) {
        return 1;
      } else {
        return 0;
      }
    });
  } else if (sortBy === 'byCreated') {
    return notes.sort((a, b) => {
      if (a.createdAt < b.createdAt) {
        return -1;
      } else if (a.createdAt > b.createdAt) {
        return 1;
      } else {
        return 0;
      }
    });
  } else if (sortBy === 'alphabetical') {
    return notes.sort((a, b) => {
      if (a.title.toLowerCase() > b.title.toLowerCase()) {
        return -1;
      } else if (a.title.toLowerCase() < b.title.toLowerCase()) {
        return 1;
      } else {
        return 0;
      }
    });
  } else {
    return notes;
  }
};

// Reneder application notes
const renderNotes = (notes, filters) => {
  const notesEl = document.querySelector('#notes');
  sortNotes(notes, filters.sortBy);
  const filterdNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(filters.searchText.toLowerCase())
  );

  notesEl.innerHTML = '';

  if (filterdNotes.length > 0) {
    filterdNotes.forEach((note) => {
      const noteEl = generateNoteDom(note);
      notesEl.appendChild(noteEl);
    });
  } else {
    const emptyMessage = document.createElement('p');
    emptyMessage.textContent = 'No notes to show';
    emptyMessage.classList.add('empty-message');
    notesEl.appendChild(emptyMessage);
  }
};

// Save notes

const saveNotes = (notes) => {
  localStorage.setItem('notes', JSON.stringify(notes));
};

const generateLastEdited = (timeStamp) =>
  `Last Edited ${moment(timeStamp).fromNow()}`;
