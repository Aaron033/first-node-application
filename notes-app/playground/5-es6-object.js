//Obejct property shorthand 

const name = "Aaron"
const userAge = 25

const user = {
    name: name, 
    age: userAge, 
    location: 'Houston'
}


// const user = {
//     name,   // The name has to match up with the variable defined 
//     userAge, 
//     location: 'Houston'
// }

console.log(user)
console.log(user.age)

//Object desctructuring 
const product = {
    label: 'Red notebook', 
    price: 3, 
    stock: 201, 
    salePrice: undefined
}