// >Expected Outputs: <br />
// mm-dd-yyyy,<br />
// mm/dd/yyyy, <br />
// dd-mm-yyyy,<br />
// dd/mm/yyyy</code
let body = document.querySelector("body");
let firstElement = body.appendChild(document.createElement("p"));
let secondElement = body.appendChild(document.createElement("p"));
let thirdElement = body.appendChild(document.createElement("p"));
let fourthElement = body.appendChild(document.createElement("p"));

let date = new Date();
date = date.toISOString().split("T")[0].split("-");
firstElement.innerHTML = `${date[1]}-${date[2]}-${date[0]}`;
secondElement.innerHTML = `${date[1]}/${date[2]}/${date[0]}`;
thirdElement.innerHTML = `${date[2]}-${date[1]}-${date[0]}`;
fourthElement.innerHTML = `${date[2]}/${date[1]}/${date[0]}`;
