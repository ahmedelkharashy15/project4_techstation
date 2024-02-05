var products = document.querySelector(".products")

var data = [
    {
        id : 1,
        name : "Lightspeed Wireless Gaming Headset",
        price : "750 $",
        category : "Headset",
        brand : "Logitech",
        image : "images/headset1.png",
        count : 1
    },
    {
        id : 2,
        name : "Cloud Stinger 2 Core Wired Gaming Headset",
        price : "500 $",
        category : "Headset",
        brand : "HyperX",
        image : "images/headset2.png",
        count : 1
    },
    {
        id : 3,
        name : "Zeus-X RGB Wired Gaming Headset",
        price : "1000 $",
        category : "Headset",
        brand : "Redragon",
        image : "images/headset3.png",
        count : 1
    },
    {
        id : 4,
        name : "Swappable Mechanical Keyboard",
        price : "1500 $",
        category : "Keyboard",
        brand : "Epomaker",
        image : "images/keyboard1.png",
        count : 1
    },
    {
        id : 5,
        name : "Magnetic Switch RGB Gaming Keyboard",
        price : "2500 $",
        category : "Keyboard",
        brand : "DrunkDeer",
        image : "images/keyboard2.png",
        count : 1
    },
    {
        id : 6,
        name : "Scope RX Optical Gaming Keyboard",
        price : "1000 $",
        category : "Keyboard",
        brand : "Redragon",
        image : "images/keyboard3.png",
        count : 1
    },
    {
        id : 7,
        name : "Lightspeed Wireless Gaming Mouse",
        price : "800 $",
        category : "Mouse",
        brand : "Logitech",
        image : "images/mouse1.png",
        count : 1
    },
    {
        id : 8,
        name : "RGB Wireless Gaming Mouse",
        price : "500 $",
        category : "Mouse",
        brand : "HyperX",
        image : "images/mouse2.png",
        count : 1
    },
    {
        id : 9,
        name : "Woki M994 Wireless Gaming Mouse",
        price : "750 $",
        category : "Mouse",
        brand : "Redragon",
        image : "images/mouse3.png",
        count : 1
    },
    {
        id : 10,
        name : "Harrow Wireless Gamepad",
        price : "250 $",
        category : "Controller",
        brand : "Redragon",
        image : "images/controller1.png",
        count : 1
    },
    {
        id : 11,
        name : "Wireless Controller PlayStation 5",
        price : "1500 $",
        category : "Controller",
        brand : "HyperX",
        image : "images/controller2.png",
        count : 1
    },
    {
        id : 12,
        name : "Ultimate C Bluetooth Controller",
        price : "2500 $",
        category : "Controller",
        brand : "8BitDo",
        image : "images/controller3.png",
        count : 1
    },
    
]

function draw(){
    for(var i=0 ; i<data.length ; i++){
        products.innerHTML += `
    <div class="product-item mt-4 col-lg-4 col-md-6 col-sm-12" style="width: 23rem;">
        <div class="product-img">
            <img src=${data[i].image} alt="">
        </div>
        <div class="product-desc">
            <h2 class="product-name">${data[i].name}</h2>
            <p class="product-price">Price : ${data[i].price}</p>
            <p class="product-category">Category : ${data[i].category}</p>
            <p class="product-brand">Brand : ${data[i].brand}</p>
        </div>
        <div class="product-buttons d-flex justify-content-between">
            <button class="btn add-btn" id="${data[i].id}" onClick="addProduct(${data[i].id})">Add to Cart</button>
            <button class="btn remove-btn btn-danger" id="${data[i].id}0000" onClick="removeProduct(${data[i].id})">Remove from Cart</button>
            <i class="fas fa-heart fav-icon" id="${data[i].id}00000" onClick="favProduct(${data[i].id})"></i>
        </div>
    </div>
        `
    }
}

window.onload = function (){
    draw()
}



