class Product{
    constructor(title, minPrice, maxPrice, type){
        this.title = title;
        this.minPrice = minPrice;
        this.maxPrice = maxPrice;
        this.type = type;
    }
}

class PageProduct{
    constructor(pageNumber, pageSize, product){
        this.page = pageNumber;
        this.sizePage = pageSize;
        this.title = product.title;
        this.minPrice = product.minPrice;
        this.maxPrice = product.maxPrice;
        this.type = product.type;
    }
}

function getPageProduct(pageProduct){
    console.log(pageProduct)
    $.ajax({
        type: "GET",
        url:`${apiConf.host}advertisement/page`,
        data: pageProduct,
        contentType: "application/json",
        dataType:"json",
        success: (response) =>{
            console.log(response)
            $("#gallery-div").html("");
            if(response.items.length > 0){
                response.items.forEach(item =>{
                    $("#gallery-div").append(getCard(item))
                })
            }
            else{
                $("#gallery-div").append("<h3>No se encontraron resultados</h3>")
            }
        }
      });
}

function getCard(item){
    return `<div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
        <img src="data:image/jpeg;base64,${item.image}" class="w-100 shadow-1-strong rounded mb-4" alt="" />
            <li style="list-style-type:none;">${item.title}</li>
            <li style="list-style-type:none;">${item.type}</li>
            <li style="list-style-type:none;">${item.price}</li>
        </div>`
}