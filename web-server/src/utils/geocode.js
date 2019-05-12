const request = require('request')

const geocode = (address, callback) => {
    //encodeURIComponent  is for special characters 
         const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token='
         request({url, json: true}, (error, {body})=>{
            if(error){
                //If this code is trigged; The function could have connectivity issues 
                //We are calling the callback function 
                callback('Unable to connect to services', undefined)
            }else if (body.features.length === 0){
              callback('Unable to find location', undefined)
              //If we cannot find the location the code above is trigged 
            }else{
                //We set a undefined parameter because, previous errors had been take cared off 
             callback(undefined, {
                //This undefined takes the place of the error
                latitude: body.features[0].center[1], 
                longitude:body.features[0].center[0],
                location: body.features[0].place_name
                
             }) 
            }
         })
        }
        

        module.exports = geocode
//Terminal commands 
// -a   aflag shows hidden files even files that start with a dot 
// -l list items  (top-to-bottom)
      //   ~ path to user directory 
      // ~/.ssh we are looking for the ssh folder  .ssh if the folder is not there the command line is going to crash 
      