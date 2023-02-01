// This tutorial extends more array methods (however it must be noted that arrays are mutable,i.e they can be changed)
/*
1.delete (it is not an array method but it is an operator)
2.concat (joins two arrays,returns new array and does not change the existing arrays)
3.sort   (it sorts an array alphabetically(only by reading the first digit of each number) and modifies the original array)
4.reverse function reverse the array
5.Splice (it is used to add new items to an array & it takes 3 arguments and returns all the deleted items)
6.slice (it is used to delete items from & to a given index)
 */

// This is the delete method
let num = [1,2,3,4,5,6,7,8,9];
delete(num[0]);
console.log(num);
console.log("Even after using the delete operator the length of the array would remain as "+num.length+" only");

// this is the concat method
let num2 = [11,12,13,14,15,16,17,18,19];
let new_Array = num.concat(num2);
console.log(new_Array);

// this is the reverse
let num_reverse = num.reverse();
console.log(num_reverse);
let num_sorted = num_reverse.sort();
console.log(num_sorted);

// this is sort method

let new_num = [55,243,73,84,251,11]
new_num.sort();
console.log("This is the sorting done in alphabetical order "+new_num);

// now to sort the elements in an array in ascending or descending order we will pass an argument of compare function within the sort function

// the compare function works as follows (if a<b and the result is negative then dont swap,otherwise if a>b swap the numbers since the result is positive)

const compare=(a,b)=>{
    return a-b;
     // a-b to sort in ascending order
    // b-a to sort in descending order
}
new_num.sort(compare);
console.log("This is the sorting done in ascending order "+new_num);


// This is splicing
console.log("From here we will start splicing");
console.log(new_num);
/*
the first argument is from which index to delete,how many elements to delete and which elements to add (it must be noted that it is not compulsory to replace all the deleted elements from the array)
 */
new_num.splice(2,4,77,99,121);
console.log(new_num);

//// This is slicing
console.log("From here we will start slicing");
console.log(new_num);
// this will delete all items from given index to the end and returns a new array
let new_num2 = new_num.slice(3);
console.log(new_num2);

console.log(new_num);
let new_num3 = new_num.slice(2,5);
console.log(new_num3);


