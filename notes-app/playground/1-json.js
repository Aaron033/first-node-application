const fs = require('fs')

const dataBuffer = fs.readFileSync('1-json.json') //This is required 

const dataJSON = dataBuffer.toString()//This is required 
 const data = JSON.parse(dataJSON)//This is required 
// * They are required because we loaded the file into visual studio code 


const myInfo = {
 name: 'Aaron',
 planet: 'Mars', 
 age: 25
}

const swapinfo = JSON.stringify(myInfo)
fs.writeFileSync('1-json.json', swapinfo)

console.log(swapinfo);
