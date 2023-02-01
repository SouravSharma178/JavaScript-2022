/* 1.let can be updated but not redeclared
   2.const can neither be updated nor redeclared
*/
const author = "Sourav"
// let author = 5 (This will throw an error as const variables cannot be redeclared)
let myvar = 5
myvar = 10
// this operation is allowed
console.log(myvar)

/*  3.const temp; (This is also not allowed as we have to assign the value of the variable at the definition time)

4.let temp; (This operation is allowed/no initialization done)
*/
