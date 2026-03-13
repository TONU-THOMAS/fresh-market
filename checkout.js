let cart = JSON.parse(localStorage.getItem("cart")) || [];

let container = document.getElementById("order-items");
let total = 0;

cart.forEach(item => {

let div = document.createElement("div");

div.innerHTML =
"<p>" + item.name + " x " + item.qty + " = ₹" + (item.price * item.qty) + "</p>";

container.appendChild(div);

total += item.price * item.qty;

});

document.getElementById("order-total").innerText = total;


function placeOrder(){

let name = document.getElementById("name").value;
let phone = document.getElementById("phone").value;
let address = document.getElementById("address").value;

if(name=="" || phone=="" || address==""){

alert("Please fill all details");

return;

}

alert("Order placed successfully 🎉");

localStorage.removeItem("cart");

window.location.href="index.html";

}