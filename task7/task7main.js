let output = document.querySelector(".output");

for (let i = 2014; i <= 2050; i++) {
  let date = new Date(i, 0, 1);
  if (date.getDay() === 0)
    output.innerText = `${output.innerText} 1st January is being a Sunday ${i} 
    `;
}
