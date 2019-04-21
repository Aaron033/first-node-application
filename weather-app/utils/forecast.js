const request = require('request')

const forecast = (latitude, longitude, callback) =>{
   
    const url = 'https://api.darksky.net/forecast/4/' + latitude + ',' + longitude 
    request({url: url, json: true}, (error, response)=>{
if(error){
    callback('Unable to connect to a server', undefined)
}else if(response.body.error){
    callback("Address not found", undefined)
}else{
    callback(undefined, {
        wearher: response.body.daily.data[0].summary})
   
}
    })
}

module.exports = forecast