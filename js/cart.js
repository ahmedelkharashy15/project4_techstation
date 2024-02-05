var user_cart = document.querySelector(".user-cart")
var saved_products = localStorage.getItem("cart_products")

var fav_cart = document.querySelector(".fav-products")
var saved_fav = localStorage.getItem("fav_products")

function draw_in_cart(items){
    for(var i=0 ; i<items.length ; i++){
        user_cart.innerHTML += `
        <div class="cart-product-item mt-4 col-lg-4 col-md-6 col-sm-12">
        <div class="cart-product-header">
            <div class="cart-product-img">
                <img src=${items[i].image} alt="">
            </div>
            <div class="cart-product-head">
                <h2 class="cart-product-name">${items[i].name}</h2>
            </div>
        </div>
            <div class="cart-product-body">
                <div class="cart-product-desc">
                    <p class="cart-product-price">Price : ${items[i].price}</p>
                    <p class="cart-product-category">Category : ${items[i].category}</p>
                    <p class="cart-product-brand">Brand : ${items[i].brand}</p>
                </div>
                <div class="cart-product-buttons">
                    <button class="btn btn-danger" onClick="remove(${items[i].id})">Remove</button>
                    <span>${items[i].count} 
                    <a ><i class="fas fa-plus text-success" onClick="counterUp(${items[i].id})"></i></a>
                    <a ><i class="fas fa-minus text-danger" onClick="counterDown(${items[i].id})"></i></a>
                    </span>
                </div>
            </div>
        </div>
        `
    }
}

function counterUp(id){
    var x = products.find((ele) => ele.id === id)
    x.count ++
    localStorage.setItem("cart_products",JSON.stringify(products))
    user_cart.innerHTML = ''
    draw_in_cart(products)
    price(products)
}

function counterDown(id){
    var x = products.find((ele) => ele.id === id)
    x.count --
    localStorage.setItem("cart_products",JSON.stringify(products))
    user_cart.innerHTML = ''

    if(x.count <= 0){
        var index = products.indexOf(x)
        products.splice(index,1)
        localStorage.setItem("cart_products",JSON.stringify(products))
    }
    draw_in_cart(products)
    price(products)
}

function remove(id){
    var item = products.find((ele) => ele.id === id)
    var index = products.indexOf(item)
    products.splice(index,1)
    localStorage.setItem("cart_products",JSON.stringify(products))

    user_cart.innerHTML = ""
    draw_in_cart(products)
    price(products)
}

if(saved_products){
    var products = JSON.parse(saved_products)
    draw_in_cart(products)
    price(products)
}

function price(items){
    var price_span = document.getElementById("price-span")
    var total_price = 0
    items.map((ele) => {
        total_price += ((ele.count)*parseInt(ele.price))
    })
    price_span.innerHTML = total_price
}

function draw_in_fav(items){
    for(var i=0 ; i<items.length ; i++){
        fav_cart.innerHTML += `
        <div class="fav-product-item mt-4 col-lg-4 col-md-6 col-sm-12">
        <div class="fav-product-header">
            <div class="fav-product-img">
                <img src=${items[i].image} alt="">
            </div>
            <div class="fav-product-head">
                <h2 class="fav-product-name">${items[i].name}</h2>
            </div>
        </div>
            <div class="fav-product-body">
                <div class="fav-product-desc">
                    <p class="fav-product-price">Price : ${items[i].price}</p>
                    <p class="fav-product-category">Category : ${items[i].category}</p>
                    <p class="fav-product-brand">Brand : ${items[i].brand}</p>
                </div>
                <div class="fav-product-buttons">
                    <i class="fas fa-heart" style="color:red" onClick="unfav(${items[i].id})"></i>
                </div>
            </div>
        </div>
        `
    }
}

function unfav(id){
    var item = favoruites.find((ele) => ele.id === id)
    var index = favoruites.indexOf(item)
    favoruites.splice(index,1)
    localStorage.setItem("fav_products",JSON.stringify(favoruites))

    fav_cart.innerHTML = ""
    draw_in_fav(favoruites)
}

if(saved_fav){
    var favoruites = JSON.parse(saved_fav)
    draw_in_fav(favoruites)
}