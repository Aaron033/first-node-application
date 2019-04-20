//A callback function is a function that we pass as an argument to another function with the intention of 
// Call it later on 

setTimeout(() =>{
    console.log('Two seconds are up')
}, 2000)

const names = ['Aaron', 'Botello', 'Herrera', 'Yass']
const shortNames = names.filter(() =>{
    return name.length <=4
})

const geocode = (address, callback) => {
    const data = {
        latitude: 0, 
        longitude: 0
    }
    return data
}

const data = geocode('Houston')