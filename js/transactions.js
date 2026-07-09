const transactionTableBody =
    document.getElementById('transactionTableBody');

async function initializeTransactions() {

    try {

        const transactions =
            await fetchTransactions();

        const products =
            await fetchProducts();

        renderTransactions(
            transactions,
            products
        );

    } catch(error) {

        console.error(
            'Transactions Error:',
            error
        );
    }
}

function renderTransactions(
    transactions,
    products
) {

    transactionTableBody.innerHTML = '';

    transactions.forEach(transaction => {

        const product =
            products.find(p => {

                return p.id === transaction.productId;
            });

        const row =
            document.createElement('tr');

        row.innerHTML = `
            <td>#${transaction.id}</td>

            <td>${product?.name}</td>

            <td>${transaction.type}</td>

            <td>${transaction.quantity}</td>

            <td>${transaction.date}</td>
        `;

        transactionTableBody.appendChild(row);
    });
}

initializeTransactions();