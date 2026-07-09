const supplierTableBody =
    document.getElementById('supplierTableBody');

async function initializeSuppliers() {

    try {

        const suppliers =
            await fetchSuppliers();

        renderSuppliers(suppliers);

    } catch(error) {

        console.error(
            'Suppliers Error:',
            error
        );
    }
}

function renderSuppliers(suppliers) {

    supplierTableBody.innerHTML = '';

    suppliers.forEach(supplier => {

        const row =
            document.createElement('tr');

        row.innerHTML = `
            <td>#${supplier.id}</td>

            <td>${supplier.name}</td>

            <td>${supplier.contact}</td>
        `;

        supplierTableBody.appendChild(row);
    });
}

initializeSuppliers();