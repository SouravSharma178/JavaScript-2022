// This is the tutorial on String methods

//* IMPORTANT -> Strings are immutable meaning that they cannot be changed just by calling a method and printing them,they must be assigned to a new variable inorder to mute them so myname[1] = "R" is not possible but it is possible while working with objects
/*
1.length (it is a property not a method)
The various string methods are
2.toUppercase (it is a method)
3.toLowerCase
4.slice
5.replace
6.concat
7.trim
 */
// 1.Length
let myname = "Sourav"
console.log(myname[0]);
console.log(myname[1]);
console.log(myname[2]);
console.log(myname[3]);
console.log(myname[4]);
console.log(myname[5]);
console.log(myname.length);


// 2.toUpperCase()
console.log(myname.toUpperCase());

//3.toLowerCase()
console.log(myname.toLowerCase());

//4.slice
console.log(myname.slice(2,5)); // here 2 is inclusive but 5 is exclusive (so we will get letters at positions 2,3 and 4)

//5.replace
// whatever string that we are writing in the first argument of the replace methods that should be present in the original string
let new_my_name = myname.replace("rav","rabh");
console.log(myname);
console.log(new_my_name);

//6.concat
let surname = " Sharma"
let fullname = myname.concat(surname," is a developer"); // join all the strings in this order to the original string
console.log(fullname);

//7.trim (to remove the whitespaces in the string)
let temp_name = " Sourav   "
console.log(temp_name);
console.log(temp_name.trim());

