var user_email = document.getElementById("user-email")
var user_password = document.getElementById("user-password")
var submit_btn = document.getElementById("submit-form")
var email = localStorage.getItem("user_email")
var password = localStorage.getItem("user_password")

submit_btn.addEventListener("click" , submit)

function submit(e){
    e.preventDefault()
    if(user_email.value === "" || user_password.value === ""){
        alert("Please, fill in your information")
    }else{
        if(user_email.value.trim() === email && user_password.value.trim() === password){
            setTimeout ( () => {
                window.location = "index.html"
            } , 1000)
        }else{
            alert("Wrong email or password, Please check your information again")
        }
    }
}