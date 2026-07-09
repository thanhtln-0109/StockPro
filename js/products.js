const tableBody =
    document.getElementById(
        'productsTableBody'
    );

const searchInput =
    document.getElementById(
        'searchInput'
    );

const productModal =
    document.getElementById(
        'productModal'
    );

const openProductModal =
    document.getElementById(
        'openProductModal'
    );

const closeProductModal =
    document.getElementById(
        'closeProductModal'
    );

const productForm =
    document.getElementById(
        'productForm'
    );

let products = [];

async function initializeProducts() {

    try {

        products =
            await fetchProducts();

        renderProducts(products);

    } catch(error) {

        console.error(error);
    }
}

function renderProducts(productList) {

    tableBody.innerHTML = '';

    productList.forEach(product => {

        const row =
            document.createElement('tr');

        row.innerHTML = `
            <td>#${product.id}</td>

            <td>${product.name}</td>

            <td>${product.category}</td>

            <td>$${product.price}</td>

            <td>${product.quantity}</td>

            <td>

                <button
                    class="table-action delete-btn"
                    onclick="deleteProduct(${product.id})"
                >
                    Xóa
                </button>

            </td>
        `;

        tableBody.appendChild(row);
    });
}

searchInput.addEventListener('input', e => {

    const keyword =
        e.target.value.toLowerCase();

    const filtered =
        products.filter(product => {

            return product.name
                .toLowerCase()
                .includes(keyword);
        });

    renderProducts(filtered);
});

openProductModal.addEventListener('click', () => {

    productModal.classList.add('active');
});

closeProductModal.addEventListener('click', () => {

    productModal.classList.remove('active');
});

productForm.addEventListener('submit', e => {

    e.preventDefault();

    const newProduct = {

        id: products.length + 1,

        name:
            document
            .getElementById('productName')
            .value,

        category:
            document
            .getElementById('productCategory')
            .value,

        price:
            Number(
                document
                .getElementById('productPrice')
                .value
            ),

        quantity:
            Number(
                document
                .getElementById('productQuantity')
                .value
            )
    };

    products.push(newProduct);

    renderProducts(products);

    productForm.reset();

    productModal.classList.remove('active');
});

function deleteProduct(productId) {

    products =
        products.filter(product => {

            return product.id !== productId;
        });

    renderProducts(products);
}

initializeProducts();