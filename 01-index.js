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

// checkWinner(true);

// function checkWinner(win) {
//   win ? console.log("You win!") : console.log("You lose!");
// }

const answer = Math.floor(Math.random() * 10 + 1);

let guesses = 0;

document.getElementById("submitButton").onclick = function () {
  let guess = document.getElementById("guessField").value;
  guesses++;

  if (guess == answer) {
    alert(`${answer} is the number. It took you ${guesses} guesses`);
  } else if (guess < answer) {
    alert("To small");
  } else {
    alert("Too large");
  }
};
