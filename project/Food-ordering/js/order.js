const ordersContainer = document.getElementById("ordersContainer");
const orders = JSON.parse(localStorage.getItem("orders")) || [];

if (orders.length === 0) {
  ordersContainer.innerHTML = "<p>No orders yet</p>";
} else {
  ordersContainer.innerHTML = orders.map((order, i) => {
    let total = 0;

    const items = order.map(item => {
      total += item.price;
      return `<p>${item.name} - ₹${item.price}</p>`;
    }).join("");

    return `
      <div class="cart-item">
        <h3>Order #${i + 1}</h3>
        ${items}
        <strong>Total: ₹${total}</strong>
        <br>
        <button onclick='reorder(${JSON.stringify(order)})'>Reorder</button>
      </div>
    `;
  }).join("");
}

function reorder(order) {
  localStorage.setItem("cart", JSON.stringify(order));
  alert("Items added to cart!");
  window.location.href = "cart.html";
}