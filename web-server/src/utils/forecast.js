const request = require('request')

const forecast = (latitude, longitude, callback) =>{
   
    const url = 'https://api.darksky.net/forecast//' + latitude + ',' + longitude 

    //Destructuring sytnax is to encolse the parameter in curly braces 
    request({url, json: true}, (error, {body})=>{ 
        //We are going change the response to body because we get the info from the body 
if(error){
    callback('Unable to connect to a server', undefined)
}else if(body.error){
    callback("Address not found", undefined)
}else{
    callback(undefined,body.daily.data[0].summary+" It's currenctly " + body.currently.temperature + " degrees out. There is a "+ body.currently.precipProbability +" chance of rain." )
   
}
    })
}

module.exports = forecast