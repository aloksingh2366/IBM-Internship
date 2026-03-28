const fallbackFoods = [
  { name: "Pizza", price: 199, category: "fastfood", image: "assets/images/food/pizza.jpg" },
  { name: "Burger", price: 99, category: "fastfood", image: "assets/images/food/burger.jpg" },
  { name: "Biryani", price: 249, category: "biryani", image: "assets/images/food/biryani.jpg" },
  { name: "Noodles", price: 149, category: "fastfood", image: "assets/images/food/noodles.jpg" }
];

function getFoodCatalog() {
  const storedFoods = JSON.parse(localStorage.getItem("foods")) || [];
  const source = Array.isArray(storedFoods) && storedFoods.length ? storedFoods : fallbackFoods;

  return source
    .filter((food) => food && food.name)
    .map((food) => ({
      name: String(food.name),
      price: Number(food.price) || 0,
      category: food.category || food.type || "popular",
      image: food.image || "assets/images/food/pizza.jpg"
    }));
}

function renderSearchResults(list, query) {
  const container = document.getElementById("searchResults");
  if (!container) return;

  if (!list.length) {
    container.innerHTML = `<p style="grid-column: 1/-1; text-align: center; padding: 24px; color: #55657f;">No results found${query ? ` for "${query}"` : ""}.</p>`;
    return;
  }

  container.innerHTML = list.map((food) => `
    <div class="food-card">
      <img src="${food.image}" alt="${food.name}">
      <h3>${food.name}</h3>
      <p>₹${food.price}</p>
      <div class="tag">${food.category}</div>
      <div class="food-card-actions">
        <button class="card-icon-btn card-share-btn" onclick="shareDish('${food.name}')" title="Share">🔗</button>
        <button class="card-icon-btn card-wishlist-btn" onclick="addToWishlist('${food.name}', ${food.price}, '${food.category}', '${food.image}')" title="Wishlist">♡</button>
        <button class="card-add-to-cart-btn" onclick="addToCart('${food.name}', ${food.price}, '${food.category}', '${food.image}')">Add To Bag</button>
      </div>
    </div>
  `).join("");
}

function searchFood() {
  const searchInput = document.getElementById("searchInput");
  if (!searchInput) return;

  const input = searchInput.value.toLowerCase().trim();
  const catalog = getFoodCatalog();

  if (!input) {
    renderSearchResults(catalog, "");
    return;
  }

  const results = catalog.filter((food) => {
    const name = food.name.toLowerCase();
    const category = String(food.category).toLowerCase();
    return name.includes(input) || category.includes(input);
  });

  renderSearchResults(results, input);
}

function addToCart(name, price, category = "popular", image = "assets/images/food/pizza.jpg") {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push({ name, price, category, image, quantity: 1 });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Added to cart!");
}

function addToWishlist(name, price, category = "popular", image = "assets/images/food/pizza.jpg") {
  let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
  const exists = wishlist.some(item => item.name === name);
  if (!exists) {
    wishlist.push({ name, price, category, image });
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
    alert(name + " added to wishlist!");
  } else {
    alert(name + " is already in wishlist");
  }
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

function initializeSearchPage() {
  const searchInput = document.getElementById("searchInput");
  if (!searchInput) return;

  const params = new URLSearchParams(window.location.search);
  const query = (params.get("q") || "").trim();

  if (query) {
    searchInput.value = query;
  }

  searchFood();

  if (!searchInput.dataset.searchBound) {
    searchInput.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        searchFood();
      }
    });
    searchInput.dataset.searchBound = "true";
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initializeSearchPage);
} else {
  initializeSearchPage();
}

window.addEventListener("pageshow", initializeSearchPage);