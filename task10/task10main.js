/* 10. Write a JavaScript program to calculate multiplication and division of 
two numbers (input from user). */
const output = document.querySelector(".output");
const inputOne = document.querySelector("#number_one");
const inputTwo = document.querySelector("#number_two");
let numberOne = 0;
let numberTwo = 1;
inputOne.addEventListener("change", getValues);
inputTwo.addEventListener("change", getValues);
function getValues() {
  numberOne = parseInt(inputOne.value);
  console.log(numberOne);
  numberTwo = parseInt(inputTwo.value);
  console.log(numberTwo);
}
function multiplication() {
  output.innerText = `${numberOne * numberTwo}`;
}
function division() {
  output.innerText = `${numberOne / numberTwo}`;
}
