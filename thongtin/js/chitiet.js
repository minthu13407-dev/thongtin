function getProductId() {
    const params = new URLSearchParams(window.location.search);
    return parseInt(params.get('id'));
}

function findProductById(id) {
    return products.find(p => p.id === id);
}



    document.title = product.name;

    detailDiv.innerHTML = `
        <div class="row">
            <div class="col-md-5 mb-4">
                <img src="${product.image}" class="img-fluid rounded shadow" alt="${product.name}">
            </div>
            <div class="col-md-7">
                <h1 class="text-danger mb-3">${product.name}</h1>
                <h2 class="text-primary mb-4">${product.price}</h2>
                <p class="lead" style="line-height:1.8; text-align:justify">
                    ${product.description}
                </p>

                <div class="d-flex gap-2">
                    <button class="btn btn-success btn-lg" onclick="addToCart(${product.id})">
                        Thêm vào giỏ hàng
                    </button>
                    <a href="sp2.html" class="btn btn-secondary btn-lg">Quay lại</a>
                </div>
            </div>
        </div>
    `;



function initDetailPage() {
    const id = getProductId();
    const product = findProductById(id);
    renderProductDetail(product);
}

window.onload = initDetailPage;