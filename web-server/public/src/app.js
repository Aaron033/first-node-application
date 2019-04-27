const path = require('path')
const express = require('express')

// console.log(__dirname)
// //This is how we locate a file in the system 
// console.log(path.join(__dirname, '../public'))
const app = express() //This is how we are going to access express properties 
// app.com  = Domain , route
// app.com/help 
// app.com/about 
const publicDirectoryPath = path.join(__dirname, '../public') 
app.use(express.static(publicDirectoryPath))
app.set('view engine', 'hbs')
//The function in the second argument is what we want to do when people visits this page

app.get('', (req, res) =>{
    res.render('index')
    //The render argument needs to match to index.hbs file
})
//This is how we link web pages   
app.get('/help', (req, res) =>{
    
})

app.get('/about', (req, res) =>{

})

app.get('/me', (req, res) =>{
    res.send({
        name:'Aaron',
        lastName: 'Botello',
        citizenship: 'U.S'
        
    })
})

app.get('/Weather', (req, res) =>{
    res.send([{
        country: 'U.S', 
        location: 'Houston, Texas', 

        
    }, 
{
    precipitation: 0, 
    temperatur: 80, 
    airCuality: 'Bad'
}])
})
//Common development port(3000)
//if we want to start the server we must do use the property listen 
//The second argument is the callback function
app.listen(3000, () =>{
console.log('Server is running')
})