const setup = () => {

    const button = document.getElementsByClassName("calculate")[0];

    button.addEventListener("click", function () {
        let total = 0;


        const rows = document.querySelectorAll("table tr:not(:first-child):not(:last-child)");

        rows.forEach(row => {
            const priceText = row.cells[1].textContent.trim(); // e.g., "10.00 Eur"
            const amountInput = row.cells[2].querySelector("input");
            const vatText = row.cells[3].textContent.trim(); // e.g., "6%"
            const subtotalCell = row.cells[4];


            const price = parseFloat(priceText.replace(" Eur", "")); // Remove " Eur" and convert to number
            const amount = parseInt(amountInput.value, 10);
            const vat = parseFloat(vatText.replace("%", "")) / 100; // Convert "6%" → 0.06

            if (!isNaN(price) && !isNaN(amount) && !isNaN(vat)) {
                // Calculate subtotal including VAT
                const subtotal = amount * price * (1 + vat);
                subtotalCell.textContent = subtotal.toFixed(2) + " Eur";
                total += subtotal;
            }
        });

        const totalCell = document.querySelector("table tr:last-child td:last-child");
        totalCell.textContent = total.toFixed(2) + " Eur";
    });
};


window.addEventListener("load", setup);
