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
  const noteEl = document.createElement('div');
  const textEl = document.createElement('a');
  const button = document.createElement('button');

  // Setup the remove note button
  button.textContent = 'x';
  noteEl.appendChild(button);
  button.addEventListener('click', () => {
    removeNote(note.id);
    saveNotes(notes);
    renderNotes(notes, filters);
  });

  // Setup the note title text
  if (note.title.length > 0) {
    textEl.textContent = note.title;
  } else {
    textEl.textContent = 'Unname Note';
  }
  textEl.setAttribute('href', `edit.html#${note.id}`);
  noteEl.appendChild(textEl);
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
  sortNotes(notes, filters.sortBy);
  const filterdNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(filters.searchText.toLowerCase())
  );

  document.querySelector('#notes').innerHTML = '';

  filterdNotes.forEach((note) => {
    const noteEl = generateNoteDom(note);
    document.querySelector('#notes').appendChild(noteEl);
  });
};

// Save notes

const saveNotes = (notes) => {
  localStorage.setItem('notes', JSON.stringify(notes));
};

const generateLastEdited = (timeStamp) =>
  `Last Edited ${moment(timeStamp).fromNow()}`;
