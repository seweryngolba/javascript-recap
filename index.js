// let item = "crypto";
// let price = 420.69;

// let timer1 = setTimeout(firstMessage, 3000, item, price);
// let timer2 = setTimeout(secondMessage, 6000);
// let timer3 = setTimeout(thirdMessage, 9000);

// function firstMessage() {
//   alert(`Buy this ${item} for $${price}!`);
// }

// function secondMessage() {
//   alert(`This is not scam!`);
// }

// function thirdMessage() {
//   alert(`Do ITT!`);
// }

// document.getElementById("myButton").onclick = function () {
//   clearTimeout(timer1);
//   clearTimeout(timer2);
//   clearTimeout(timer3);
//   alert(`Thanks for buying course!`);
// };

let count = 0;
let max = window.prompt("Count up to what number ?");
max = Number(max);

const myTimer = setInterval(countUp, 1000);

function countUp() {
  count++;
  console.log(count);
  if (count >= max) {
    clearInterval(myTimer);
  }
}
