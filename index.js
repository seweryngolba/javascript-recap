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

// let count = 0;
// let max = window.prompt("Count up to what number ?");
// max = Number(max);

// const myTimer = setInterval(countUp, 1000);

// function countUp() {
//   count++;
//   console.log(count);
//   if (count >= max) {
//     clearInterval(myTimer);
//   }
// }

// let date = new Date(2023, 0, 2, 3, 4, 5);
// let date = new Date("January 1, 2023 00:00:00");

// let year = date.getFullYear();
// let dayOfMonth = date.getDate();
// let dayOfWeek = date.getDay();
// let month = date.getMonth();
// let hour = date.getHours();

// date.setFullYear(2024);
// date.setMonth(11);

// date = date.toLocaleString();
// let date = new Date();
// document.getElementById("myLabel").innerHTML = formatTime(date);

// function formatDate(date) {
//   let year = date.getFullYear();
//   let month = date.getMonth() + 1;
//   let day = date.getDate();

//   return `${month}/${day}/${year}`;
// }

// function formatTime(date) {
//   let hours = date.getHours();
//   let minutes = date.getMinutes();
//   let seconds = date.getSeconds();
//   let amOrPm = hours >= 12 ? "pm" : "am";

//   hours = hours % 12 || 12;

//   return `${hours}:${minutes}:${seconds} ${amOrPm}`;
// }

// console.time("response time");

// //alert("Click ok button");
// setTimeout(() => console.log("Hello"), 3000);

// console.timeEnd("response time");

const wait = (time) =>
  new Promise((resolve) => {
    setTimeout(resolve, time);
  });

wait(3000).then(() => console.log("thanks"));
