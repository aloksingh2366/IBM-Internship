let cart = JSON.parse(localStorage.getItem("cart")) || [];
let selectedItems = new Set();
let discountAmount = 0;
const deliveryFee = 40;

const container = document.getElementById("cartContainer");
const subtotalEl = document.getElementById("subtotal");
const deliveryEl = document.getElementById("deliveryFee");
const discountEl = document.getElementById("discountAmount");
const totalEl = document.getElementById("totalPrice");
const couponMessage = document.getElementById("couponMessage");

function renderCart() {
  if (cart.length === 0) {
    container.innerHTML = "<p>Your cart is empty</p>";
    subtotalEl.innerText = 0;
    deliveryEl.innerText = deliveryFee;
    discountEl.innerText = 0;
    totalEl.innerText = 0;
    return;
  }

  let subtotal = 0;
  let selectedSubtotal = 0;

  container.innerHTML = cart.map((item, index) => {
    const quantity = item.quantity || 1;
    const itemTotal = item.price * quantity;
    subtotal += itemTotal;
    
    const isSelected = selectedItems.has(index);
    if (isSelected) {
      selectedSubtotal += itemTotal;
    }

    return `
      <div class="cart-item">
        <input type="checkbox" name="orderItem" value="${index}" onchange="updateSelectedItem(${index}, this.checked); renderCart()" class="item-checkbox" ${isSelected ? 'checked' : ''}>
        <div class="item-details">
          <div>
            <h4>${item.name}</h4>
            <p class="item-category">${item.category ? '📍 ' + item.category : '🍽️ Dish'}</p>
            <p class="item-price">₹${item.price} each</p>
          </div>
        </div>
        
        <div class="quantity-controls">
          <button onclick="decreaseQuantity(${index})">−</button>
          <input type="number" value="${quantity}" readonly class="qty-input">
          <button onclick="increaseQuantity(${index})">+</button>
        </div>

        <div class="item-total">
          <p class="total-price">₹${itemTotal}</p>
          <button onclick="removeItem(${index})" class="remove-btn">Remove</button>
        </div>
      </div>
    `;
  }).join("");

  const deliveryForSelected = selectedItems.size > 0 ? deliveryFee : 0;
  const discountForSelected = selectedItems.size > 0 ? discountAmount : 0;
  
  subtotalEl.innerText = selectedSubtotal;
  deliveryEl.innerText = deliveryForSelected;
  discountEl.innerText = discountForSelected;
  totalEl.innerText = Math.max(0, selectedSubtotal + deliveryForSelected - discountForSelected);
}


function removeItem(index) {
  cart.splice(index, 1);
  selectedItems.delete(index);
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

function increaseQuantity(index) {
  if (cart[index]) {
    cart[index].quantity = (cart[index].quantity || 1) + 1;
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
  }
}

function decreaseQuantity(index) {
  if (cart[index] && cart[index].quantity > 1) {
    cart[index].quantity -= 1;
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
  }
}

function updateSelectedItem(index, isChecked) {
  if (isChecked) {
    selectedItems.add(index);
  } else {
    selectedItems.delete(index);
  }
}

function applyCoupon() {
  const code = document.getElementById('couponCode').value.trim().toUpperCase();
  const selectedSubtotal = parseInt(subtotalEl.innerText, 10) || 0;

  if (!code) {
    couponMessage.innerText = 'Please enter a coupon code.';
    return;
  }

  if (code === 'FOOD10') {
    discountAmount = Math.floor(selectedSubtotal * 0.10);
    couponMessage.innerText = '10% off applied!';
  } else if (code === 'FLAT50') {
    discountAmount = 50;
    couponMessage.innerText = '₹50 off applied!';
  } else {
    discountAmount = 0;
    couponMessage.innerText = 'Invalid coupon code.';
  }

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