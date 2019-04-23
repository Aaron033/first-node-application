const request = require('request')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

//console.log(process.argv) is a predefined function 
const address = process.argv[2] 

if(!address){
    console.log('Provide an address')

}else{
   //We pass Houston as a parameter 
   geocode(address, (error, {latitude, longitude, location}) =>{
    //return is going to stop the function execution after the error message its print out 
    if(error) {
        return console.log(error)
    }
    //Using desconstructing to access properties 
    //We are taking the data.longitud option above 
    forecast(latitude , longitude, (error, forecastData) => {
        if(error) {
            return console.log(error)
            
        }
        
        console.log(location)
        console.log(forecastData)
    })
    })
}

 