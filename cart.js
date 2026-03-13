let cart = JSON.parse(localStorage.getItem("cart")) || [];

let container = document.getElementById("cart-items");

function displayCart(){

container.innerHTML = "";
let total = 0;

cart.forEach((item,index)=>{

let div = document.createElement("div");

div.className="cart-item";

div.innerHTML = `
<img src="${item.image}" width="80">

<div>
<h3>${item.name}</h3>
<p>₹${item.price}</p>

<button onclick="decreaseQty(${index})">-</button>
<span>${item.qty}</span>
<button onclick="increaseQty(${index})">+</button>

<br><br>

<button onclick="removeItem(${index})">Remove</button>
</div>
`;

container.appendChild(div);

total += item.price * item.qty;

});

document.getElementById("cart-total").innerText = total;

localStorage.setItem("cart", JSON.stringify(cart));

}

displayCart();

function increaseQty(index){

cart[index].qty++;

displayCart();

}
function decreaseQty(index){

if(cart[index].qty > 1){

cart[index].qty--;

}else{

cart.splice(index,1);

}

displayCart();

}
function removeItem(index){

cart.splice(index,1);

displayCart();

}
function goToCheckout(){
window.location.href = "checkout.html";
}