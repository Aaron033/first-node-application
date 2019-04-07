const car ={
    make: "volkswagen", 
    model: "cc"
}
const bookJSON = JSON.stringify(book)// this converts the objet to a string 
console.log(bookJSON) 
//const book = {
    //  title: 'Ego is the Enemy', 
    //  author: 'Aaron Botello'
    // }
    
    // const bookJSON = JSON.stringify(book)
    // fs.writeFileSync('1-json.json', bookJSON)
    
    const dataBuffer = fs.readFileSync('1-json.json') // What comes back from the file is not a string it is a buffer 
    //that is how node.js represents binary data  meaning : 45 74 62 44 
    // In order to changes from data numbers to number you must use toString()

const parseData = JSON.parse(bookJSON)//This code converts the string into an object
console.log(parseData); 