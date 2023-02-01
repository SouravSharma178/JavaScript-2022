// This is the tutorial on primitives data types and objects
/*  JavaScript has 7 primitive datatypes that are built in NNSSBBU
1.Null
2.Number
3.String
4.Symbol
5.Undefined
6.Boolean
7.BigInt
*/
let a = null;
let b = 40;
let c = "Shyam";
let d = Symbol("I am a Symbol");
let e = undefined;
let f = true;
let g = BigInt("500") + BigInt("100")
console.log(a,b,c,d,e,f,g)

// if we want to check the datatype of a variable we will use typeof
console.log(typeof(d));
console.log(typeof(e));


// Objects in JS (They are key value pairs defined by the user)
const items = {
    "item1" : 30,
    "item2" : 50,
    "item3" : 70,
}
console.log(items["item1"])
console.log(items["item2"])
console.log(items["item3"])



// Symbols in javascript
// JS Nuggets: Symbols

// Creation

let symbol1 = Symbol('symbol2');
let symbol2 = Symbol('symbol2');

// every symbol is unique and one symbol is never equal to another symbol
console.log(symbol1 === symbol2);
console.log(typeof symbol1);
console.log('symbol: ' + symbol1.toString());


// Use case 1: Symbols as property keys
   const MY_KEY = Symbol();
    let obj = {};

    obj[MY_KEY] = 123;
    console.log(obj[MY_KEY]);


// Use case 2: constants representing concepts
const COLOR_RED    = Symbol('Red');
const COLOR_ORANGE = Symbol('Orange');
const COLOR_YELLOW = Symbol('Yellow');
const COLOR_GREEN  = Symbol('Green');
const COLOR_BLUE   = Symbol('Blue');
const COLOR_VIOLET = Symbol('Violet');

function getComplement(color) {
    switch (color) {
        case COLOR_RED:
            return COLOR_GREEN;
        case COLOR_ORANGE:
            return COLOR_BLUE;
        case COLOR_YELLOW:
            return COLOR_VIOLET;
        case COLOR_GREEN:
            return COLOR_RED;
        case COLOR_BLUE:
            return COLOR_ORANGE;
        case COLOR_VIOLET:
            return COLOR_YELLOW;
        default:
            throw new Exception('Unknown color: '+color);
    }
}