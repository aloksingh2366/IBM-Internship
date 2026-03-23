const restaurants = [
  {
    id: 1,
    name: "Pizza Palace",
    image: "assets/images/food/pizza.jpg"
  },
  {
    id: 2,
    name: "Burger Hub",
    image: "assets/images/food/burger.jpg"
  }
];

const container = document.getElementById("restaurantContainer");

if (container) {
  container.innerHTML = restaurants.map(r => `
    <div class="restaurant-card" onclick="openRestaurant(${r.id})">
      <img src="${r.image}" />
      <h3>${r.name}</h3>
    </div>
  `).join("");
}

function openRestaurant(id) {
  window.location.href = `restaurant-details.html?id=${id}`;
}
const menus = {
  1: [
    { name: "Cheese Pizza", price: 199, image: "assets/images/food/pizza.jpg" },
    { name: "Veg Pizza", price: 149, image: "assets/images/food/pizza.jpg" }
  ],
  2: [
    { name: "Chicken Burger", price: 129, image: "assets/images/food/burger.jpg" },
    { name: "Veg Burger", price: 99, image: "assets/images/food/burger.jpg" }
  ]
};

// GET ID FROM URL
const params = new URLSearchParams(window.location.search);
const restaurantId = params.get("id");

if (restaurantId) {
  const nameEl = document.getElementById("restaurantName");
  const menuEl = document.getElementById("menuContainer");

  const selectedRestaurant = restaurants.find(r => r.id == restaurantId);

  if (selectedRestaurant) {
    nameEl.innerText = selectedRestaurant.name;

    const menu = menus[restaurantId];

    menuEl.innerHTML = menu.map(item => `
      <div class="menu-card">
        <img src="${item.image}" />
        <h3>${item.name}</h3>
        <p>₹${item.price}</p>
        <button onclick="addToCart('${item.name}', ${item.price})">
          Add to Cart
        </button>
      </div>
    `).join("");
  }
}

// CART FUNCTION (shared)
function addToCart(name, price) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  cart.push({ name, price });

  localStorage.setItem("cart", JSON.stringify(cart));

  alert(name + " added to cart!");
}
