console.log('Client side javascript file is loaded')


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
            //It will show the error in the console 
           }else{
            messageOne.textContent = data.location
            messageTwo.textContent = data.forecast
            // It would get the code from the data in the geocode 
           
           }
        })
    })
    





})