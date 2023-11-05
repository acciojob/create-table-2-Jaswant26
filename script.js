function createTable() {
    //Write your code here
   const rowNum = prompt("Input number of rows");
  const colNum = prompt("Input number of columns");

  // Convert the input values to integers
  const numRows = parseInt(rowNum);
  const numCols = parseInt(colNum);

  if (!isNaN(numRows) && !isNaN(numCols)) {
    const table = document.getElementById("myTable");
    table.innerHTML = ""; // Clear any existing content in the table

    // Create the table rows and cells
    for (let i = 0; i < numRows; i++) {
      const row = table.insertRow(i);
      for (let j = 0; j < numCols; j++) {
        const cell = row.insertCell(j);
        cell.textContent = `Row-${i} Column-${j}`;
      }
    }
  } else {
    alert("Please enter valid numbers for rows and columns.");
  }
}
