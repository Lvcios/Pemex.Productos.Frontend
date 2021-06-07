const apiConf = {
    host:"https://localhost:44338/api/v1/"
}

let initialProductSearch =  new Product(tile = '', minPrice = 0, maxPrice = 0, type = '');
let initialPageProduct = new PageProduct(pageNumber = 1, pageSize = 3, product = initialProductSearch);

function initialLoad(){
    getPageProduct(initialPageProduct);
}

initialLoad();