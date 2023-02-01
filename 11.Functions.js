// this is the basic function
function fun(a,b){
    return a+b;
}
let result = fun(5,4);
console.log(result);

// The modern syntax,the arrow function is written as
const sum =(p,q)=>{
   return p+q;
}
let result2 = sum(10,20);
console.log(result2);

// This is the non parameter function
const hello=()=>{
    return "hello how are you";
}

let result3 = hello();
console.log(result3);