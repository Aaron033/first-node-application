const fs = require('fs') // If you want to load or read a file from 
// the system you must use fs



const getNotes = function(){
    return "your notes..."
};

const addNote = function(title, body ){
const notes = loadNotes()//We sotrage the info into notes 
// We are going to push a note as object 

//Here, we are to save all duplicate notes that we find 
//*This code only check if there is a duplicate 
const duplicateNotes = notes.filter( function(note){
    return note.title === title  //it's going to check if the note.title is the same with the typed title 
    
})

if(duplicateNotes.length === 0 ) { 
 // If the length is 0 it means that we did not find any existing note 
 // Now we can safety add a new note 
 notes.push({
    title: title,  // The second value comes from the title comes from the addNote argument  
    body: body 
    })
    saveNotes(notes)
    console.log('New note added!')
}else {
    console.log('This note already exists')
}
}


//This is the code to save notes 
const saveNotes = function(notes){ // its going to take an array 
    const dataJSON = JSON.stringify(notes)// We convert the notes object into a string
    fs.writeFileSync('notes.json', dataJSON)// We are creating the notes.json file and passing the dataJSON data as a string 
    //--> because json files only accepts strings 
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
//This code is to remove a note 
const removeNote = function(title){
    const notes = loadNotes() 



}
// The code below is how you export more than one function 
module.exports = {
    //This is how you export all the function out of the file 
    getNotes: getNotes, 
    addNote: addNote,
    removeNote: removeNote
}