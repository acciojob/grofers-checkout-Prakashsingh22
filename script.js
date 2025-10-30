// Select all the price cells
const prices = document.querySelectorAll(".price");

let total = 0;

// Add all prices
prices.forEach(priceCell => {
  total += Number(priceCell.textContent);
});

// Create a new row for the total
const totalRow = document.createElement("tr");
totalRow.classList.add("total-row");

// Create a cell to show the total text
const totalTextCell = document.createElement("td");
totalTextCell.setAttribute("colspan", "2");
totalTextCell.textContent = `Total Price: Rs ${total}`;

// Append the total cell to the row
totalRow.appendChild(totalTextCell);

// Append the row to the table
document.querySelector("table").appendChild(totalRow);
