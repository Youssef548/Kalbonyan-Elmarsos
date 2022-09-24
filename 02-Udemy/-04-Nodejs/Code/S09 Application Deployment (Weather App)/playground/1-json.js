const fs = require('fs');

// const book = {
//   title: 'book',
//   author: 'somename',
// };

// const bookJSON = JSON.stringify(book);

// fs.writeFileSync('1-json.json', bookJSON);

// const dataBuffer = fs.readFileSync('./1-json.json');
// const dataJSON = dataBuffer.toString();
// const data = JSON.parse(dataJSON);
// console.log(data.name);

// Challenge: Work with JS0N and the file system

// 1. Load and parse the JSON data
// 2. Change the name and age property using your info
// 3. Stringify the changed object and overwrite the original data
// 4. Test your work by viewing data in the JSON file

const dataBuffer = fs.readFileSync('./1-json.json');
const dataJSON = dataBuffer.toString();
const data = JSON.parse(dataJSON);

data.name = 'youssef';
data.age = '20';

const newDataSTRINGFIY = JSON.stringify(data);
fs.writeFileSync('1-json.json', newDataSTRINGFIY);

console.log(data);
