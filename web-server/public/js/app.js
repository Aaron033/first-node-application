console.log('Client side javascript file is loaded')

// fetch('http://puzzle.mead.io/puzzle').then((response) =>{ 
//     response.json().then((data) => {
//     //response.json is a function the second.then is going to run when the json data has arrived and then parse
//     console.log(data)
//     })

// })

fetch('http://localhost:3000/weather?address=Boston').then((response) => {
    response.json().then((data) =>{
       if(data.error){
           console.log(data.error)
       }else{
        console.log(data.location)
        console.log(data.forecast)
       
       }
    })
})

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    //The code above prevents the reloading default action 

    const location = search.value 
    //The value is the information that we typed in the search box
    console.log('testing!')
})