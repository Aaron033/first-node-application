
const getNotes = require('./notes.js')
const validator = require('validator'); //for npm modules you don't have to provide a path 
const chalk = require('chalk');
const msg = getNotes();
// console.log(msg); 
// console.log(validator.isEmail('aaron.botello.h@gmail.com'))
// // const multy = require('./notes.js');

// console.log(validator.isURL('http://www.google.com'));

console.log(chalk.green('Success'));
const greenmsg = chalk.green.inverse.bold('Success')
console.log(greenmsg); 

//The information that we pass after we type node app.js Aaron can be access by process.argv
console.log(process.argv[2]);