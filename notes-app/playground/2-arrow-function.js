// const square =function(x){
// return x * x 
// }

//Same functionality 
// const square = (x) => {
//     return x * x 
// }

//3er version 
// const square = (x) => x * x

// console.log(square(3))

//Obejct 
const event = {
 name: 'Birthday Party', 
 printGuestList: function(){
     console.log('Guest list for ' + this.name) // this. has the ability to acces 
     // properties of objects
 }
}