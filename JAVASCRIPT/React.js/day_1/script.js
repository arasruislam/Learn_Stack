// Catch DOM Eelements
const button = document.getElementById('button');
const price = document.getElementById('price');
const total = document.getElementById('total');

// State or data
const productPrice = 5000;
let totalPrice = 0;

// Set product price initiallly
price.innerText = `৳ ${productPrice}`;
total.innerText = `Total: ৳ ${totalPrice}`;


button.addEventListener('click', () => {
   totalPrice += productPrice;

   // update the ui with the latest data
   total.innerText = `Total: ৳ ${totalPrice}`;
})