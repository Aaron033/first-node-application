const book = {
 title: 'Ego is the Enemy', 
 author: 'Aaron Botello'

}

const car ={
    make: "volkswagen", 
    model: "cc"
}
const bookJSON = JSON.stringify(book)
console.log(bookJSON) // this converts the objet to a string 

const parseData = JSON.parse(bookJSON)
console.log(parseData.author);