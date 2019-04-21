const request = require('request');

const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

//console.log(process.argv) is a predefined function 
const address = process.argv[2] 

    //We pass Houston as a parameter 
geocode(address, (error, data) =>{
//return is going to stop the function execution after the error message its print out 
if(error) {
    return console.log(error)
}
//We are taking the data.longitud option above 
forecast(data.latitude , data.longitude, (error, forecastData) => {
    if(error) {
        return console.log(error)
        
    }
    console.log(data.location)
        console.log(forecastData)
})
})