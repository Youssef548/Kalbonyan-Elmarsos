const chalk = require('chalk');
const yargs = require('yargs');

const notes = require('./notes.js');

// Customize yargs version

yargs.version('1.1.0');

yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      descirbe: 'Add a note',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    notes.addNote(argv.title, argv.body);
  },
});

// Create and export listNotes from notes.js
// "Your notes" using chalk
// Print note title for each note
// Call list Notes from command handler
// Test your work

yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  builder: {
    title: {
      descirbe: 'This title removed',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    notes.removeNote(argv.title);
  },
});

yargs.command({
  command: 'list',
  descirbe: 'list of notes',
  builder: {
    descirbe: 'list of notes',
    demandOption: false,
    type: 'string',
  },
  handler() {
    notes.listNotes();
  },
});

yargs.command({
  command: 'read',
  descirbe: 'reading a note',
  builder: {
    title: {
      describe: 'read a note',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    notes.readNote(argv.title);
  },
});

yargs.parse();

// console.log(process.argv);
// console.log(yargs.argv);
