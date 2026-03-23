const foods = [
  { name: "Pizza", price: 199 },
  { name: "Burger", price: 99 },
  { name: "Biryani", price: 249 },
  { name: "Noodles", price: 149 }
];

function searchFood() {
  const input = document.getElementById("searchInput").value.toLowerCase();

  const results = foods.filter(f =>
    f.name.toLowerCase().includes(input)
  );

  const container = document.getElementById("searchResults");

  if (results.length === 0) {
    container.innerHTML = "<p>No results found</p>";
    return;
  }

  container.innerHTML = results.map(food => `
    <div class="food-card">
      <h3>${food.name}</h3>
      <p>₹${food.price}</p>
      <button onclick="addToCart('${food.name}', ${food.price})">
        Add to Cart
      </button>
      <button onclick="addToWishlist('${food.name}', ${food.price})">
        ❤️ Wishlist
      </button>
    </div>
  `).join("");
}

function addToCart(name, price) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push({ name, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Added to cart!");
}

function addToWishlist(name, price) {
  let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
  wishlist.push({ name, price });
  localStorage.setItem("wishlist", JSON.stringify(wishlist));
  alert("Added to wishlist!");
}