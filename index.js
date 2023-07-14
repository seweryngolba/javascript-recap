let firstName = "Pedro";
let age = 21;
let student = true;

age = age + 1;

console.log("Hello", firstName);
console.log("You are", age);
console.log("Graduated:", student);

document.getElementById("p1").innerHTML = "Hello " + firstName;
document.getElementById("p2").innerHTML = "You are " + age;
document.getElementById("p3").innerHTML = "Graduated: " + student;

let fruits = 21;

// fruits = fruits / 2;

let extraFruits = fruits % 3;

console.log(extraFruits);

let result = 1 + 2 * (3 + 4);

console.log(result);
