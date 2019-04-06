const fs = require('fs')

const dataBuffer = fs.readFileSync('1-json.json') // What comes back from the file is not a string it is a buffer 
//that is how node.js represents binary data 