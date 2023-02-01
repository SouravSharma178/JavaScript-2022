// arrays in javascript can also store heterogenous data types
// arrays are mutable but string are not
let marks = [10,20,30,40]
console.log(marks)

let names = ["Sourav","Sharma",1,2,true]
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);
console.log(names[4]);
console.log(names[5]); //undefined

// to find length of an array
console.log("Length of the array is "+names.length);

// to change the elements or to add elements,we can target these elements by using their indexes
marks[3] = 50;
marks[4] = 60;
console.log(marks)

// The typeof array is not array but an object
console.log(typeof marks);