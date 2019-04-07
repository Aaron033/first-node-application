const fs = require('fs')

const dataBuffer = fs.readFileSync('1-json.json') //This is required 

const dataJSON = dataBuffer.toString()//This is required 
 const data = JSON.parse(dataJSON)//This is required 
// * They are required because we loaded the file into visual studio code 


/* This is another way  1.1 */
data.name = 'Pelos'
data.age = 21 
// It is assumed tha the user will take the valued that 
// --> we assgined manually (check user.name )

const myinfo = JSON.stringify(data) // It converts  the object into string and changes the value 
console.log(myinfo)
/* This is another way  1.1 */