// let fruits = ["banana", "apple", "orange", "mango"];

// fruits = fruits.sort().reverse();

// for (let fruit of fruits) {
//   console.log(fruit);
// }

// let fruits = ["apples", "oranges", "bananas"];
// let vegetables = ["carrots", "onions", "potatoes"];
// let meats = ["eggs", "chicken", "fish"];

// let groceryList = [fruits, vegetables, meats];

// groceryList[2][2] = "steak";

// for (let list of groceryList) {
//   for (let food of list) {
//     console.log(food);
//   }
// }

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// let maximum = Math.max(...numbers);
// console.log(maximum);

let class1 = ["jon", "patrick", "sandy"];
let class2 = ["spiderman", "batman", "magneto"];

class1.push(...class2);

console.log(...class1);
