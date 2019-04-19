const request = require('request');

const url = 'https://api.darksky.net/forecast/37.8267,-122.4233'

request({url: url, json:true }, (error, response) => { // The json: option is going to parse the data so there is not need of 
    // jSON.parse(response.body) option 
// console.log(response.body.currently)
// console.log(response.body.timezone)
//in foward geocoding we type the string address and we get the coordinates 
console.log(response.body.daily.data[0].summary +" It's currenctly " + response.body.currently.temperature + " degrees out. There is a "+ response.body.currently.precipProbability +" chance of rain."  )

})

const url1 = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=DRqMGVidDRlbGplM3B2aDFwZiJ9.gPhF3jbAGPQxXgJzZfdoRg&limit=1'
request({url: url1, json: true}, (error, response) =>{ //The url must stay the same 
    if(error){
console.log('Unable to connect to Weather Serives!')
    }else{
        const latitude = response.body.features[0].center[1]
        const longitude = response.body.features[0].center[0]
        console.log('The latitud is: '+ latitude + '\n'+ 'The longitud is: '+longitude )
    }
    
})