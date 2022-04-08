const num = Math.ceil(Math.random() * 10);
const gnum = prompt("Guess the number between 1 and 10 inclusive");
if (gnum == num) console.log("Matched your pick was " + gnum);
else
  console.log("Not matched, the number was " + num + " your pick was " + gnum);
