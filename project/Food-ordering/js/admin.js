/* Admin Dashboard JS */
function loadAdminStats(){
  const users = JSON.parse(localStorage.getItem('users')) || [];
  const orders = JSON.parse(localStorage.getItem('orders')) || [];
  const cart = JSON.parse(localStorage.getItem('cart')) || [];

  if(document.getElementById('totalUsers')){
    document.getElementById('totalUsers').innerText = users.length;
  }
  if(document.getElementById('totalOrders')){
    document.getElementById('totalOrders').innerText = orders.length;
  }
  if(document.getElementById('itemsInCart')){
    document.getElementById('itemsInCart').innerText = cart.length;
  }
}

function goToAdminPage(page){
  window.location.href = 'admin/' + page + '.html';
}

loadAdminStats();
