//A callback function is a function that we pass as an argument to another function with the intention of 
// Call it later on 

setTimeout(() =>{
    console.log('Two seconds are up')
}, 2000)

const names = ['Aaron', 'Botello', 'Herrera', 'Yass']
const shortNames = names.filter((name) =>{
    return name.length <=4
})

const geocode = (address, callback) => {
    setTimeout(() =>{
        const data = {
            latitude: 0, 
            longitude: 0
        }

        callback(data) // We are returning the data from the setTimeOut function
    }, 2000)
}

geocode('Houston', (data) => { //The data in passed as an argument can be anything (named)

})