// LOAD USER DATA & ADDRESS
function loadProfile() {
  const user = JSON.parse(localStorage.getItem('user')) || {name:'Guest', email:'guest@foodie.com'};
  const address = localStorage.getItem('deliveryAddress')||'';
  document.getElementById('userName').innerText = user.name;
  document.getElementById('userEmail').innerText = user.email;
  document.getElementById('address').value = address;
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

// Initialize profile on page load
loadProfile();
