const fs = require('fs')

const dataBuffer = fs.readFileSync('1-json.json') // What comes back from the file is not a string it is a buffer 
//that is how node.js represents binary data  meaning : 45 74 62 44 
// In order to changes from data numbers to number you must use toString()

console.log(dataBuffer.toString())