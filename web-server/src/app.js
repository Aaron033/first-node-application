const path = require('path')
const express = require('express')
const hbs =require('hbs')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

// console.log(__dirname)
// //This is how we locate a file in the system 
// console.log(path.join(__dirname, '../public'))
const app = express() //This is how we are going to access express properties 
// app.com  = Domain , route
// app.com/help 
// app.com/about 

const port = process.env.PORT || 3000
//Process.env is where we can  access enviroment variables 
const address = process.argv[2] 
//Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public') 
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')


//Setup static directory to serve 
app.use(express.static(publicDirectoryPath))

//Setup handlebars engine and views location
app.set('view engine', 'hbs')
//The function in the second argument is what we want to do when people visits this page
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)



// This is the root 
app.get('', (req, res) =>{
    res.render('index',{
        title: 'Weather', 
        name: 'Aaron Botello'
    })
    //The render argument needs to match to index.hbs file
})
//This is how we link web pages   
app.get('/help', (req, res) =>{
    res.render('help', {
        title: 'Help Page', 
        notes: 'Help section here'
    })
})

app.get('/about', (req, res) =>{
res.render('about', {
    title: 'About page', 
    notes: 'This is the about page'
})
})

app.get('/me', (req, res) =>{
    res.render('me', {
        title: "My bio",
        name:'Aaron',
        lastName: 'Botello',
        citizenship: 'U.S'
    })
       
        

})

app.get('/Weather', (req, res) => {
    // The req.query value gets if from the  input by the user
   if(!req.query.address){
 return res.send({
     error: 'You must provide a test'

 })
   }else { 

     //Deconstructuring below
    geocode(req.query.address, (error, {latitude, longitude, location} ={}) => {
        //we set up an empty object in order for our program not to crash 
        //When the programs prints out the error below 
        //but, still tries to distructuiring the latitude, longtitude etc,. 
        
    if(error){
     return res.send({
         //error : error  
         //but we use the short hand 
         error })
 }

 forecast(latitude, longitude , (error, forecastData) =>{
     if(error){
         return res.send({
             error})

     }
         res.send ({
             forecast: forecastData, 
             location, 
             address: req.query.address
         })
     
 })

    }) 
   }
})



app.get( '/products', (req, res) => {
  
if(!req.query.search){
    //This is how you send the error message to the console
    return res.send({
        error: 'You must provide a search term'
    })
}
    console.log(req.query.search)
    res.send({
        products: []
    })
})




// '/help/*' match anything that you put after help
app.get('/help/*', (req, res) => {
   res.render('404', {
       title: '404', 
       name: 'Aaron Botello', 
       errorMessage: 'help article not found'
   })
})

// '*' this match everything we haven't created a page for 
app.get('*', (req, res) => {
    //It catches  all notdefined pages 
    res.render('404', {
        title: '404', git
        name: 'Aaron Botello', 
        errorMessage: 'page not found'
    })

})
//Common development port(3000)
//if we want to start the server we must do use the property listen 
//The second argument is the callback function
app.listen(port, () =>{
console.log('Server is up on port' + port)
})


// nodemon src/app.js -e js,hbs // -e mean extension // it will extend to js and hbs files 