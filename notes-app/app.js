const fs = require('fs'); 

//fs.writeFileSync('notes.txt', 'This file was created by Node.js !')
document.getElementById("first").addEventListener('input',function(e){
    let a = e.target.value; 
    console.log(a);
});
try {
    fs.appendFileSync('notes.txt',' and this file was created by Aaron Botello using append '); 
} catch (err){
    console.log("There was an error");
}