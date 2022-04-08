const a = parseInt(document.querySelector("#number_a").value);
const b = parseInt(document.querySelector("#number_b").value);
const c = parseInt(document.querySelector("#number_c").value);
const output = document.querySelector(".output");
function calculate() {
  console.log(a);
  console.log(b);
  console.log(c);
  const equationPart = (a + b + c) / 2;
  const area = Math.sqrt(
    equationPart *
      ((equationPart - a) * (equationPart - b) * (equationPart - c))
  );
  console.log(area);

  output.innerText = area;
}
