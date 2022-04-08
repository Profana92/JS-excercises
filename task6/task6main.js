const textArea = document.querySelector("#text");
const output = document.querySelector(".output");
function leapyear() {
  let year = textArea.value;
  output.innerText = `${year % 100 === 0 ? year % 400 === 0 : year % 4 === 0}`;
}
