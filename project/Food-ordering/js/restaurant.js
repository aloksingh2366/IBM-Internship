const restaurants = [
  {
    id: 1,
    name: "Pizza Palace",
    image: "assets/images/food/pizza.jpg",
    lat: 28.7041,
    lng: 77.1025,
    address: "123 Slice St, Downtown",
    reviews: [
      "Amazing cheese burst!",
      "Quick delivery, delicious crust.",
      "Perfect spice and fresh ingredients."
    ]
  },
  {
    id: 2,
    name: "Burger Hub",
    image: "assets/images/food/burger.jpg",
    lat: 28.7071,
    lng: 77.1098,
    address: "45 Bun Blvd, Food Court",
    reviews: [
      "Best double patty in town!",
      "The fries were crispy and hot.",
      "Great value for money."
    ]
  },
  {
    id: 3,
    name: "Sushi Spot",
    image: "assets/images/food/sushi.jpg",
    lat: 28.7100,
    lng: 77.1000,
    address: "8 Ocean Ave, Marina",
    reviews: [
      "Fresh and delicious sushi rolls.",
      "Lovely ambiance, friendly staff.",
      "Great choice for a date night."
    ]
  },
  {
    id: 4,
    name: "Biryani Junction",
    image: "assets/images/food/biryani.jpg",
    lat: 28.7132,
    lng: 77.1121,
    address: "22 Royal Lane, Connaught Place",
    reviews: [
      "Authentic dum biryani with rich flavor.",
      "Portion size is generous and filling.",
      "Fast packaging and good hygiene."
    ]
  },
  {
    id: 5,
    name: "Curry Courtyard",
    image: "assets/images/food/curry.jpg",
    lat: 28.6998,
    lng: 77.0942,
    address: "11 Spice Road, Karol Bagh",
    reviews: [
      "Butter chicken was creamy and tasty.",
      "Loved the paneer options.",
      "Great family dining vibe."
    ]
  },
  {
    id: 6,
    name: "Kebab Kingdom",
    image: "assets/images/food/kebab.jpg",
    lat: 28.7160,
    lng: 77.1017,
    address: "7 Grill Street, Civil Lines",
    reviews: [
      "Juicy kebabs with perfect spice level.",
      "Service was very quick.",
      "Excellent value for money."
    ]
  },
  {
    id: 7,
    name: "Roll Republic",
    image: "assets/images/food/roll.jpg",
    lat: 28.7015,
    lng: 77.1168,
    address: "54 Wrap Avenue, Rajouri Garden",
    reviews: [
      "Fresh rolls and generous fillings.",
      "Cheese paneer roll is a must try.",
      "Perfect quick bite option."
    ]
  },
  {
    id: 8,
    name: "Dessert Delight",
    image: "assets/images/food/dessert.jpg",
    lat: 28.7090,
    lng: 77.0899,
    address: "90 Sweet Square, Patel Nagar",
    reviews: [
      "The cheesecake was amazing.",
      "Fresh desserts and nice presentation.",
      "Loved the wide variety."
    ]
  },
  {
    id: 9,
    name: "Green Bowl",
    image: "assets/images/food/curry.jpg",
    lat: 28.6956,
    lng: 77.1064,
    address: "18 Healthy Park, Janakpuri",
    reviews: [
      "Good healthy meal options.",
      "Fresh ingredients and neat packing.",
      "Great veg menu choices."
    ]
  },
  {
    id: 10,
    name: "Tandoor Town",
    image: "assets/images/food/kebab.jpg",
    lat: 28.7186,
    lng: 77.0932,
    address: "31 Charcoal Corner, Model Town",
    reviews: [
      "Tandoori platter was excellent.",
      "Smoky flavor and soft breads.",
      "Reliable quality every time."
    ]
  }
];

const menus = {
  1: [
    { name: "Cheese Pizza", price: 199, image: "assets/images/food/pizza.jpg" },
    { name: "Veg Pizza", price: 149, image: "assets/images/food/pizza.jpg" }
  ],
  2: [
    { name: "Chicken Burger", price: 129, image: "assets/images/food/burger.jpg" },
    { name: "Veg Burger", price: 99, image: "assets/images/food/burger.jpg" }
  ],
  3: [
    { name: "California Roll", price: 299, image: "assets/images/food/sushi.jpg" },
    { name: "Salmon Nigiri", price: 249, image: "assets/images/food/sushi.jpg" }
  ],
  4: [
    { name: "Hyderabadi Chicken Biryani", price: 299, image: "assets/images/food/biryani.jpg" },
    { name: "Veg Dum Biryani", price: 229, image: "assets/images/food/biryani.jpg" },
    { name: "Family Pack Biryani", price: 599, image: "assets/images/food/biryani.jpg" }
  ],
  5: [
    { name: "Butter Chicken", price: 299, image: "assets/images/food/curry.jpg" },
    { name: "Paneer Butter Masala", price: 229, image: "assets/images/food/curry.jpg" },
    { name: "Dal Makhani", price: 189, image: "assets/images/food/curry.jpg" }
  ],
  6: [
    { name: "Chicken Seekh Kebab", price: 199, image: "assets/images/food/kebab.jpg" },
    { name: "Paneer Tikka", price: 189, image: "assets/images/food/kebab.jpg" },
    { name: "Tandoori Chicken", price: 279, image: "assets/images/food/kebab.jpg" }
  ],
  7: [
    { name: "Chicken Roll", price: 129, image: "assets/images/food/roll.jpg" },
    { name: "Paneer Roll", price: 109, image: "assets/images/food/roll.jpg" },
    { name: "Double Chicken Roll", price: 179, image: "assets/images/food/roll.jpg" }
  ],
  8: [
    { name: "Chocolate Cake", price: 149, image: "assets/images/food/dessert.jpg" },
    { name: "Cheesecake", price: 169, image: "assets/images/food/dessert.jpg" },
    { name: "Brownie", price: 119, image: "assets/images/food/dessert.jpg" }
  ],
  9: [
    { name: "Mix Veg Curry", price: 179, image: "assets/images/food/curry.jpg" },
    { name: "Palak Paneer", price: 219, image: "assets/images/food/curry.jpg" },
    { name: "Jeera Rice", price: 99, image: "assets/images/food/rice.jpg" }
  ],
  10: [
    { name: "Malai Chicken Kebab", price: 249, image: "assets/images/food/kebab.jpg" },
    { name: "Fish Tikka", price: 259, image: "assets/images/food/kebab.jpg" },
    { name: "Garlic Naan", price: 59, image: "assets/images/food/bread.jpg" }
  ]
};

