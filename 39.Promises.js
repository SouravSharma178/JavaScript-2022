// this is self made promise
/*
if a callback function is written with an argument then it is sure that its declaration has been done above and over the function
await always takes resolve in return
issme previousValue is being returned by the parent function in which callback is written
// let a = 10;
// const fun =(a,(b)=>{
//     console.log(a+b);
// })
// fun(0,5)
function changeState(currentState){
    setCount(currentState);
    
}
let setCount=(previousValue)=>{
    previousValue = previousValue+1;
    console.log(previousValue);
}
let cs = new changeState(5);

let output = (setCount)
console.log(output)
setAge(previousValue=>previousValue+1)
*/
let check =(resolve,reject)=>{
    if(resolve=="Resolved"){
        console.log("No error the promise has been resolved")
    }
    else{
        reject("err");
    }
}
check("Resolved",(err)=>{
    if(err=="err"){
   console.log("This is an error")
    }
})
