var user_fname = document.getElementById("user-fname")
var user_lname = document.getElementById("user-lname")
var user_email = document.getElementById("user-email")
var user_password = document.getElementById("user-password")
var submit_btn = document.getElementById("submit-form")

submit_btn.addEventListener("click" , submit)

function submit(e){
    e.preventDefault()
    if(user_fname.value === "" || user_lname.value === "" || user_email.value === "" || user_password.value === ""){
        alert("Please, fill in your information")
    }else{
        localStorage.setItem("user_fname" , user_fname.value)
        localStorage.setItem("user_lname" , user_lname.value)
        localStorage.setItem("user_email" , user_email.value)
        localStorage.setItem("user_password" , user_password.value)

        setTimeout ( () => {
            window.location = "login.html"
        } , 1000)
    }
}