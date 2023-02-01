/*
1.Var variables can be declared again and again
2.let has a block scope but var has a global scope
 */

/* 1.before ES6 var was used to declare variables but this resulted in a lot of bugs in our programs
2.we use const to declare variables whose value we dont want to change
3.we use let to declare block scoped variables
*/

// difference b/w var and let
var a = 10
var a = 20
console.log(a)
// the variables declared with var can be redeclared again and again

let b = "Transformers"

// let b = "Transformer2" (This line will throw an error as let variables cannot be redeclared)

console.log(b)

// let has a block scope but var has a global scope

{
console.log("Here we are printing variables inside the block")
var a = 3
console.log(a)
let b = "Avenegers"
console.log(b)
let c = 50
}
console.log("Here we are printing variables outside the block")
console.log("Here the value of a should be 2 but is is "+a)
console.log("In the block,b was declared as Avengers but we get the value as "+b)
//console.log("The value of c is "+c) -- this line will also throw an error as we have defined c in a block scopes