
const getNotes = require('./notes.js')
const yargs = require('yargs')
const validator = require('validator'); //for npm modules you don't have to provide a path 
const chalk = require('chalk');
const msg = getNotes();
// console.log(msg); 
// console.log(validator.isEmail('aaron.botello.h@gmail.com'))
// // const multy = require('./notes.js');

// console.log(validator.isURL('http://www.google.com'));

console.log(chalk.green('Success'));
const greenmsg = chalk.green.inverse.bold('Success')
console.log(greenmsg); 

//The information that we pass after we type node app.js Aaron can be access by process.argv
console.log(process.argv[2]);
//process.argv gives everything that you type after:  node app.js *someting 
//The first 0 and 1 lines are the location of the file and 
//The third one is whatever you inputted
const command = process.argv[2]; 

if (command === 'add'){
    console.log('Adding a note!')
}else if(command === 'remove'){
    console.log("Removing note");
}


if(notes.title === title){
    console.log('Same')
}else{
    console.log('not Same ')
}
    // console.log(title)
    // console.log(notes)
    // const noteToRemove = notes.filter(function(){
    // return note.title === title 
    // })
    // if(title === notes.title){
    //     console.log('Equal title')
    // }else{
    //     console.log('Different title')
    // }

    // console.log(notes)



    //3-arrow-challenge 

    getTasksToDo: function() {
       
        const tasksToDo = this.tasks.filter((task)=>{
            return task.completed === false
        }) 
        return tasksToDo
                // if(finish.completed === false ){
                //     console.log(finish.text, "its incompleted")
                // }else {
                //     return "completed"
                // }
        }
        
        }