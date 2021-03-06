const fs = require('fs') // If you want to load or read a file from 
// the system you must use fs
const chalk = require('chalk')
//There is a main function 
const addNote = (title, body)=>{
const notes = loadNotes()//We sotrage the info into notes 
// We are going to push a note as function 

//Here, we are to save all duplicate notes that we find 
//*This code only check if there is a duplicate 
//const duplicateNotes = notes.filter((note) => note.title === title  //it's going to check if the note.title is the same with the typed title    
//)
//The code above is going to check every note even if it finds it
// The take away concept is that it won't be a  second duplicate once it find one 
// So for the logic of it  we need to use find() function 

const duplicateNote = notes.find((note) => note.title === title)


if(!duplicateNote) {  
 // If the length is 0 it means that we did not find any existing note 
 // Now we can safety add a new note 
 notes.push({
    title: title,  // The second value comes from the title addNote argument  
    body: body 
    })
    saveNotes(notes)
    console.log(chalk.green.inverse('New note added!'))
}else {
    console.log(chalk.red.inverse('This note already exists'))
}
}


//This is the code to save notes 
const saveNotes = (notes)=> { // its going to take an array 
    const dataJSON = JSON.stringify(notes)// We convert the notes object into a string
    fs.writeFileSync('notes.json', dataJSON)// We are creating the notes.json file and passing the dataJSON data as a string 
    //--> because json files only accepts strings 
}
const loadNotes =()=>{
    try{
        const dataBuffer = fs.readFileSync('notes.json')// We read the file and we storage the file in the databuffer variable
        const dataJSON = dataBuffer.toString() // The file comes as number, so we must converted into string  
        return JSON.parse(dataJSON)// Now that the information is converted to string we must comverted to an object 

    } catch(e){
       return []
    }
}
//This code is to remove a note 
const removeNote = (title) => {
    const notes = loadNotes() 
    const notesToKeep = notes.filter((note)=> note.title !== title // This code is going to return if the tile does not match 
        
    )
    if(notes.length === notesToKeep.length){
        console.log(chalk.bgGreen("No notes removed"))
    }else{
        console.log(chalk.bgRed("note removed"))
    }


saveNotes(notesToKeep)
}

const listNotes =() =>{
    const notes = loadNotes() 
console.log(chalk.bgGreen("Your Notes"))
    const list = notes.filter((note) => console.log( note.title)) //note.title is returnig individual notes 

}

const readNote = (title) =>{
    const notes = loadNotes()
    const findNote = notes.find((note) => note.title === title)

    if(findNote){
        console.log(chalk.bgGreen("Note found"))
        console.log(chalk.yellow(findNote.title + "\n") + findNote.body)
      
    }else{
        console.log(chalk.bgRed("Note not found"))
    }

}
// The code below is how you export more than one function 
module.exports = {
    //This is how you export all the function out of the file 
    readNote: readNote,
    listNotes:  listNotes,
    // getNotes: getNotes, 
    addNote: addNote,
    removeNote: removeNote
}