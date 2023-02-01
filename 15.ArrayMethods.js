// This is the tutorial on array methods
/*
1.toString (This converts an array to a String)
2.join     (This joins elements on an array using a separator)
3.pop      (removes the last element,uses stack)
4.push     (adds element to the end of the list,uses stack)
5.shift    (removes the first element,uses queue)
6.unshift  (adds element to the start of the array & returns the new array length,queue)
*/
let num = [1,2,3,50,7]
console.log(num);

// toString method
let b = num.toString(); // b is now a string
console.log("This is the toString method \n"+b);

// join method
let c = num.join("_")
console.log("This is the join method \n"+c)

// pop method (removes the last element of the array)
let r = num.pop(); // pop returns the popped element
console.log(num)

// push method (The element will be pushed to the end of the array)
num.push(79);
console.log("The new array after pushing is "+num);

// shift removes the first element from the array
num.shift();
console.log(num);

// unshift adds element to the start of the array
num.unshift(80,100,150);
console.log("This the new array after unshifting "+num);