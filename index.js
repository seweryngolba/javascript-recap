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

let userName = "";

while (userName == "" || userName == null) {
  userName = window.prompt("Enter your name");
}

console.log("Hello", userName);
