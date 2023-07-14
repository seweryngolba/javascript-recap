// document.getElementById("myButton").onclick = function () {
//   username = document.getElementById("myText").value;
//   console.log(username);
//   document.getElementById("myLabel").innerHTML = "Hello " + username;
// };

// let age = window.prompt("How old are you ?");
// age = Number(age);
// age += 1;

// console.log("Happy birthday! You are", age, "years old");

// let x;
// let y;
// let z;

// x = Number("3.14");
// y = String(3.14);
// z = Boolean("pizza");

// console.log(x, typeof x);
// console.log(y, typeof y);
// console.log(z, typeof z);

// const pi = 3.14159;
// let radius;
// let circumferenece;

// radius = window.prompt("Enter rhe radius of circle");
// radius = Number(radius);

// circumferenece = 2 * pi * radius;

// console.log("The circumference is:", circumferenece);

// let x;
// let y = 5;
// let z = 9;

//x = Math.round(x);

// x = Math.pow(x, 2);

// let a;
// let b;
// let c;

// a = window.prompt("enter side A");
// a = Number(a);

// b = window.prompt("enter side B");
// b = Number(b);

// c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

// console.log("Side C:", c);

// document.getElementById("submitButton").onclick = function () {
//   a = document.getElementById("aTextBox").value;
//   a = Number(a);

//   b = document.getElementById("bTextBox").value;
//   b = Number(b);

//   c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

//   document.getElementById("cLabel").innerHTML = "Side C: " + c;
// };

let count = 0;

document.getElementById("decreaseBtn").onclick = function () {
  count -= 1;
  document.getElementById("countLabel").innerHTML = count;
};

document.getElementById("resetBtn").onclick = function () {
  count = 0;
  document.getElementById("countLabel").innerHTML = count;
};

document.getElementById("increaseBtn").onclick = function () {
  count += 1;
  document.getElementById("countLabel").innerHTML = count;
};
