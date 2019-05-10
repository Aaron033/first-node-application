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
