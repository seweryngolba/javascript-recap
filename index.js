// let grade = 55;

// switch (true) {
//   case grade >= 90:
//     console.log("You did great!");
//     break;
//   case grade >= 80:
//     console.log("You did good!");
//     break;
//   case grade >= 70:
//     console.log("You did okay!");
//     break;
//   case grade >= 60:
//     console.log("You passed.... barely");
//     break;
//   case grade < 60:
//     console.log("You failed!");
//     break;
//   default:
//     console.log(grade, "is not a letter grade");
// }

// let temp = 15;
// let sunny = true;

// if (temp > 0 && temp < 30 && sunny) {
//   console.log("The weather is good ");
// } else {
//   console.log("The weather is bad");
// }

// let userName;

// do {
//   userName = window.prompt("Enter your name");
// } while (userName == "");

// console.log("Hello", userName);

// for (let i = 10; i > 0; i--) {
//   console.log(i);
// }

// console.log("Happy New Year!");

// for (let i = 1; i <= 20; i++) {
//   if (i == 13) {
//     continue;
//   }
//   console.log(i);
// }

let symbol = window.prompt("enter symbol");
let rows = window.prompt("number of rows");
let columns = window.prompt("enter number of columns");

for (let i = 1; i <= rows; i++) {
  for (let j = 1; j <= columns; j++) {
    document.getElementById("myRectangle").innerHTML += symbol;
  }
  document.getElementById("myRectangle").innerHTML += "<br>";
}
