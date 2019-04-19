const request = require('request');

const url = 'https://api.darksky.net/forecast/4/37.8267,-122.4233'

request({url: url, json:true }, (error, response) => { // The json: option is going to parse the data so there is not need of 
    // jSON.parse(response.body) option 
// console.log(response.body.currently)
// console.log(response.body.timezone)
//in foward geocoding we type the string address and we get the coordinates 
console.log(response.body.daily.data[0].summary +" It's currenctly " + response.body.currently.temperature + " degrees out. There is a "+ response.body.currently.precipProbability +" chance of rain."  )

})

const url1 = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=iJ9.gPhF3jbAGPQxXgJzZfdoRg&limit=1'
request({url: url1, json: true}, (error, response) =>{ //The url must stay the same 
    console.log(response.body)
})