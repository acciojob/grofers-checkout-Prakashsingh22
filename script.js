function calculateTotal() {
      // Remove any existing total row before recalculating
      const existingTotal = document.querySelector('.total-row');
      if (existingTotal) existingTotal.remove();

      // Select all price cells
      const prices = document.querySelectorAll('.prices');
      let total = 0;

      // Add up all prices
      prices.forEach(priceCell => {
        const value = parseFloat(priceCell.textContent) || 0;
        total += value;
      });

      // Create new row and cell for total
      const table = document.getElementById('groceryTable');
      const totalRow = document.createElement('tr');
      totalRow.classList.add('total-row');

      const totalCell = document.createElement('td');
      totalCell.colSpan = 2;
      totalCell.textContent = `Total Price: ₹${total}`;

      totalRow.appendChild(totalCell);
      table.appendChild(totalRow);
    }

    // Run once on load
    calculateTotal();

    // Recalculate whenever a price cell changes
    document.querySelectorAll('.prices').forEach(cell => {
      cell.addEventListener('input', calculateTotal);
    });