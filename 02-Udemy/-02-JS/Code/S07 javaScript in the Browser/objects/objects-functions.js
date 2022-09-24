let myBook = {
  title: "1984",
  author: "George Orwell",
  pageCount: 326,
};

let otherBook = {
  title: "A Peoples History",
  author: "Howard Zinn",
  pageCount: 723,
};

let getSummary = function (book) {
  return {
    summary: `${book.title} by ${book.author}`,
    pageCountSummary: `${book.title} is ${book.pageCount} pages long`,
  };
};

let bookSummary = getSummary(myBook);
let otherBookSummary = getSummary(otherBook);

console.log(bookSummary.summary);
console.log(otherBookSummary.pageCountSummary);

// challenge area
// Create function - take fahrenheit in - return object with all three

let challenge = function (fahrenheit) {
  return {
    fahrenheit: fahrenheit,
    celsius: (fahrenheit - 32) * (5 / 9),
    kelvin: (fahrenheit + 459.67) * (5 / 9),
  };
};
let temp = challenge(745);

console.log(temp.fahrenheit);
console.log(temp.celsius);
console.log(temp.kelvin);
