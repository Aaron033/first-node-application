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



//Object desctructuring 
const product = {
    label: 'Red notebook', 
    price: 3, 
    stock: 201, 
    salePrice: undefined
}

//const label = product.label
//const stock = product.stock 

//This is how to extrac properties out of an object 
const {label:productLabel, stock, rating} = product 

console.log(productLabel)
console.log(stock)
console.log(rating)