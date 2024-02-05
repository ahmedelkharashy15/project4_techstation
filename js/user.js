var user = document.querySelector(".user")
var register_links = document.querySelector(".register-links")
var user_info = document.querySelector(".user-info")

if(localStorage.getItem("user_fname")){
    register_links.style.display = "none"
    user_info.style.display = "flex"
    user.innerHTML = localStorage.getItem("user_fname")
}

var logout_link = document.querySelector(".logout-link")

logout_link.addEventListener("click" , logout)

function logout(e){
    e.preventDefault()
    localStorage.clear()
    setTimeout ( () => {
        window.location = "login.html"
    } , 1000)
}