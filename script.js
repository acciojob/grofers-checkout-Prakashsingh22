const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
  // Select all elements with class "price"
  const prices = document.querySelectorAll(".price");

  // Calculate total price
  let total = 0;
  prices.forEach(price => {
    total += parseFloat(price.textContent);
  });

  // Create a new row for total
  const table = document.querySelector("table");
  const newRow = document.createElement("tr");
  const totalCell = document.createElement("td");

  // Make total cell span across both columns
  totalCell.colSpan = 2;
  totalCell.textContent = `Total Price: Rs ${total}`;

  // Append the cell and row to the table
  newRow.appendChild(totalCell);
  table.appendChild(newRow);

  // Disable button after showing total to avoid duplicates
  getSumBtn.disabled = true;
};

// Event listener
getSumBtn.addEventListener("click", getSum);