var products_box = document.querySelector(".products-box")
var badge = document.querySelector(".cart-b")
var choosen_items = localStorage.getItem("cart_products") ? JSON.parse(localStorage.getItem("cart_products")) : []


function addProduct(id){
    if(localStorage.getItem("user_fname")){
        var item = data.find((ele) => ele.id === id)
        item.count = 1
        products_box.innerHTML += `<p>${item.name} 
        
        <span>${item.count}</span>
        <a><i class="fas fa-plus text-success" onClick="counterUp(${item.id})"></i></a>
        <a><i class="fas fa-minus text-danger" onClick="counterDown(${item.id})"></i></a>
        </p>`
              
        choosen_items = [...choosen_items , item]
        localStorage.setItem("cart_products" , JSON.stringify(choosen_items))
        var cart_length = document.querySelectorAll(".products-box p")
        badge.innerHTML = cart_length.length

        var add_btns = document.querySelectorAll(".products .add-btn")
        var remove_btns = document.querySelectorAll(".products .remove-btn")
        
        add_btns[id-1].style.display = "none"
        remove_btns[id-1].style.display = "block"
        

    }else{
        setTimeout ( () => {
            window.location = "login.html"
        } , 1000)
    }
}      

var cart_icon = document.querySelector(".cart-icon")
var all_products = document.querySelector(".all-products")

cart_icon.addEventListener("click" , openCart)

function openCart (){
    if(products_box.innerHTML != ""){
        if(all_products.style.display == "block"){
            all_products.style.display = "none"
        }else{
            all_products.style.display = "block"
        }
    }
}


var fav_items = localStorage.getItem("fav_products") ? JSON.parse(localStorage.getItem("fav_products")) : []


function favProduct(id){
    if(localStorage.getItem("user_fname")){
        var item = data.find((ele) => ele.id === id)

        fav_items = [...fav_items , item]
        localStorage.setItem("fav_products" , JSON.stringify(fav_items))

        var heart = document.querySelectorAll(".products .fav-icon")
        heart[id-1].style.color = "red"
    }else{
        setTimeout ( () => {
            window.location = "login.html"
        } , 1000)
    }
}

function removeProduct(id){
    var item = choosen_items.find((ele) => ele.id === id)
    
    if(item){
        var index = choosen_items.indexOf(item)
    choosen_items.splice(index,1)

    products_box.innerHTML = ""

    if(choosen_items){
        choosen_items.map((item) => {
        products_box.innerHTML += `<p>${item.name} <span>${item.count}</span>
        <a><i class="fas fa-plus text-success" onClick="counterUp(${item.id})"></i></a>
        <a><i class="fas fa-minus text-danger" onClick="counterDown(${item.id})"></i></a>
        </p>`
        })
        badge.innerHTML = choosen_items.length
    }
    }

    localStorage.setItem("cart_products" , JSON.stringify(choosen_items))

    var add_btns = document.querySelectorAll(".products .add-btn")
    var remove_btns = document.querySelectorAll(".products .remove-btn")
    add_btns[id-1].style.display = "block"
    remove_btns[id-1].style.display = "none"
}

if(choosen_items){
    choosen_items.map((item) => {
        products_box.innerHTML += `<p>${item.name} <span>${item.count}</span>
        <a><i class="fas fa-plus text-success" onClick="counterUp(${item.id})"></i></a>
        <a><i class="fas fa-minus text-danger" onClick="counterDown(${item.id})"></i></a>
        </p>`
    })
    badge.innerHTML = choosen_items.length

    var add_btns = document.querySelectorAll(".products .add-btn")
    var remove_btns = document.querySelectorAll(".products .remove-btn")
}