const container = document.getElementById("restaurantContainer");
const infoPanel = document.getElementById("restaurantInfo");
let selectedRestaurantId = null;
let map;
const markerById = new Map();

function renderRestaurantCards() {
  if (!container) return;
  container.innerHTML = restaurants.map(r => `
    <div class="restaurant-card ${selectedRestaurantId === r.id ? 'active' : ''}" onclick="selectRestaurant(${r.id})">
      <img src="${r.image}" alt="${r.name}" />
      <div class="restaurant-card-content">
        <h3>${r.name}</h3>
        <p>${r.address}</p>
      </div>
    </div>
  `).join("");
}

function renderRestaurantInfo(restaurant) {
  if (!infoPanel || !restaurant) return;

  const reviewItems = restaurant.reviews.map(r => `<li>"${r}"</li>`).join("");

  infoPanel.innerHTML = `
    <h3>${restaurant.name}</h3>
    <p><strong>Address:</strong> ${restaurant.address}</p>
    <p><strong>Reviews:</strong></p>
    <ul>${reviewItems}</ul>
    <p><strong>Click a card or marker to open menu 📋</strong></p>
    <button class="card-add-to-cart-btn" onclick="openRestaurant(${restaurant.id})">View Menu</button>
  `;
}

function openRestaurant(id) {
  window.location.href = `restaurant-details.html?id=${id}`;
}

function initMap() {
  const mapElement = document.getElementById("map");
  if (!mapElement) return;

  map = L.map(mapElement).setView([28.7050, 77.1040], 14);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; OpenStreetMap contributors"
  }).addTo(map);

  const bounds = [];
  restaurants.forEach(r => {
    const marker = L.marker([r.lat, r.lng]).addTo(map);
    markerById.set(r.id, marker);
    bounds.push([r.lat, r.lng]);

    marker.bindPopup(`
      <strong>${r.name}</strong><br>
      ${r.address}<br>
      ${r.reviews[0] || "No reviews yet"}
      <br><button class="map-select-btn" onclick="selectRestaurant(${r.id})">Select</button>
    `);

    marker.on("click", () => {
      selectRestaurant(r.id, false);
    });
  });

  if (bounds.length > 0) {
    map.fitBounds(bounds, { padding: [30, 30] });
  }
}

function selectRestaurant(id, openMenu = false) {
  const restaurant = restaurants.find(r => r.id === id);
  if (!restaurant) return;

  selectedRestaurantId = id;

  renderRestaurantInfo(restaurant);
  renderRestaurantCards();

  markerById.forEach((marker, markerId) => {
    const element = marker.getElement();
    if (element) {
      element.classList.toggle("marker-active", markerId === id);
    }
  });

  if (openMenu) {
    openRestaurant(id);
  }

  if (map) {
    map.flyTo([restaurant.lat, restaurant.lng], 15, { animate: true, duration: 0.8 });
    const marker = markerById.get(id);
    if (marker) {
      marker.openPopup();
    }
  }
}

// initialize list + map
renderRestaurantCards();
initMap();

if (restaurants.length > 0) {
  selectRestaurant(restaurants[0].id);
}

const params = new URLSearchParams(window.location.search);
const restaurantId = params.get("id");
if (restaurantId) {
  const numericId = Number(restaurantId);
  if (!Number.isNaN(numericId)) {
    selectRestaurant(numericId);
  }
}

// CART & WISHLIST / SHARE functions
function addToCart(name, price) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push({ name, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(name + " added to cart!");
}

function addToWishlist(name, price) {
  let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
  const exists = wishlist.some(item => item.name === name);
  if (!exists) wishlist.push({ name, price });
  localStorage.setItem('wishlist', JSON.stringify(wishlist));
  alert(name + ' added to wishlist!');
}

function shareDish(name) {
  const message = `Check out this dish: ${name}`;
  if (navigator.share) {
    navigator.share({ title: 'Foodie', text: message }).catch(() => {});
  } else if (navigator.clipboard) {
    navigator.clipboard.writeText(message).then(() => { alert('Copied to clipboard!'); });
  } else {
    alert(message);
  }
}
