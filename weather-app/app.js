const request = require('request');

const url = 'https://api.darksky.net/forecast/xb95952/37.8267,-122.4233'

request({url: url, json:true }, (error, response) => { // The json: option is going to parse the data so there is not need of 
    // jSON.parse(response.body) option 
// console.log(response.body.currently)
// console.log(response.body.timezone)
console.log("It's currenctly " + response.body.currently.temperature + " degrees out. There is a "+ response.body.currently.precipProbability +" chance of rain."  )
})