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