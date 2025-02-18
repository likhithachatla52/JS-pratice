document.getElementById('loanForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const balanceInput = document.getElementById('balance').value;
    const rateInput = document.getElementById('rate').value;
    const paymentInput = document.getElementById('payment').value;

    let balance = parseFloat(balanceInput);
    const monthlyRate = parseFloat(rateInput) / 100 / 12;
    const monthlyPayment = parseFloat(paymentInput);

    const tableBody = document.querySelector('#paymentTable tbody');
    tableBody.innerHTML = ''; // Clear existing rows

    for (let month = 1; month <= 12; month++) {
        if (balance <= 0) break;

        const newRow = document.createElement('tr');
        const monthCell = document.createElement('td');
        const balanceCell = document.createElement('td');

        monthCell.textContent = month;
        balanceCell.textContent = `$${balance.toFixed(2)}`;

        newRow.appendChild(monthCell);
        newRow.appendChild(balanceCell);
        tableBody.appendChild(newRow);

        balance = (1 + monthlyRate) * balance - monthlyPayment;
    }
});
