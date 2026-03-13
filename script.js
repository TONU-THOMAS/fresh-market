let cartCount = 0;
let totalPrice = 0;
let quantities = {};

function addToCart(product, price){

cartCount++;
totalPrice += price;

document.getElementById("cart-count").innerText = cartCount;
document.getElementById("total-price").innerText = totalPrice;

alert(product + " added to cart");
}

function increase(product, price){
    
let cart = JSON.parse(localStorage.getItem("cart")) || [];

cart.push({
name: product,
price: price,
qty: 1
});

localStorage.setItem("cart", JSON.stringify(cart));

if(!quantities[product]){
quantities[product] = 0;
}

quantities[product]++;
cartCount++;
totalPrice += price;

document.getElementById("qty-"+product).innerText = quantities[product];
document.getElementById("cart-count").innerText = cartCount;
document.getElementById("total-price").innerText = totalPrice;

}

function decrease(product, price){

if(quantities[product] > 0){

quantities[product]--;
cartCount--;
totalPrice -= price;

document.getElementById("qty-"+product).innerText = quantities[product];
document.getElementById("cart-count").innerText = cartCount;
document.getElementById("total-price").innerText = totalPrice;

}

}

let search = document.getElementById("search");

search.addEventListener("keyup", function(){

let filter = search.value.toLowerCase();
let products = document.querySelectorAll(".product");

products.forEach(product => {

let name = product.innerText.toLowerCase();

if(name.includes(filter)){
product.style.display="";
}else{
product.style.display="none";
}

});

});