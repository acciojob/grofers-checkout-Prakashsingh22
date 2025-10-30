// Select button and table
const button = document.getElementById("calcBtn");
const table = document.getElementById("groceryTable");

// Function to calculate total
function getTotalPrice() {
  // Get all prices
  const prices = document.querySelectorAll(".price");
  let total = 0;

  // Add all prices
  prices.forEach((price) => {
    total += parseFloat(price.textContent) || 0;
  });

  // Remove previous total row (if already added)
  const existingTotalRow = document.querySelector(".total-row");
  if (existingTotalRow) existingTotalRow.remove();

  // Create new total row
  const totalRow = document.createElement("tr");
  totalRow.classList.add("total-row");

  const totalCell = document.createElement("td");
  totalCell.setAttribute("colspan", "2");
  totalCell.textContent = `Total Price: ₹${total}`;

  totalRow.appendChild(totalCell);
  table.appendChild(totalRow);
}

// Add event listener to button
button.addEventListener("click", getTotalPrice);
