//In an asynchronous functions the statements runs from top to bottom 
//So staring and stopping will print out and at the end the 2 second timer will print out 

console.log('Starting')

setTimeout(()=> {
 console.log('2 second Timer')
},2000)


console.log("Stopping")