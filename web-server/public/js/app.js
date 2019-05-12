console.log('Client side javascript file is loaded')

// fetch('http://puzzle.mead.io/puzzle').then((response) =>{ 
//     response.json().then((data) => {
//     //response.json is a function the second.then is going to run when the json data has arrived and then parse
//     console.log(data)
//     })

// })


const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')


messageOne.textContent = ""
messageTwo.textContent = ""

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    //The code above prevents the reloading default action 

    const location = search.value 
    //The value is the information that we typed in the search box

    messageOne.textContent = "loading..."
    messageTwo.textContent = ""
fetch('/weather?address=' + location).then((response) => {
        response.json().then((data) =>{
           if(data.error){
            messageTwo.textContent = data.error
           }else{
            messageOne.textContent = data.location
            messageTwo.textContent = data.forecast
           
           }
        })
    })
    





})