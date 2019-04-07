const fs = require('fs')

const dataBuffer = fs.readFileSync('1-json.json') 

const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)


const myInfo = {
 name: 'Aaron',
 planet: 'Mars', 
 age: 25
}

const swapinfo = JSON.stringify(myInfo)
fs.writeFileSync('1-json.json', )

console.log(data.name)