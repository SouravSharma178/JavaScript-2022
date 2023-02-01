/* Types of loops in JavaScript
1.For Loop
2.For in Loop (Objects)
3.For of Loop (arrays&strings)
4.For each loop (arrays)
5.While Loop
6.Do while loop
*/

// 1.for loop
let sum = "0";
sum = Number.parseInt(sum);
// let sum = +sum_temp; (We can use this approach also to convert string to number)
for (let i = 0; i < 5; i++) {
     sum+=i;
}
console.log(sum);

const mylist =
{
          name:"Sourav",
          age:100,
          address:"India"
}

// This is the for in loop (This is used to iterate over the objects)

// here i represents the keys
for (const key in mylist){
     if(mylist[key]==100){
          console.log("found");
          break;
     }
     else{
          console.log("not found");
     }
}

// forof loop is used to iterate over arrays and strings

for(iterable of "Sourav"){
     console.log(iterable);
}

// while loop in JS
let myval = 50;
let i = myval;
while(i>0){
     console.log(i);
     i--;
}

let password = "Sourav";
let k = 0;
do{
    if(password=="Sourav"){
        console.log("Running")
        k++;
    }
}while(k<=0)

// factorial using dowhile loop
let num = 6;
let j = 1;
do{
    j *= num;
    num--;
}while(num>0)
console.log(j);
