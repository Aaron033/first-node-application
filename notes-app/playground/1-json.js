const fs = require('fs')

const dataBuffer = fs.readFileSync('1-json.json') 

const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)

// const data = JSON.parse(dataBuffer)
var myName = data.author 
console.log(myName)
console.log(data)