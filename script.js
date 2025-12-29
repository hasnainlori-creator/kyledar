// === CART PANEL OPEN/CLOSE ===
function openCart() {
  updateCart();
  document.getElementById("cartPanel").style.right = "0";
}

function closeCart() {
  document.getElementById("cartPanel").style.right = "-420px";
}
// CART SYSTEM
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(productName, size, price, img) {
  cart.push({ productName, size, price, img });
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCart();
  alert("Added to cart!");
}

// OPEN POPUP
function openPopup(name, img) {
  document.getElementById("popup").style.display = "flex";
  document.getElementById("popup-title").innerText = name;
  document.getElementById("popup-img").src = img;
  document.getElementById("popup-price").innerText = "₹69";
  document.getElementById("selectedSize").value = "A4";
  document.getElementById("buyBtn").onclick = () => {
    let size = document.getElementById("selectedSize").value;
    let price = {
      A4: 69,
      A3: 109,
      A2: 249,
      Canvas: 499
    }[size];
    addToCart(name, size, price, img);
    closePopup();
  };
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}

// CHECKOUT
function goToCheckout() {
  window.location.href = "checkout.html";
}
function updateCart(){
    let cartItemsDiv = document.getElementById("cartItems");
    let totalSpan = document.getElementById("cartTotal");

    cartItemsDiv.innerHTML = "";
    let total = 0;

    cart.forEach((item, index) => {
        total += item.price;
        cartItemsDiv.innerHTML += `
            <p>${item.productName} – ${item.size} – ₹${item.price}</p>
        `;
    });

    totalSpan.innerText = total;
}
