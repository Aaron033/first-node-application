const fs = require('fs')

const dataBuffer = fs.readFileSync('1-json.json') //This is required 

const dataJSON = dataBuffer.toString()//This is required 
 const data = JSON.parse(dataJSON)//This is required 
// * They are required because we loaded the file into visual studio code 


/* This is another way  1.1 */
user.name = 'Pelos'
user.age = 21 

const myinfo = JSON.stringify(user)
fs.writeFileSync('1-json.json', myInfo)
/* This is another way  1.1 */