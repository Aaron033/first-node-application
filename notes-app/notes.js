const fs = require('fs') // If you want to load or read a file from 
// the system you must use fs



const getNotes = function(){
    return "your notes..."
};

const addNote = function(title, body ){
const notes = loadNotes()
}


const loadNotes = function (){

}

// The code below is how you export more than one function 
module.exports = {
    getNotes: getNotes, 
    addNote: addNote
}