//In an asynchronous functions the statements runs from top to bottom 
//So staring and stopping will print out and at the end the 2 second timer will print out 

console.log('Starting')

setTimeout(()=> {
 console.log('2 second Timer')
},2000)

setTimeout(() =>{
console.log('0 second timer')
},0)


console.log("Stopping")


request({url: url}, (error, response) => { // The json: option is going to parse the data so there is not need of 
    // jSON.parse option 
const data = JSON.parse(response.body)
console.log(data)
})

//The error function is a low level information for example (not connectivity)
request({url: url, json:true }, (error, response) => { // The json: option is going to parse the data so there is not need of 
    // jSON.parse(response.body) option 
// console.log(response.body.currently)
// console.log(response.body.timezone)
//in foward geocoding we type the string address and we get the coordinates 
console.log(response.body.daily.data[0].summary +" It's currenctly " + response.body.currently.temperature + " degrees out. There is a "+ response.body.currently.precipProbability +" chance of rain."  )

})

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



// fetch('http://puzzle.mead.io/puzzle').then((response) =>{ 
//     response.json().then((data) => {
//     //response.json is a function the second.then is going to run when the json data has arrived and then parse
//     console.log(data)
//     })

// })
