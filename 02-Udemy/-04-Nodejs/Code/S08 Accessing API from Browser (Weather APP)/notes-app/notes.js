const { default: chalk } = require('chalk');
const fs = require('fs');

const getNotes = () => {
  console.log(`your notes`);
};

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNote = notes.find((note) => note.title === title);

  debugger;

  if (!duplicateNote) {
    notes.push({
      title,
      body,
    });
    saveNotes(notes);
    console.log(chalk.green.inverse('New note added!'));
  } else {
    console.log(chalk.red.inverse('Note title taken!'));
  }
};

const removeNote = (title) => {
  const notes = loadNotes();
  const notesToKeep = notes.filter((note) => {
    note.title !== title;
  });

  if (notes.length > notesToKeep.length) {
    console.log(chalk.green.inverse('note removed'));
  } else {
    console.log(chalk.red.inverse('no note removed'));
  }
  saveNotes(notesToKeep);
};

const listNotes = () => {
  const notes = loadNotes();

  console.log(chalk.inverse('your notes'));

  notes.forEach((note) => {
    console.log(note.title);
  });
};

const readNote = (title) => {
  const notes = loadNotes();

  const note = notes.find((note) => note.title === title);

  if (note) {
    console.log(chalk.inverse(note.title));
    console.log(note.body);
  } else {
    console.log(chalk.red.inverse('note not found!'));
  }
};

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync('notes.json', dataJSON);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (err) {
    return [];
  }
};

module.exports = { getNotes, addNote, removeNote, listNotes, readNote };
