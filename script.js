// Create a button dynamically
const getSumBtn = document.createElement("button");
getSumBtn.textContent = "Get Total Price";
document.body.appendChild(getSumBtn);

// Function to calculate total
const getSum = () => {
  // Select all price cells
  const prices = document.querySelectorAll(".price");
  let total = 0;

  // Add up all the prices
  prices.forEach((price) => {
    total += parseFloat(price.textContent) || 0;
  });

  // Remove old total row if it exists
  const oldTotal = document.querySelector(".total-row");
  if (oldTotal) oldTotal.remove();

  // Create new row for total
  const totalRow = document.createElement("tr");
  totalRow.classList.add("total-row");

  const totalCell = document.createElement("td");
  totalCell.colSpan = 2;
  totalCell.textContent = `Total Price: ₹${total}`;

  totalRow.appendChild(totalCell);

  // Append the total row to the table
  document.querySelector("table").appendChild(totalRow);
};

// Add click event listener
getSumBtn.addEventListener("click", getSum);
