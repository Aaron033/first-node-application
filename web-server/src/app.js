const express = require('express')

const app = express() //This is how we are going to access express properties 
// app.com  = Domain , route
// app.com/help 
// app.com/about 
//The function in the second argument is what we want to do when people visits this page
app.get('', (req, res) =>{
    //res.send() send something back to the requester 
   res.send()
})