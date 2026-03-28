const ordersContainer = document.getElementById("ordersContainer");
const totalOrdersEl = document.getElementById("totalOrders");
const totalOrderItemsEl = document.getElementById("totalOrderItems");
const totalOrderSpendEl = document.getElementById("totalOrderSpend");

const orders = JSON.parse(localStorage.getItem("orders")) || [];

function normalizeOrder(rawOrder, originalIndex) {
  const legacyItems = Array.isArray(rawOrder) ? rawOrder : rawOrder?.items;
  const items = Array.isArray(legacyItems) ? legacyItems : [];

  const totals = items.reduce((acc, item) => {
    const qty = Number(item.quantity) || 1;
    const price = Number(item.price) || 0;
    acc.items += qty;
    acc.total += price * qty;
    return acc;
  }, { items: 0, total: 0 });

  return {
    id: originalIndex + 1,
    index: originalIndex,
    items,
    itemCount: totals.items,
    total: Number(rawOrder?.total) || totals.total,
    payment: rawOrder?.payment || "COD",
    address: rawOrder?.address || "Address not provided",
    date: rawOrder?.date || null
  };
}

const normalizedOrders = orders
  .map((order, index) => normalizeOrder(order, index))
  .reverse();

function renderStats() {
  const aggregate = normalizedOrders.reduce((acc, order) => {
    acc.orders += 1;
    acc.items += order.itemCount;
    acc.spend += order.total;
    return acc;
  }, { orders: 0, items: 0, spend: 0 });

  totalOrdersEl.textContent = aggregate.orders;
  totalOrderItemsEl.textContent = aggregate.items;
  totalOrderSpendEl.textContent = `₹${aggregate.spend}`;
}

function renderOrders() {
  if (!normalizedOrders.length) {
    ordersContainer.innerHTML = `
      <div class="orders-empty">
        <h3>No orders yet</h3>
        <p>Your placed orders will appear here. Start exploring dishes and place your first order.</p>
        <a href="restaurants.html" class="orders-empty-btn">Browse Restaurants</a>
      </div>
    `;
    return;
  }

  ordersContainer.innerHTML = normalizedOrders.map((order) => {
    const orderDate = order.date
      ? new Date(order.date).toLocaleString()
      : "Recently placed";

    const itemsMarkup = order.items.map((item) => {
      const qty = Number(item.quantity) || 1;
      const price = Number(item.price) || 0;
      return `
        <div class="order-item-row">
          <p>${item.name}</p>
          <span>Qty ${qty}</span>
          <strong>₹${price * qty}</strong>
        </div>
      `;
    }).join("");

    return `
      <article class="order-card">
        <div class="order-card-head">
          <div>
            <h3>Order #${order.id}</h3>
            <p>${orderDate}</p>
          </div>
          <span class="order-status">Delivered</span>
        </div>

        <div class="order-items-block">
          ${itemsMarkup}
        </div>

        <div class="order-meta">
          <p><strong>Items:</strong> ${order.itemCount}</p>
          <p><strong>Payment:</strong> ${order.payment.toUpperCase()}</p>
          <p><strong>Total:</strong> ₹${order.total}</p>
        </div>

        <p class="order-address"><strong>Address:</strong> ${order.address}</p>

        <div class="order-actions">
          <button type="button" class="order-reorder-btn" data-reorder="${order.index}">Reorder</button>
          <button type="button" class="order-remove-btn" data-remove="${order.index}">Remove</button>
        </div>
      </article>
    `;
  }).join("");
}

function reorder(orderIndex) {
  const selectedOrder = orders[orderIndex];
  const items = Array.isArray(selectedOrder) ? selectedOrder : selectedOrder?.items;

  if (!Array.isArray(items) || !items.length) {
    alert("Unable to reorder this entry.");
    return;
  }

  localStorage.setItem("cart", JSON.stringify(items));
  alert("Items added to cart!");
  window.location.href = "cart.html";
}

function removeOrder(orderIndex) {
  const updatedOrders = orders.filter((_, index) => index !== orderIndex);
  localStorage.setItem("orders", JSON.stringify(updatedOrders));
  window.location.reload();
}

ordersContainer.addEventListener("click", (event) => {
  const reorderBtn = event.target.closest("[data-reorder]");
  if (reorderBtn) {
    reorder(Number(reorderBtn.dataset.reorder));
    return;
  }

  const removeBtn = event.target.closest("[data-remove]");
  if (removeBtn) {
    removeOrder(Number(removeBtn.dataset.remove));
  }
});

renderStats();
renderOrders();