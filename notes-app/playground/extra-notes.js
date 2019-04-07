const car ={
    make: "volkswagen", 
    model: "cc"
}
const bookJSON = JSON.stringify(book)// This converts the objet into a  string 
console.log(bookJSON) 
const book = {
     title: 'Ego is the Enemy', 
     author: 'Aaron Botello'
    }
    
    const bookJSON = JSON.stringify(book)
    fs.writeFileSync('1-json.json', bookJSON) // Second argument it is what I am going to write 
    
    const dataBuffer = fs.readFileSync('1-json.json') // What comes back from the file is not a string it is a buffer 
    //that is how node.js represents binary data  meaning : 45 74 62 44 
    // In order to changes from data numbers to number you must use toString()

const parseData = JSON.parse(bookJSON)//This code converts the string into an object
console.log(parseData); 


const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)

console.log(data.title)



/* my code  */
const myInfo = {
    name: 'Aaron',
    planet: 'Mars', 
    age: 25
   }
   
   const swapinfo = JSON.stringify(myInfo)
   fs.writeFileSync('1-json.json', swapinfo)
   
   console.log(swapinfo);
   /* end of my code  */