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
    salePrice: undefined,
    rating: 3.4
    
}

//const label = product.label
//const stock = product.stock 

// //This is how to extrac properties out of an object 
// const {label:productLabel, stock, rating = 5} = product 
// //It is going to be used the rating set up in the object 
// console.log(productLabel)
// console.log(stock)
// console.log(rating)

const transaction = (type, {label, stock}) => {
 console.log(type, label, stock)
 //This method is called distructing; we accessing the properties of product
}
//In this code is taking the object as a parameter 
transaction('order', product)