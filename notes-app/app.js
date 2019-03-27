
const getNotes = require('./notes.js')
const validator = require('validator'); //for npm modules you don't have to provide a path 

const msg = getNotes();
console.log(msg); 
console.log(validator.isEmail('aaron.botello.h@gmail.com'))
// const multy = require('./notes.js');

console.log(validator.isURL('http://www.google.com'));

