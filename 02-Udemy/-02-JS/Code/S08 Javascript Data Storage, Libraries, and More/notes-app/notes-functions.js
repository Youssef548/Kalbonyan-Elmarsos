const getSaveNotes = function () {
  const notesJSON = localStorage.getItem('notes');

  if (notesJSON !== null) {
    return JSON.parse(notesJSON);
  } else {
    return [];
  }
};

//Remove Note

const removeNote = function (id) {
  const noteIndex = notes.findIndex(function (note) {
    return note.id === id;
  });
  if (noteIndex > -1) {
    return notes.splice(noteIndex, 1);
  }
};

// Generate The Dom Structure
const generateNoteDom = function (note) {
  const noteEl = document.createElement('div');
  const textEl = document.createElement('a');
  const button = document.createElement('button');

  // Setup the remove note button
  button.textContent = 'x';
  noteEl.appendChild(button);
  button.addEventListener('click', function () {
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
const sortNotes = function (notes, sortBy) {
  if (sortBy === 'byEdited') {
    return notes.sort(function (a, b) {
      if (a.updatedAt > b.updatedAt) {
        return -1;
      } else if (a.updatedAt < b.updatedAt) {
        return 1;
      } else {
        return 0;
      }
    });
  } else if (sortBy === 'byCreated') {
    return notes.sort(function (a, b) {
      if (a.createdAt < b.createdAt) {
        return -1;
      } else if (a.createdAt > b.createdAt) {
        return 1;
      } else {
        return 0;
      }
    });
  } else if (sortBy === 'alphabetical') {
    return notes.sort(function (a, b) {
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
const renderNotes = function (notes, filters) {
  sortNotes(notes, filters.sortBy);
  const filterdNotes = notes.filter(function (note) {
    return note.title.toLowerCase().includes(filters.searchText.toLowerCase());
  });

  document.querySelector('#notes').innerHTML = '';

  filterdNotes.forEach(function (note) {
    const noteEl = generateNoteDom(note);
    document.querySelector('#notes').appendChild(noteEl);
  });
};

// Save notes

const saveNotes = function (notes) {
  localStorage.setItem('notes', JSON.stringify(notes));
};

const generateLastEdited = function (timeStamp) {
  return `Last Edited ${moment(timeStamp).fromNow()}`;
};
