// Create a "Get Total Price" button dynamically
const getSumBtn = document.createElement("button");
getSumBtn.textContent = "Get Total Price";
document.body.appendChild(getSumBtn);

const getSum = () => {
  // Select all elements having class "price"
  const prices = document.querySelectorAll(".price");

  // Calculate total
  let total = 0;
  prices.forEach(price => {
    total += parseFloat(price.textContent);
  });

  // Create a new table row for total
  const table = document.querySelector("table");
  const newRow = document.createElement("tr");
  const totalCell = document.createElement("td");

  // Make total cell span across both columns
  totalCell.colSpan = 2;
  totalCell.textContent = `Total Price: Rs ${total}`;
  totalCell.style.fontWeight = "bold";
  totalCell.style.backgroundColor = "#f4f4f4";

  // Append cell and row to table
  newRow.appendChild(totalCell);
  table.appendChild(newRow);

  // Disable button after showing total
  getSumBtn.disabled = true;
};

// Add event listener to button
getSumBtn.addEventListener("click", getSum);
