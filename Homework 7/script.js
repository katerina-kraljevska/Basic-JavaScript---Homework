let rows = parseInt(prompt("Number of rows"));
let columns = parseInt(prompt("Number of colums"));
function generateTable() {
  if (
    Number.isNaN(rows) ||
    Number.isNaN(columns) ||
    rows === "" ||
    columns === "" ||
    rows === undefined ||
    columns === undefined ||
    columns <= 0 ||
    rows <= 0
  ) {
    return "Error!Invalid number of rows or colums";
  } else {
    const table = document.getElementById("table");
    table.innerHTML = "";
    for (let i = 1; i <= rows; i++) {
      const row = document.createElement("tr");
      for (let j = 1; j <= columns; j++) {
        const column = document.createElement("td");
        column.textContent = `Row: ${i} Column: ${j}`;
        row.appendChild(column);
      }
      table.appendChild(row);
    }
  }
}

let output = document.getElementById("btn");
output.addEventListener("click", generateTable);
