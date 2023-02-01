// add a number to a string
let num1_temp  = "1";
let num2  = 2;
let num1 = (parseInt(num1_temp));
let result = num1+num2;
console.log(result);

const mylist = {
    name:"Sourav",
    age:100,
    address:"India"
}
/*
1.Add a new key
now to add another key to the list we will do the following
however this will not work ->
mylist[profession] = "Software Engineer";
*/
mylist["profession"] = "Software Engineer";
console.log(mylist);

/*
2.To change the value of a key
*/
mylist["name"] = "Krishna"
console.log(mylist);

/*
3.This is also not allowed
mylist = 50;
mylist = {}
*/

// 4.To access values of keys of an object (we can use the dot operator or the object[key] syntax to access the values of keys in an object)
// 1.method first
console.log(mylist.address);
// 2.method second
console.log(mylist['address'])

if(mylist.address == "India"){
    console.log("yes");
}
else{
    console.log("no");
}

