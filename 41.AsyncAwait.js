// await always collects the resolve
function someWork(location){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        if(location=="Google"){
            resolve("Promise has been resolved after 5000s");
        } else{
            reject("Promise rejected");
        }
    },5000)
})
}

// this acts as a convininent way of writing multiple .then blocks
async function doWork(){
    try{
    let output = await someWork("Google");
    console.log(output);
    } catch(err){
        console.log(err);
    }
    console.log("in the doWork section");
}
doWork();
console.log("rest of the code");