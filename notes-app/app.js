
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
