const https = require('https')//https is a core module from node.js
const url = 'https://api.darksky.net/forecast/42630016cca883960a1b5228a7b95952/40,-75'

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
request.on('error', (error) =>{
    console.log('An error', error)
})

request.end()