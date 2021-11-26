// reference node's filesystem module to read text files
let fs = require('fs')

//read food file asynchronously
let food = fs.readFile('food.txt','utf-8', (err, food) =>{
    console.log(food)
})
console.log('We ate this')

let drinks = fs.readFile('drinks.txt', 'utf8', (err, drinks) => {
    console.log(drinks)
})

console.log('we dranks ')