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