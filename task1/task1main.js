/* Write a JavaScript program to display 
the current day and time in the following format.
Sample Output : Today is : Tuesday.
Current time is : 10 PM : 30 : 38 */

const bodyEl = document.querySelector("body");
let todayParagraph = document.createElement("p");
let timeParagraph = document.createElement("p");
document.body.appendChild(todayParagraph);
document.body.appendChild(timeParagraph);
function valuesUpdate() {
  let date = new Date();
  todayParagraph.innerHTML = `Today is: ${date.toLocaleDateString("en", {
    weekday: "long",
  })}`;
  timeParagraph.innerHTML = `Current time is: ${date.getHours()} : ${
    date.getMinutes() < 10 ? "0" : ""
  }${date.getMinutes()} : ${
    date.getSeconds() < 10 ? "0" : ""
  }${date.getSeconds()}`;
}
setInterval(valuesUpdate, 100);
