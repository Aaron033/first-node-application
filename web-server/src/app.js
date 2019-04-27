const path = require('path')
const express = require('express')
const hbs =require('hbs')

// console.log(__dirname)
// //This is how we locate a file in the system 
// console.log(path.join(__dirname, '../public'))
const app = express() //This is how we are going to access express properties 
// app.com  = Domain , route
// app.com/help 
// app.com/about 

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




app.get('', (req, res) =>{
    res.render('index',{
        title: 'weather App', 
        name: 'Aaron Botello'
    })
    //The render argument needs to match to index.hbs file
})
//This is how we link web pages   
app.get('/help', (req, res) =>{
    res.render('help', {
        title: 'Help needed', 
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