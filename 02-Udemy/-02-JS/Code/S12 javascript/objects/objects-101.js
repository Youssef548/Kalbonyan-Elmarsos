let myBook = {
  title: "1984",
  author: "George Orwell",
  pageCount: 326,
};

console.log(`${myBook.title} by ${myBook.author}`);

myBook.title = "animal farm";

console.log(`${myBook.title} by ${myBook.author}`);

// challenge area

// name , age , location

let me = {
  name: "andrew",
  age: 27,
  location: "philadelphia",
};

console.log(`${me.name} is ${me.age} and lives in ${me.location}`);

me.age = me.age + 1;

console.log(`${me.name} is ${me.age} and lives in ${me.location}`);
