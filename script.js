//         Task 01

let nested_Array = [[], []];
nested_Array[0][0] = "Rashid";
document.write(`<h1><center><u>Task 01</u></center></h1><br>`);
document.write(`<h2><center>${nested_Array}</center></h2><hr>`);

//         Task 02

let matrix = [
  [0, 1, 2, 3],
  [1, 0, 1, 2],
  [2, 1, 0, 1],
];
document.write(`<h1><center><u>Task 02</u></center></h1><br>`);
document.write(`<h2><center>${matrix[0]}<br>${matrix[1]}<br>${matrix[2]}</center></h2><hr>`);

//         Task 03

document.write(`<h1><center><u>Task 03</u></center></h1><br>`);

for (let i = 1; i <= 10; i++) {
document.write(`<h2><center>${i}</center></h2>`);
  }
  document.write(`<hr>`)

//         Task 04

document.write(`<h1><center><u>Task 02</u></center></h1><br>`);
let user_tableNumber = +prompt("Enter a number to show its multipliction of table"); 
let user_tableLength = +prompt("Enter length of table");

for(let i = 1; i <= user_tableLength; i++){
    document.write(`<h2><center>${user_tableNumber} x ${i} = ${user_tableNumber * i}</center><h2><br>`);
}
document.write(`<hr>`)

//         Task 05

let fruits = ["apple", "banana", "mango", "orange",
    "strawberry"];
    document.write(`<h1><center><u>Task 05</u></center></h1><br>`);
    
    for(index in fruits){
        document.write(`<h2><center>${fruits[index]}</center></h2>`);


    }
    for(index in fruits){
        document.write(`<h2><center>Element at index is ${index} : ${fruits[index]}</center></h2>`);

    }

document.write(`<hr>`)

//         Task 06

document.write(`<h1><center><u>Task 06</u></center></h1><br>`);

let counting = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
document.write(`<h2><center>Counting : ${counting}</center></h2>`);
document.write(`<h2><center>Reverse Counting : ${counting.reverse()}</center></h2>`);

let evenSeries = [];
for (let i = 0; i <= 20; i += 2) {
  evenSeries.push(i);
}
document.write(`<h2><center>Even : ${evenSeries}</center></h2>`);

let oddNumbers = [];
for (let j = 1; j <= 19; j++) {
  if (j % 2!== 0) {
    oddNumbers.push(j);
  }
}
document.write(`<h2><center>Odd : ${oddNumbers}</center></h2>`);

let series = [];
for (let i = 2; i <= 20; i += 2) {
  series.push(i + "k");
}
document.write(`<h2><center>Series : ${series}</center></h2><hr>`);

//         Task 07
document.write(`<h1><center><u>Task 07</u></center></h1><br>`);

let A = ["cake", "apple pie", "cookie", "chips", "patties"];
let userInput = prompt("Enter the item you want to search for:");
let isFound = A.includes(userInput);

if (isFound) {
  let index = A.indexOf(userInput);
  alert(`${userInput} is available at index ${index} in our bakery.`);
  document.write(`<h2><center>${userInput} is available at index ${index} in our bakery.</center></h2><hr>`);
} else {
  alert(`We are sorry. ${userInput} is not available in our bakery.`);
  document.write(`<h2><center>We are sorry. ${userInput} is not available in our bakery.</center></h2><hr>`);

}


//         Task 08

document.write(`<h1><center><u>Task 08</u></center></h1><br>`);

let a = [24, 53, 78, 91, 12];
let bigInt = Math.max(...a)
document.write(`<h2><center>Array item : ${a}</center></h2>`);
document.write(`<h2><center>The largest number is: ${bigInt}</center></h2><hr>`);

//         Task 09

document.write(`<h1><center><u>Task 09</u></center></h1><br>`);

let b = [24, 53, 78, 91, 12];
let smlInt = Math.min(...a)
document.write(`<h2><center>Array item : ${a}</center></h2>`);
document.write(`<h2><center>The largest number is: ${smlInt}</center></h2><hr>`);

//         Task 10

document.write(`<h1><center><u>Task 10</u></center></h1><br>`);
let arr = [];
for (let i = 1; i <= 100; i++) {
  if (i % 5 === 0) {
    arr.push(i);
  }
}

document.write(`<h2><center>${arr}</center></h2><hr>`);