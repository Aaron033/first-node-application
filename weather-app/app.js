const request = require('request');

const url = 'https://api.darks
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

const url1 = 'https://api.mapbox..gPhF3jbAGPQxXgJzZfdoRg&limit=1'
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