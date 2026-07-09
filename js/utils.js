function formatCurrency(value) {

    return new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND'
    }).format(value);
}

function generateId(dataArray) {

    return dataArray.length + 1;
}

function validateEmpty(value) {

    return value.trim() !== '';
}