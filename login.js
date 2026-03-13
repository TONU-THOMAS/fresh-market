function login(){

let email = document.getElementById("email").value;
let password = document.getElementById("password").value;

let savedUser = JSON.parse(localStorage.getItem("user"));

if(email === savedUser.email && password === savedUser.password){

alert("Login successful");

window.location.href="index.html";

}else{

alert("Invalid login");

}

}