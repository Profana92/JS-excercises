// 9. Write a JavaScript program to calculate days left until next Christmas.
let currentYear = new Date();
const christmas = new Date(currentYear.getFullYear(), 11, 24);
let time = christmas.getTime() - currentYear.getTime();
time = Math.ceil(time / 24 / 60 / 60 / 1000);
console.log("Till christmas there are: " + time + " days left.");
const output = document.querySelector(".output");
output.textContent = `Till christmas there are: ${time} days left.`;
