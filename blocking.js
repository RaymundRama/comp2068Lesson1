//refrerence node's filesystem library to read and write files
let fs = require('fs')

//read contents of food text file and stored in variable called "food"
var food = fs.readFileSync('food.txt', 'utf-8')

//displaycontents of file
console.log(food)
console.log('We ate this lol')

//same for drinks file

var drinks = fs.readFileSync('drinks.txt', 'utf-8')
console.log(drinks)
console.log('fuck ')