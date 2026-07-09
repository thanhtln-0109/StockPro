async function fetchProducts() {

    const response =
        await fetch('./data/products.json');

    return await response.json();
}

async function fetchSuppliers() {

    const response =
        await fetch('./data/suppliers.json');

    return await response.json();
}

async function fetchTransactions() {

    const response =
        await fetch('./data/transactions.json');

    return await response.json();
}

async function fetchUsers() {

    const response =
        await fetch('./data/users.json');

    return await response.json();
}