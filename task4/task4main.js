const a = 5;
const b = 6;
const c = 7;
const equationPart = (a + b + c) / 2;
const area = Math.sqrt(
  equationPart * ((equationPart - a) * (equationPart - b) * (equationPart - c))
);
console.log(area);
