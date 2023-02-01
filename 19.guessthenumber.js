let num_temp = Math.random()*100;
let num = Number.parseInt(num_temp);
let difference;
let count = 0;
do{
let guessed_number_temp = prompt("Enter the number");
let guessed_number = Number.parseInt(guessed_number_temp);
difference = num - guessed_number
console.log("The differnce is",difference);
count++;
}while(difference!=0)
console.log("The total score is",100-count);
