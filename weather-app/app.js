const request = require('request');

const geocode = require('./utils/geocode')


    //We pass Houston as a parameter 
geocode('Houston', (error, data) =>{
console.log('Error', error)
console.log('Data', data)
})