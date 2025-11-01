function calculateTotal() {
      // Remove existing total row (if already added)
      const existingTotal = document.querySelector('.total-row');
      if (existingTotal) existingTotal.remove();

      // Get all prices
      const prices = document.querySelectorAll('.prices');
      let total = 0;

      // Sum all numeric price values
      prices.forEach(priceCell => {
        const value = parseFloat(priceCell.textContent) || 0;
        total += value;
      });

      // Create a new row for total
      const totalRow = document.createElement('tr');
      totalRow.classList.add('total-row');

      const totalCell = document.createElement('td');
      totalCell.colSpan = 2; // single cell across both columns
      totalCell.textContent = `Total Price: ₹${total}`;

      // Append new row to table
      totalRow.appendChild(totalCell);
      document.getElementById('groceryTable').appendChild(totalRow);
    }

    // Initial total calculation
    calculateTotal();

    // Recalculate whenever a price changes
    document.querySelectorAll('.prices').forEach(cell => {
      cell.addEventListener('input', calculateTotal);
    });