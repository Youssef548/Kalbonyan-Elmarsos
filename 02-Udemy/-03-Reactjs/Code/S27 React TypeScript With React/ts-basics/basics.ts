// Primitives: Number, String, boolean
// More Complex: types, arrays, objects
// Function types , Parameters

// Primitives

let age: number;

age = 12;

let userName: string;

userName = 'youssef';

let isInstructor: boolean;

isInstructor = false;

// More Complex Types

let hobbies: string[];

hobbies = ['sports', 'cooking'];

// Type Allias

type Person = {
  name: string;
  age: number;
};

/* withOut Allias Type
  let person: {
  name: string;
  age: number;
  };
*/

// With Alias Type

let person: Person;

person = { name: 'youssef', age: 19 };

let people: {
  name: string;
  age: number;
}[];

// Type Inference

let course = 'React - The Complete Guide';

// course = 1234; // Error cuz refrence is String Only Now Cuz Reference Is String

// Union Type

let cours: string | number = 'React - The Complete Guide';

cours = 1234;
sum;
// Functions And Types

function add(a: number, b: number) {
  return a + b;
}

function print(value: any) {
  return console.log(value);
}

// Genrics

function insertAtBeggining<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3, 4];

const updatedArray = insertAtBeggining(demoArray, -1); // [-1, 1 ,2 ,3]
const stringArray = insertAtBeggining(['a', 'b', 'c'], 'd');
