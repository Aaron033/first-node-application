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
 guestList: ['Andrew', 'Jen', 'Mike'],
 //printGuestList(){ //other way 
 printGuestList: function(){
     console.log('Guest list for ' + this.name) // this. has the ability to acces 
     // properties of objects
     this.guestList.forEach(function(guest){// with (guest) you access every item in gueslist
console.log(guest + ' is attending' + this.name)
     })
 }
}
//Arrow function are not suited for method properties function 
//This is how you access the event object properties 
event.printGuestList()