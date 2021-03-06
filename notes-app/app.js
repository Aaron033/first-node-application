
const notes = require('./notes.js')
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
    builder: {
        title:{
            describe: 'Note title', 
            demandOption: true, 
            type: 'string'
        }, 
        body:{
            describe: "important addition", 
            demandOption: true, 
            type: 'string'
        }
    },
    handler(argv){
     notes.addNote(argv.title, argv.body) // notes comes from the file notes.js 
     //argv can be any variable and we can access title and body accordinly 
    }

})
//1 console.log(yargs.argv); it will show in the input commands: app.js add Add a new note 
//Because we added a new command whenever you do (1)

//Create remove command 
yargs.command({
    command: 'remove', 
    describe: "removing a note", 
    builder: {
        title: {
    describe: 'note title', 
    demandOption: true, 
    type: 'string'
        }
    },
    handler(argv){ // argv this how we access all our arguments in the handler 
notes.removeNote(argv.title)

       
    }

})

yargs.command({
    command: 'list', 
    describe: "listing all the notes ", 
    handler(argv){
        notes.listNotes(argv.title)
    }


})


yargs.command({
    command: 'read', 
    describe: "reading a note ",g
    builder: { // value is an object
   title: {
       describe: 'Note title', 
       demandOption: true,
       type: 'string'

   }
    } ,
    handler(argv){ //handler: function(){}
        notes.readNote(argv.title)
    }
})
yargs.parse()


