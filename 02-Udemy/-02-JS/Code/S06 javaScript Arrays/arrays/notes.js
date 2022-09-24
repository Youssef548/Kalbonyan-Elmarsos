const notes = [
  {
    title: "My next trip",
    body: "I would like to go to Spain",
  },
  {
    title: "Habbits to work on",
    body: "Exercise. Eating a bit better.",
  },
  {
    title: "Office modification",
    body: "Get a new seat",
  },
];

const sortNotes = function (notes) {
  notes.sort(function (a, b) {
    if (a.title.toLowerCase() < b.body.toLowerCase()) {
      return -1;
    } else if (b.body.toLowerCase() < a.title.toLowerCase()) {
      return 1;
    } else {
      return 0;
    }
  });
};

const findNote = function (notes, noteTitle) {
  return notes.find(function (note, index) {
    return note.title.toLowerCase() === noteTitle.toLowerCase();
  });
};

const findNotes = function (notes, query) {
  return notes.filter(function (note, index) {
    const isTtitleMatch = note.title
      .toLowerCase()
      .includes(query.toLowerCase());
    const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase());
    return isTtitleMatch || isBodyMatch;
  });
};

// console.log(findNotes(notes, "ne"));

// const note = findNote(notes, "office modification");
// console.log(note);

sortNotes(notes);
console.log(notes);
