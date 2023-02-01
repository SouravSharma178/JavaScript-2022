// this is self made promise
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