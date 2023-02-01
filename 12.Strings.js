/* This is the tutorial on escape sequence characters
1.\
2.\n -> Newline
3.\r -> Tab
4.\t -> Carriage Return
*/

let myname = "Sourav";
console.log(myname);
console.log(myname[0]);
console.log(myname[1]);

// Template Literals in JavaScript through which we can do String interpolation
let m1 = "keyboard"
let m2 = "mouse"
console.log(`${m1} is a friend of ${m2}`);

//Escape Sequence Characters
let myname2 = "Sourav\"Sharma\""
console.log(myname2);

let myname3 = "Sourav Sharma"
console.log(myname3.length);

// while counting the length the escape sequence character would not be counted, the first and last quotes would not be counted,but the quotes before and after the escape sequence would be counted

console.log(myname2.length);