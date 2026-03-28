// LOAD USER DATA & ADDRESS
function loadProfile() {
  const user = JSON.parse(localStorage.getItem('user')) || {name:'Guest', email:'guest@foodie.com', phone:'+91 9876543210'};
  const address = localStorage.getItem('deliveryAddress') || '';

  document.getElementById('userName').innerText = user.name;
  document.getElementById('userEmail').innerText = user.email;
  document.getElementById('userPhone').innerText = user.phone;
  document.getElementById('address').value = address;

  const orders = JSON.parse(localStorage.getItem('orders')) || [
    {id: 123, total: 250, status: 'Delivered'},
    {id: 124, total: 150, status: 'Pending'},
    {id: 125, total: 350, status: 'Delivered'},
    {id: 126, total: 180, status: 'Pending'}
  ];

  const favorites = JSON.parse(localStorage.getItem('wishlist')) || [];
  const totalSpent = orders.reduce((sum, o) => sum + o.total, 0);
  document.getElementById('totalOrders').innerText = orders.length;
  document.getElementById('totalSpent').innerText = `₹${totalSpent}`;
  document.getElementById('favoriteCount').innerText = favorites.length;

  const recentOrders = orders.slice(0, 4);
  const recentOrdersEl = document.getElementById('recentOrders');
  recentOrdersEl.innerHTML = recentOrders.map(o => `
    <div class="order-pill">Order #${o.id}<br>₹${o.total}</div>
  `).join('');

  const orderHistoryEl = document.getElementById('orderHistory');
  orderHistoryEl.innerHTML = orders.map(o => `
    <div class="history-item">
      Order #${o.id} <strong>₹${o.total}</strong>
      <span class="status ${o.status.toLowerCase()}">${o.status}</span>
    </div>
  `).join('');
}

// SAVE ADDRESS
function saveAddress(){
  const address = document.getElementById('address').value.trim();
  if(!address){alert('Please enter an address.'); return;}
  localStorage.setItem('deliveryAddress', address);
  alert('Address saved successfully!');
}

// LOGOUT
function logout(){
  localStorage.removeItem('user');
  alert('Logged out successfully!');
  window.location.href='login.html';
}

function editProfile(){
  const user = JSON.parse(localStorage.getItem('user')) || {};
  const newName = prompt('Enter name', user.name || '');
  const newPhone = prompt('Enter phone', user.phone || '');
  if(newName){
    user.name = newName;
    user.phone = newPhone || user.phone;
    localStorage.setItem('user', JSON.stringify(user));
    loadProfile();
    alert('Profile updated.');
  }
}

// Initialize profile on page load
loadProfile();

// Update navbar based on user role (for pages that might have admin links)
function updateNavbarVisibility() {
  const user = JSON.parse(localStorage.getItem('user'));
  const adminLink = document.querySelector('a[href*="admin"]');
  
  if (adminLink) {
    if (user && user.role === 'admin') {
      adminLink.style.display = 'inline-block';
    } else {
      adminLink.style.display = 'none';
    }
  }
}

updateNavbarVisibility();
