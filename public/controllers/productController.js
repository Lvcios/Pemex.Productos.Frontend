
let modalFormSendeMessageAdmin = $("#modal-form-send-message-admin")

let formSearchProducts = $("#form-search-product")

formSearchProducts.submit((event) =>{
    event.preventDefault()
    let page = getPage();
    getPageProduct(page);
})

$("#btn-send-message-admin").click((event) => {
    modalFormSendeMessageAdmin.modal("show");
})

function getProductFromForm(){
    let form = $("#form-search-product");
    let title = form.find("input[name='title']").val()
    let minPrice = form.find("input[name='minPrice']").val() === "" ? 0 :form.find("input[name='minPrice']").val();
    let maxPrice = form.find("input[name='maxPrice']").val() === "" ? 0 :form.find("input[name='maxPrice']").val();
    let type = form.find("select[name='type']").children("option:selected").val()

    return new Product(title, minPrice, maxPrice, type);
}

function getPage(){
    let product = getProductFromForm();
    return new PageProduct(pageNumber = 1, pageSize = 3, product);
}

