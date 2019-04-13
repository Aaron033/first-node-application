//This is an empty file for arrow challenge 

//
// Goal: Create method to get incomplete tasks
//
// 1. Define getTasksToDo method
// 2. Use filter to to return just the incompleted tasks (arrow function)
// 3. Test your work by running the script
const tasks = {
    tasks: [{
        text: 'Grocery shopping',
        completed: true
    },{
        text: 'Clean yard',
        completed: false
    }, {
        text: 'Film course',
        completed: false
    }], 
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

console.log(tasks.getTasksToDo())