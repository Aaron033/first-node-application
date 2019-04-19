const request = require('request');

const url = 'https://api.darksky.net/forecast/7b95952/37.8267,-122.4233'

request({url: url, json:true }, (error, response) => { // The json: option is going to parse the data so there is not need of 
    // jSON.parse option 
const data = JSON.parse(response.body)
console.log(data)
})