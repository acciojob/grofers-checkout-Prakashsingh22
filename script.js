// Create a button to calculate total
const getSumBtn = document.createElement("button");
getSumBtn.textContent = "Get Total Price";
document.body.appendChild(getSumBtn);

// Function to calculate total price
const getSum = () => {
  // Select all elements with class "price"
  const prices = document.querySelectorAll(".price");
  let total = 0;

  // Add up all prices
  prices.forEach(price => {
    total += parseFloat(price.textContent) || 0;
  });

  // Remove old total row if already exists
  const oldTotalRow = document.querySelector(".total-row");
  if (oldTotalRow) {
    oldTotalRow.remove();
  }

  // Create new row and cell for total
  const newRow = document.createElement("tr");
  newRow.classList.add("total-row");

  const totalCell = document.createElement("td");
  totalCell.colSpan = 2; // Make the total span across both columns
  totalCell.textContent = `Total Price: ₹${total}`;

  newRow.appendChild(totalCell);

  // Append the total row to the table
  const table = document.querySelector("table");
  table.appendChild(newRow);
};

// Add event listener to button
getSumBtn.addEventListener("click", getSum);
