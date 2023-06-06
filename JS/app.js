'use strict'

let userName = "Ahmad"
console.log(userName);

//Arrays
let user1 = "Ahmad"
let user2 = "Rawan"
let user3 = "Maya"
let user4 = "Aws"
let user5 = "Farah"

// DRY = don't repeat yourself

// Declare array
// 1.
let newArray = []

// 2.
let arr = new Array(10)

// 3.
let arr1 = [1, 3, 0, "Ahmad", ["Class 6, Class 7"]]

console.log("arr1: ", arr1);
console.log(arr1[0]);
console.log(arr1[2]);
console.log(arr1.length - 1);
console.log(arr1.length);
console.log(arr1[4][1]);

// Add the end of array
console.log(arr1.push("Rana"));
console.log(arr1);

// Add to the beginning of the array
console.log(arr1.unshift(99));
console.log(arr1);

// normal or worst case
arr1[arr1.length] = "new elements"
console.log(arr1);
arr1[20] = 22
console.log(arr1[15]);

// Remove from the end of array
console.log(arr1.pop());
console.log(arr1);

console.log(newArray.pop());
console.log(newArray);

let popElement = arr1.pop();
console.log("Pop elements: ", popElement);

// Remove from the beginning of array
console.log(arr1.shift());
console.log(arr1);


let Grates = [10, 5, 10, 9, 8, 7, 10, 2, 3, 1]
// let summ = Grates[0] + Grates[1] + Grates[2]
// console.log(summ);

//// Loops
// 1. For loop

// let sum = 0;
// for (let i = 0; i < Grates.length; i++) {
// sum = sum + Grates[i]
// }

// console.log("Summation = " + sum);

let sum = 0;
for (let i = Grates.length - 1; i >= 0; i--) {
sum = sum + Grates[i]
}

console.log("Summation = " + sum);

// 2. while loop

let i =0;
let sum1 = 0;
while (i < Grates.length){
    sum += Grates[i]
    ++i;
}
console.log(sum1);

// Second example
let user = prompt("Please enter your grade")

// while(!((user === 'female' && user != 'male') || (user != 'female' && user === 'male'))){
//     user = prompt("Please enter your gender")

// }

while(user != 'female' && user != 'male') {
        user = prompt("Please re enter your gender")
}

// 3. do while

let variable = 10
do{
console.log("Variable: " + variable);
variable--;
}while (variable > 5)
