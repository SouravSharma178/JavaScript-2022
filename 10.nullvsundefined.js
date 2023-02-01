/* Imagine you are on an online store and you see a t-shirt, you click on it and you are taken to the customize page. So, by default the color of the t-shirt is red, but you as developer want your customers to have "none" as default color so you will set the value of your variable to "null" in your code. This example can also be found in photo-editing softwares like "Photoshop" where you can select the color as none. "Null" clears the value of your variable and is only used by developers when you explicitly want to clear the value of a variable.

"Undefined" is slightly different, it does not clear the value of the variable. It means you have simply not declared a value to your variable, and the first color available for t-shirt will be selected as the default color. */


var test
console.log(test)

test = null

console.log(test)

console.log("comparison between null and undefined")

console.log(typeof null)
console.log(typeof undefined)
console.log(null === undefined)
console.log(null == undefined)
console.log(null === null)
console.log(null == null)
console.log(!null)
console.log(!!null)
console.log(1 + null)
console.log(1 + undefined)