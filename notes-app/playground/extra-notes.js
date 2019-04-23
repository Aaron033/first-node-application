const car ={
    make: "volkswagen", 
    model: "cc"
}
const bookJSON = JSON.stringify(book)// This converts the objet into a  string 
console.log(bookJSON) 
const book = {
     title: 'Ego is the Enemy', 
     author: 'Aaron Botello'
    }
    
    const bookJSON = JSON.stringify(book)
    fs.writeFileSync('1-json.json', bookJSON) // Second argument it is what I am going to write 
    
    const dataBuffer = fs.readFileSync('1-json.json') // What comes back from the file is not a string it is a buffer 
    //that is how node.js represents binary data  meaning : 45 74 62 44 
    // In order to changes from data numbers to number you must use toString()

const parseData = JSON.parse(bookJSON)//This code converts the string into an object
console.log(parseData); 


const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)

console.log(data.title)



/* my code  */
const myInfo = {
    name: 'Aaron',
    planet: 'Mars', 
    age: 25
   }
   


   const swapinfo = JSON.stringify(myInfo)
   fs.writeFileSync('1-json.json', swapinfo)
   
   console.log(swapinfo);
   /* end of my code  */

//destructuring  starts here 
   const forecast = (latitude, longitude, callback) =>{
   
    const url = 'https://api.darksky.net/forecast/42630016cca883960a1b5228a7b95952/' + latitude + ',' + longitude 
    request({url: url, json: true}, (error, response)=>{
        //we are going to remove the url: because it matches the url const 
        //We are going change the response to body because he get the info from the body 
if(error){
    callback('Unable to connect to a server', undefined)
}else if(response.body.error){
    callback("Address not found", undefined)
}else{
    callback(undefined,response.body.daily.data[0].summary+" It's currenctly " + response.body.currently.temperature + " degrees out. There is a "+ response.body.currently.precipProbability +" chance of rain." )
   
}
    })
}

module.exports = forecast
//Destructuring ends here 