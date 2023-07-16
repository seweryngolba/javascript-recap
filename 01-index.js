// let area;
// let width;
// let height;

// width = window.prompt("enter width");
// height = window.prompt("enter height");

// area = getArea(width, height);
// console.log("The area is:", area);

// function getArea(width, height) {
//   let result = width * height;
//   return result;
// }

checkWinner(true);

function checkWinner(win) {
  win ? console.log("You win!") : console.log("You lose!");
}
