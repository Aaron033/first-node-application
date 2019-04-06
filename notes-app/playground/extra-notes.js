const car ={
    make: "volkswagen", 
    model: "cc"
}
const bookJSON = JSON.stringify(book)
console.log(bookJSON) // this converts the objet to a string 

const parseData = JSON.parse(bookJSON)//This code converts the string into an object
console.log(parseData.author); 