# 🍔 Foodie - Food Ordering Web Application

## Project Overview
Foodie is a complete food ordering web application built with **vanilla HTML, CSS, and JavaScript**. It features a user-friendly interface, restaurant management system, shopping cart, order tracking, and a powerful admin dashboard.

---

## 📋 Features

### **User Features**
- ✅ **Authentication** - Signup & Login with localStorage
- ✅ **Browse Restaurants** - View available restaurants and menus
- ✅ **Search Food** - Search for specific food items
- ✅ **Add to Cart** - Add items with prices
- ✅ **Wishlist** - Save favorite items for later
- ✅ **Checkout** - Secure checkout with delivery address
- ✅ **Order Tracking** - View order history and track orders
- ✅ **User Profile** - Manage profile and saved addresses
- ✅ **Payment Methods** - COD, UPI, Card options

### **Admin Features**
- 📊 **Dashboard** - View statistics (users, orders, food items, restaurants)
- 👥 **User Management** - View and delete users
- 📦 **Order Management** - Monitor and manage all orders
- 🍕 **Food Management** - Add, edit, delete food items
- 🏪 **Restaurant Management** - Manage partner restaurants

---

## 📁 Project Structure

```
food-ordering/
│
├── index.html                  # Home Page
├── login.html                  # User Login
├── signup.html                 # User Registration
├── restaurants.html            # Browse Restaurants
├── restaurant-details.html     # Restaurant Menu
├── cart.html                   # Shopping Cart
├── checkout.html               # Order Checkout
├── order-success.html          # Order Confirmation
├── profile.html                # User Profile
├── orders.html                 # Order History
├── search.html                 # Search Food
├── wishlist.html               # Wishlist Page
│
├── admin/                      # Admin Panel
│   ├── dashboard.html          # Admin Dashboard
│   ├── manage-users.html       # User Management
│   ├── manage-orders.html      # Order Management
│   ├── manage-food.html        # Food Management
│   └── manage-restaurants.html # Restaurant Management
│
├── css/                        # Stylesheets
│   ├── style.css               # Global Styles
│   ├── navbar.css              # Navbar Styles
│   ├── footer.css              # Footer Styles
│   ├── home.css                # Home Page Styles
│   ├── auth.css                # Login/Signup Styles
│   ├── restaurant.css          # Restaurant Page Styles
│   ├── cart.css                # Cart/Orders Styles
│   ├── profile.css             # Profile Styles
│   ├── admin.css               # Admin Panel Styles
│   └── responsive.css          # Mobile Responsive Styles
│
├── js/                         # JavaScript Files
│   ├── main.js                 # Home Page Logic
│   ├── auth.js                 # Login/Signup Logic
│   ├── cart.js                 # Cart Management
│   ├── api.js                  # API Integration (Future)
│   ├── restaurant.js           # Restaurant Logic
│   ├── order.js                # Order History Logic
│   ├── search.js               # Search Functionality
│   ├── profile.js              # Profile Management
│   └── admin.js                # Admin Dashboard Logic
│
├── assets/                     # Media Files
│   ├── images/
│   │   ├── food/               # Food Images
│   │   ├── banners/            # Banner Images
│   │   └── icons/              # Icon Images
│   └── fonts/                  # Custom Fonts
│
└── README.md                   # Project Documentation
```

---

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Edge, Safari)
- Basic understanding of HTML/CSS/JavaScript

### Installation

1. **Clone or Download** the project to your local machine
2. **Open** `index.html` in your web browser
3. **No backend required** - All data stored in browser's localStorage

---

## 📱 How to Use

### **For Customers**

1. **Sign Up** - Create a new account with name, email, and password
2. **Login** - Access your account
3. **Browse** - View restaurants and food items
4. **Search** - Find specific food items
5. **Add to Cart** - Add items to your cart
6. **Wishlist** - Save items for later
7. **Checkout** - Enter delivery address and select payment method
8. **Track Orders** - View order history in Orders section
9. **Profile** - Manage your account and saved addresses

### **For Admins**

