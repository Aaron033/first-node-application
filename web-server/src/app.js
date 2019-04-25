const express = require('express')

const app = express() //This is how we are going to access express properties 
// app.com  = Domain , route
// app.com/help 
// app.com/about 
//The function in the second argument is what we want to do when people visits this page
app.get('', (req, res) =>{
    //res.send() send something back to the requester 
   res.send('Hello express')
})

//This is how we link web pages   
app.get('/help', (req, res) =>{
    res.send('Help Page')
})

app.get('/about', (req, res) =>{
    res.send('About Page')
})

app.get('/me', (req, res) =>{
    res.send('Me Page')
})

app.get('/Weather', (req, res) =>{
    res.send('weather Page')
})
//Common development port(3000)
//if we want to start the server we must do use the property listen 
//The second argument is the callback function
app.listen(3000, () =>{
console.log('Server is running')
})