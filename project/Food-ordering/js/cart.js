let cart = JSON.parse(localStorage.getItem("cart")) || [];

const container = document.getElementById("cartContainer");
const totalEl = document.getElementById("totalPrice");

function renderCart() {
  if (cart.length === 0) {
    container.innerHTML = "<p>Your cart is empty</p>";
    totalEl.innerText = 0;
    return;
  }

  let total = 0;

  container.innerHTML = cart.map((item, index) => {
    total += item.price;

    return `
      <div class="cart-item">
        <div>
          <h4>${item.name}</h4>
          <p>₹${item.price}</p>
        </div>

        <div class="cart-controls">
          <button onclick="removeItem(${index})" class="remove-btn">Remove</button>
        </div>
      </div>
    `;
  }).join("");

  totalEl.innerText = total;
}

function removeItem(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

function goToCheckout() {
  if (cart.length === 0) {
    alert("Cart is empty!");
    return;
  }
  window.location.href = "checkout.html";
}

renderCart();