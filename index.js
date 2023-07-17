// let students = ["jon", "pedro", "james"];
// students.forEach(capitalize);
// students.forEach(print);

// function capitalize(element, index, array) {
//   array[index] = element[0].toUpperCase() + element.substring(1);
// }

// function print(element) {
//   console.log(element);
// }

// let numbers = [1, 2, 3, 4, 5];
// let squares = numbers.map(square);
// let cubes = numbers.map(cube);

// cubes.forEach(print);

// function square(element) {
//   return Math.pow(element, 2);
// }

// function cube(element) {
//   return Math.pow(element, 3);
// }

// function print(element) {
//   console.log(element);
// }

// let ages = [18, 16, 21, 17, 19, 90];

// let adults = ages.filter(checkAge);

// adults.forEach(print);

// function checkAge(element) {
//   return element >= 18;
// }

// function print(element) {
//   console.log(element);
// }

// let prices = [5, 10, 15, 20, 25, 2];

// let total = prices.reduce(checkOut);

// console.log(`Total is $${total}`);

// function checkOut(total, element) {
//   return total + element;
// }

// let grades = [100, 50, 90, 60, 80, 70];

// grades = grades.sort(ascendingSort);

// grades.forEach(print);

// function descendingSort(x, y) {
//   return y - x;
// }

// function ascendingSort(x, y) {
//   return x - y;
// }

// function print(element) {
//   console.log(element);
// }

// sayHello();

// function sayHello() {
//   console.log("Hello!");
// }

// let count = 0;

// function increaseCount() {
//   count++;
//   document.getElementById("myLabel").innerHTML = count;
// }

// function decreaseCount() {
//   count--;
//   document.getElementById("myLabel").innerHTML = count;
// }

let count = 0;

document.getElementById("increaseButton").onclick = function () {
  count++;
  document.getElementById("myLabel").innerHTML = count;
};
document.getElementById("decreaseButton").onclick = function () {
  count--;
  document.getElementById("myLabel").innerHTML = count;
};
