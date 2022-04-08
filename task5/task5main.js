let text = "w3resource";
let outputEl = document.querySelector(".output");
function changeLetters(outputEl) {
  text = text.slice(1, 10) + text[0];
  console.log(text);
  outputEl.innerHTML = text;
}
setInterval(function () {
  changeLetters(outputEl);
}, 100);
