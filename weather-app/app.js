const request = require('request');

const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')



// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)

    //We pass Houston as a parameter 
geocode('Houston', (error, data) =>{
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