function counterUp(id){
    var x = choosen_items.find((ele) => ele.id === id)
    x.count ++
    localStorage.setItem("cart_products",JSON.stringify(choosen_items))
    products_box.innerHTML = ''
    choosen_items.map((item) => {
    products_box.innerHTML += `<p>${item.name} <span>${item.count}</span>
    <a><i class="fas fa-plus text-success" onClick="counterUp(${item.id})"></i></a>
    <a><i class="fas fa-minus text-danger" onClick="counterDown(${item.id})"></i></a>
    </p>`
    })
}

function counterDown(id){
    var x = choosen_items.find((ele) => ele.id === id)
    x.count --
    localStorage.setItem("cart_products",JSON.stringify(choosen_items))
    products_box.innerHTML = ''

    const add_btn=document.getElementById(id)
    const remove_btn=document.getElementById(id+"0000")

    if(x.count <= 0){
        var index = choosen_items.indexOf(x)
        choosen_items.splice(index,1)
        localStorage.setItem("cart_products",JSON.stringify(choosen_items))
        badge.innerHTML = choosen_items.length

        add_btn.style.display = "block"
        remove_btn.style.display = "none"
        if(choosen_items != ''){

        }else{
            all_products.style.display = "none"
        }
    }
    choosen_items.map((item) => {
        
            products_box.innerHTML += `<p>${item.name} <span>${item.count}</span>
            <a><i class="fas fa-plus text-success" onClick="counterUp(${item.id})"></i></a>
            <a><i class="fas fa-minus text-danger" onClick="counterDown(${item.id})"></i></a>
            </p>`
        }
    )
}

var select = document.getElementById("search-select")
var search = document.getElementById("search-field")

search.addEventListener("keyup" , searcher)

function searcher(){
    products.innerHTML = ""
    if(search.value){
        if(select.value == "Search by Name"){
            for(var i=0 ; i<data.length ; i++){
                if(data[i].name.toLowerCase().includes(search.value)){
                    products.innerHTML += `
        <div class="product-item mt-4 col-lg-4 col-md-6 col-sm-12" style="width: 23rem;">
        <div class="product-img">
            <img src=${data[i].image} alt="">
        </div>
        <div class="product-desc">
            <h2 class="product-name">${data[i].name}</h2>
            <p class="product-price">Price : ${data[i].price}</p>
            <p class="product-category">Category : ${data[i].category}</p>
            <p class="product-brand">Brand : ${data[i].brand}</p>
        </div>
        <div class="product-buttons d-flex justify-content-between">
            <button class="btn add-btn" id="${data[i].id}" onClick="addProduct(${data[i].id})">Add to Cart</button>
            <button class="btn remove-btn btn-danger" id="${data[i].id}0000" onClick="removeProduct(${data[i].id})">Remove from Cart</button>
            <i class="fas fa-heart fav-icon" id="${data[i].id}00000" onClick="favProduct(${data[i].id})"></i>
        </div>
        </div>
        `
                }
            }
        }else{
            for(var i=0 ; i<data.length ; i++){
                if(data[i].category.toLowerCase().includes(search.value)){
                    products.innerHTML += `
        <div class="product-item mt-4 col-lg-4 col-md-6 col-sm-12" style="width: 23rem;">
        <div class="product-img">
            <img src=${data[i].image} alt="">
        </div>
        <div class="product-desc">
            <h2 class="product-name">${data[i].name}</h2>
            <p class="product-price">Price : ${data[i].price}</p>
            <p class="product-category">Category : ${data[i].category}</p>
            <p class="product-brand">Brand : ${data[i].brand}</p>
        </div>
        <div class="product-buttons d-flex justify-content-between">
            <button class="btn add-btn" id="${data[i].id}" onClick="addProduct(${data[i].id})">Add to Cart</button>
            <button class="btn remove-btn btn-danger" id="${data[i].id}0000" onClick="removeProduct(${data[i].id})">Remove from Cart</button>
            <i class="fas fa-heart fav-icon" id="${data[i].id}00000" onClick="favProduct(${data[i].id})"></i>
        </div>
        </div>
        `
                }
            }
        }
    }else{
        draw()
    }
}