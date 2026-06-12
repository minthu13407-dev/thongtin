/*Viết mã Javascript*/
function createItemV2(obj) {
    const list= document.getElementById("product-list");
    list.innerHTML +=`
        <div class="col">
            <div class="card product-item h-100"> <!--1 sản phẩm-->
                <div class="product-image">
                    <img class="card-img-top" src="${obj.image}" alt="${obj.name}">
                </div>
                <div class="card-body product-info text-center">
                    <h4 class="card-title text-danger">${obj.name}</h4>
                    <h5 class="card-text text-primary">${obj.price}</h5>
                    <p style="text-align:justify; line-height:1.5" class="card-text">${obj.description}</p>
                    <a href="${obj.linkProduct}" class="btn btn-info">Xem chi tiết</a>
                </div>
            </div>
        </div>
    `;
}

function loadAllProducts(array) {
    let i = 0;
    while(i < array.length) {
        createItemV2(array[i]);
        i++;
    }
}