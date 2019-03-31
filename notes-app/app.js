
const getNotes = require('./notes.js')
const yargs = require('yargs')
const chalk = require('chalk')

// console.log(process.argv); the difference without yargs 

//Customize yargs version 
yargs.version('1.1.0') // This is how you change the version 
// console.log(yargs.argv);
//It takes an object 
yargs.command({
    command: 'add', 
    describe: 'Add a new note', 
    handler: function(){
        console.log('Adding a new note!')
    }

})
//1 console.log(yargs.argv); it will show in the input commands: app.js add Add a new note 
//Because we added a new command whenever you do (1)

//Create remove command 
yargs.command({
    command: 'remove', 
    describe: "removing a note", 
    handler: function(){
        console.log('Removing a note')
    }
})
yargs.command({
    command: 'list', 
    describe: "listing all the notes ", 
    handler: function(){
        console.log('This is the list of all notes')
    }
})
yargs.command({
    command: 'read', 
    describe: "reading a note ", 
    handler: function(){
        console.log('now we are reading a note')
    }
})
console.log(yargs.argv);

