function signup(){

let name = document.getElementById("name").value;
let email = document.getElementById("email").value;
let password = document.getElementById("password").value;

let user = {
name:name,
email:email,
password:password
};

localStorage.setItem("user", JSON.stringify(user));

alert("Account created successfully");

window.location.href="login.html";

}