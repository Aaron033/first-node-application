const add = require('./utils.js');
const rest = require('./utils.js');
const multy = require('./notes.js');


const multyplication = multy(3, 4); 
console.log(multyplication, " This is multy");

const sum = add(34, 39)
// const  name = "Aaron"; 
console.log(sum, ' This is sum' );

const subtract = rest(23 , 4); 

console.log(subtract, ' This subtract');
