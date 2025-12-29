let cart = [];

// Add item
function addToCart(name, price){
  cart.push({name, price});
  alert(name + " added to cart");
  loadCart();
}

// Open / Close Cart
function openCart(){
  document.getElementById("cartPanel").style.right = "0px";
  loadCart();
}
function closeCart(){
  document.getElementById("cartPanel").style.right = "-350px";
}

// Load Cart List + Calculate Total
function loadCart(){
  let box = document.getElementById("cartItems");
  if(!box) return;
  box.innerHTML = "";
  let total = 0;

  cart.forEach((item, index)=>{
    total += item.price;
    box.innerHTML += `
      <div class="cartItem">
        ${item.name} – ₹${item.price}
        <button onclick="removeItem(${index})" style="float:right;">✖</button>
      </div>
    `;
  });

  document.getElementById("cartTotal").innerText = "₹" + total;

  // Generate UPI link
  document.getElementById("upiBtn").href =
    `upi://pay?pa=9596864407@fam&pn=ahsaan%20ellahi&am=${total}&cu=INR`;

  // WhatsApp checkout message
  let msg = encodeURIComponent(`ORDER DETAILS:\n${cart.map(i=>i.name).join(", ")}\nTOTAL: ₹${total}`);
  document.getElementById("waBtn").href =
    `https://wa.me/919596864407?text=${msg}`;
}

// Remove one item
function removeItem(index){
  cart.splice(index,1);
  loadCart();
}