1. **Access Admin Panel** - Click "Admin" link on homepage
2. **Dashboard** - View overall statistics
3. **Manage Users** - View all users and delete accounts
4. **Manage Orders** - Track and manage customer orders
5. **Manage Food** - Add new food items, delete items
6. **Manage Restaurants** - Add or remove restaurants

---

## 💾 Data Storage

- **localStorage** - All data (users, cart, orders, wishlist) stored locally
- **No Database** - Standalone application
- **Data Persistence** - Data saved until browser cache is cleared

---

## 🎨 Styling & Responsive Design

- **Modern UI** - Clean and attractive interface
- **Fully Responsive** - Works on desktop, tablet, and mobile
- **Color Scheme** - Red (#ff4d4d) as primary color
- **Font** - Google Poppins Font
- **Grid Layout** - CSS Grid for responsive containers

---

## 🔐 User Authentication

### Sign Up Flow
```
Username + Email + Password → Stored in localStorage → Redirect to Login
```

### Login Flow
```
Email + Password → Verify in localStorage → Create session → Redirect to Home
```

### Logout
```
Remove user from localStorage → Clear cart/data → Redirect to Login
```

---

## 🛒 Shopping Cart Logic

1. **Add to Cart** - Item added with name and price
2. **View Cart** - Display all items with total price
3. **Remove Item** - Delete items from cart
4. **Checkout** - Transfer cart items to orders
5. **Clear Cart** - Remove all items after order placed

---

## 📦 Order Management

- **Place Order** - Requires delivery address
- **Order Confirmation** - Success message with delivery time
- **View Orders** - Display all previous orders
- **Reorder** - Quick reorder from order history

---

## 🎯 JavaScript Functions

### Main Functions
- `loadFoods()` - Load food items on home page
- `addToCart()` - Add items to shopping cart
- `searchFood()` - Search functionality
- `renderCart()` - Display cart items
- `removeItem()` - Remove from cart
- `goToCheckout()` - Checkout process
- `placeOrder()` - Place order with address
- `logout()` - User logout

### Admin Functions
- `loadAdminStats()` - Load dashboard statistics
- `loadUsers()` - Display users list
- `loadOrders()` - Display orders list
- `loadFoods()` - Display food items
- `addFood()` - Add new food item
- `deleteFood()` - Delete food item
- `deleteUser()` - Delete user account
- `deleteOrder()` - Delete order

---

## 🔧 Customization

### Add New Food Items
Go to Admin Panel → Manage Food → Enter name and price → Add

### Change Colors
Edit `css/style.css`:
```css
.navbar { background: #new_color; }
```

### Add New Pages
Create `.html` file → Link in navbar → Add corresponding CSS/JS

---

## 🐛 Known Limitations

- No real backend/database
- Image paths require actual image files
- No email verification
- No payment gateway integration
- Data lost when browser cache is cleared

---

## 🚀 Future Enhancements

1. **Backend Integration** - Connect to Node.js/Express API
2. **Database** - MongoDB or Firebase
3. **Payment Gateway** - Razorpay/Stripe integration
4. **Real Notifications** - Email/SMS notifications
5. **GPS Integration** - Real-time delivery tracking
6. **Rating System** - User reviews and ratings
7. **Multiple Languages** - Internationalization
8. **PWA** - Progressive Web App capability

---

## 📞 Support & Contact

For issues or suggestions:
- Check project documentation
- Review localStorage data in DevTools
- Clear browser cache if data seems corrupted

---

## 📄 License

This project is open-source and available for educational purposes.

---

## 👨‍💻 Developer Notes

- **Technology Stack** - HTML5, CSS3, JavaScript ES6
- **Storage** - Browser LocalStorage API
- **Responsive** - Mobile-first approach
- **Browser Support** - All modern browsers
- **No External Dependencies** - Pure vanilla JavaScript

---

## 🎓 Learning Resources

This project demonstrates:
- ✅ DOM Manipulation
- ✅ Event Handling
- ✅ LocalStorage API
- ✅ Responsive Design
- ✅ ES6 JavaScript
- ✅ CSS Grid & Flexbox
- ✅ Form Validation

---

**Happy Ordering! 🍕🍔🍜** 

---

*Last Updated: March 2026*
