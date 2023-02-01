function makeRequest(location){
    return new Promise((resolve,reject)=>{
        if(location=="Google"){
            resolve("Google says hi");
        } else {
            reject("rejected the request")
        }
    })
}

function processRequest(response){
    return new Promise((resolve,reject)=>{
        console.log("Processing Response");
        resolve(`Extra Information :${response}`);
    })
}

makeRequest("Google").then((message)=>{
    console.log("Success",message);
// here we return a new Promise from the function processRequest
    return processRequest("Processed");
}).then((message)=>{
    // this .then is from the makeRequest function
    console.log(message)
})

// function makeRequest(location){
//     return new Promise((resolve,reject)=>{
//         if(location=="Google"){
//             resolve("Google says hi");
//         } else {
//             reject("rejected the request")
//         }
//     })
// }

// function processRequest(response){
//     return new Promise((resolve,reject)=>{
//         console.log("Processing Response");
//         resolve(`Extra Information :${response}`);
//     })
// }

// makeRequest("Facebook").then((message)=>{
//     console.log("Success",message);
//     return processRequest("Processed");
// }).then((message)=>{
//     console.log(message)
// }).catch((err)=>{
//     console.log(err)
// })