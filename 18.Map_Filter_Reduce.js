// This is the tutorial on Map,Filter and Reduce methods in JS and these are termed as higher order array methods
// However we must note that none of these method modify our original array
let num = [41,93,24]
/*
The difference between map and loops is that map returns a new array
so that we can perform operations on these arrays and return a new array
*/


// the simplest implementation of map is
console.log("This is the simplest implementation of map")
let new_num_one = num.map((i)=>{
 console.log(i);
})
console.log("this is another way to implementation of map");
let new_num = num.map((value,index,array)=>{
  console.log(value,index,array);
  return value +5;
})
console.log("This is the array returned by map method");
console.log(new_num);

// Filter Method
let num2 = [41,93,24,0,6,8];
let new_num2 = num2.filter((i)=>{
       return i<10;
})
console.log("This is the new array returned by the filter method");
console.log(new_num2);


// reduce method reduces an array to a single value
let num3 = [1,2,3,4,5,6]
const red = num3.reduce((h1,h2)=>{
 return (h1+h2);
})
console.log(red);