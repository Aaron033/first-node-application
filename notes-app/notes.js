const fs = require('fs') // If you want to load or read a file from 
// the system you must use fs



const getNotes = function(){
    return "your notes..."
};

const addNote = function(title, body ){
const notes = loadNotes()
// We are going to push a note as object 
notes.push({
title: title,  // The second value comes from the title comes from the addNote argument  
body: body 
})
console.log(notes)
}


//This is the code to save notes 
const saveNotes = function(notes){

}

const loadNotes = function (){
    try{
        const dataBuffer = fs.readFileSync('notes.json')// We read the file and we storage the file in the databuffer variable
        const dataJSON = dataBuffer.toString() // The file comes as number, so we must converted into string  
        return JSON.parse(dataJSON)// Now that the information is converted to string we must comverted to an object 

    } catch(e){
       return []
    }

}

// The code below is how you export more than one function 
module.exports = {
    getNotes: getNotes, 
    addNote: addNote
}