// This is switch case in JavaScript
let age = 25;
switch(age){
    case 20:
        console.log("You cannot drive");
        break;
    case 21:
        console.log("You can drive");
        break;
    case 22:
        console.log("You can also drive");
        break;
    case 25:
        console.log("You can surely drive");
        break;
}

// we can also use ternary operators
console.log((age>=25? "yes you can":"no"))