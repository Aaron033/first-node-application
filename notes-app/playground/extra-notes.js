const car ={
    make: "volkswagen", 
    model: "cc"
}
const bookJSON = JSON.stringify(book)
console.log(bookJSON) // this converts the objet to a string 
//const book = {
    //  title: 'Ego is the Enemy', 
    //  author: 'Aaron Botello'
    // }
    
    // const bookJSON = JSON.stringify(book)
    // fs.writeFileSync('1-json.json', bookJSON)
    


const parseData = JSON.parse(bookJSON)//This code converts the string into an object
console.log(parseData.author); 