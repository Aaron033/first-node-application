const request = require('request');

const url = 'https://api.darksky.net/forecast/42
//The error function is a low level information for example (not connectivity)
request({url: url, json:true }, (error, response) => { // The json: option is going to parse the data so there is not need of 
//in foward geocoding we type the string address and we get the coordinates 
if(error){
console.log('Unable to connect to weather')
}else if(response.body.error){
    console.log('Unable to find location')
}else{
    console.log(response.body.daily.data[0].summary +" It's currenctly " + response.body.currently.temperature + " degrees out. There is a "+ response.body.currently.precipProbability +" chance of rain."  )
}
})

const url1 = 'https://api.mapbox.com/geocoding/v5/mapbox.places/12what.json?access_token=
request({url: url1, json: true}, (error, response) =>{ //The url must stay the same 
    if(error){
console.log('Unable to connect to Weather Serives!')
    } else if(response.body.features[0] === undefined){
        console.log('Not such location')
    }
    else{
        const latitude = response.body.features[0].center[1]
        const longitude = response.body.features[0].center[0]
        console.log('The latitud is: '+ latitude + '\n'+ 'The longitud is: '+longitude )
    }
    
})

const geocode = (address, callback) => {
//encodeURIComponent  is for special characters 
     const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) +'.json?access_token=
     if(error){
         //We are calling the callback function 
         callback('Unable to connect to services', undefined)
     }else if (response.body.features.length === 0){
       callback('Unable to find location', undefined)
     }else{

     }
    })
    }

    //We pass Houston as a parameter 
geocode('Houston', (error, data) =>{

})