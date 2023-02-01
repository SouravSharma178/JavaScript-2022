// this is the tutorial on looping through arrays
/*
1.for in loop
2.for of loop
3.for each loop
4.Array.from method
 */
let num = [1,2,3,4,5]
// this is the simple for loop
for (let i = 0; i < num.length; i++) {
    console.log(num[i]);
}

// this is the for in loop (it gives keys that is why we have to write num[key])
console.log("This is the for in loop");
for (i in num){
    console.log(num[i]);
}

// this is the for of loop
console.log("This is the for of loop");
for (i of num){
    //console.log(num[i]); (This syntax is not valid for for of loop)
    console.log(i);
}

// this is the for each loop
console.log("This is the for each loop");
num.forEach((i)=>{
console.log(i);
});

// this is Array.from method (This can convert a String,Html Collection etc to an array)

let myname = "Sourav";
let arr = Array.from(myname);
console.log(arr);