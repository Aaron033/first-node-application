const request = require('request')

const forecast = (latitude, longitude, callback) =>{
   
    const url = 'https://api.darksky.net/forecast//' + latitude + ',' + longitude 
    request({url: url, json: true}, (error, response)=>{
if(error){
    callback('Unable to connect to a server', undefined)
}else if(response.body.error){
    callback("Address not found", undefined)
}else{
    callback(undefined, {
        weather: response.body.daily.data[0].summary+" It's currenctly " + response.body.currently.temperature + " degrees out. There is a "+ response.body.currently.precipProbability +" chance of rain." })
   
}
    })
}

module.exports = forecast