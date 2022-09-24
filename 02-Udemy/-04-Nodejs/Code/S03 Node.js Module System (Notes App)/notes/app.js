const chalk = require('chalk');
const getNotes = require('./notes.js');

console.log(chalk.green.bold.inverse('Sucess !'));

const msg = getNotes();

console.log(msg);
