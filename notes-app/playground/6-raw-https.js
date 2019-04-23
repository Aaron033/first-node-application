const https = require('https')//https is a core module from node.js
const url = 'https://api.darksky.net/forecast//34.32,78.43'

 const request = https.request(url, (response) =>{
let data = ''

    response.on('data', (chunk) =>{
        //It comes the chunk parts of data
        //This is how you convert the chunk data(numbers) to a long string 
   data = data + chunk.toString()
    })

    response.on('end', ()=>{
   const body = JSON.parse(data)
   console.log(body)
    })
})

request.end()