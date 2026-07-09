const totalProducts =
    document.getElementById('totalProducts');

const totalInventory =
    document.getElementById('totalInventory');

const totalSuppliers =
    document.getElementById('totalSuppliers');

async function initializeDashboard() {

    try {

        const [
            products,
            suppliers
        ] = await Promise.all([

            fetchProducts(),
            fetchSuppliers()

        ]);

        totalProducts.textContent =
            products.length;

        totalSuppliers.textContent =
            suppliers.length;

        const inventory =
            products.reduce((total, product) => {

                return total + product.quantity;

            }, 0);

        totalInventory.textContent =
            inventory;

    } catch(error) {

        console.error(
            'Dashboard Error:',
            error
        );
    }
}

initializeDashboard();