# 🍔 IBM Internship - Food Ordering Web Application

> A complete food ordering platform built with **vanilla HTML, CSS, and JavaScript** featuring user authentication, restaurant browsing, cart management, and a comprehensive admin dashboard.

## 📌 Internship Overview

This repository contains the complete IBM Internship project work, including:
- **Main Project**: Foodie - A full-featured food ordering web application
- **Learning Tasks**: 5 foundational HTML/CSS/JavaScript tasks (Task 1-5)
- **Technologies**: Pure frontend stack - HTML5, CSS3, JavaScript (ES6+)
- **Data Management**: Browser localStorage for persistence
- **No Backend Required**: Fully functional single-page application

---

## 🎯 Internship Tasks & Objectives

### **Learning Tasks (Foundation)**
These tasks helped establish core web development fundamentals:

#### **Task 1: Profile Page**
- Created a personal profile webpage
- Implemented HTML structure with semantic elements
- Displayed profile information, skills, and contact details
- **Concepts Learned**: HTML basics, page structure, links, lists

#### **Task 2: Registration Form**
- Built a user registration form with multiple input types
- Implemented form validation attributes (required, type, placeholder)
- Explored different HTML5 form elements
- **Concepts Learned**: Form elements, input types, basic validation

#### **Task 3: Notification Box**
- Designed styled notification boxes
- Applied CSS border properties (border-width, border-style, border-color)
- Created visually distinct UI components
- **Concepts Learned**: CSS styling, borders, box model, visual hierarchy

#### **Task 4-5: HTML Tables & Advanced Forms**
- Built responsive table structures with rowspan/colspan
- Created complex form layouts
- Applied advanced HTML/CSS techniques
- **Concepts Learned**: Table structure, form design, responsive layout

---

## 🍕 Main Project: Foodie - Food Ordering Platform

### **Project Overview**
Foodie is a comprehensive food ordering web application that connects customers with restaurants. It provides a seamless experience for browsing restaurants, searching for food, managing shopping carts, placing orders, and tracking deliveries. The admin panel enables restaurant management and order fulfillment.

### **Key Features**

#### **👥 Customer Features**
| Feature | Description |
|---------|-------------|
| 🔐 **Authentication** | Secure signup/login with role-based access (Customer/Admin) |
| 🏪 **Restaurant Browsing** | View all available restaurants with ratings and cuisines |
| 🍽️ **Menu Exploration** | Browse detailed restaurant menus with food images and prices |
| 🔍 **Search Functionality** | Search for specific food items across all restaurants |
| ❤️ **Wishlist** | Save favorite items for quick access later |
| 🛒 **Shopping Cart** | Add/remove items with real-time price calculation |
| 💳 **Checkout** | Multiple payment methods (COD, UPI, Card) |
| 📊 **Order Tracking** | View order history and current order status |
| 👤 **User Profile** | Manage personal information and saved addresses |
| 📱 **Responsive Design** | Works seamlessly on desktop, tablet, and mobile |

#### **🛠️ Admin Features**
| Feature | Description |
|---------|-------------|
| 📈 **Dashboard** | View key metrics - total users, orders, food items, restaurants |
| 👥 **User Management** | View all users, delete accounts if needed |
| 📦 **Order Management** | Monitor all orders and update delivery status |
| 🍕 **Food Management** | Add new food items, edit menus, delete items |
| 🏢 **Restaurant Management** | Manage partner restaurants and their details |

---

## 📁 Project Structure

```
IBM-Internship/
│
├── 📂 project/
│   └── 📂 Food-ordering/
│       ├── 📄 index.html                 # Home page with featured restaurants
│       ├── 📄 login.html                 # Modern login page
│       ├── 📄 signup.html                # Registration page with validation
│       ├── 📄 restaurants.html           # Browse all restaurants
│       ├── 📄 restaurant-details.html    # Restaurant menu view
│       ├── 📄 search.html                # Search food items
│       ├── 📄 cart.html                  # Shopping cart
│       ├── 📄 checkout.html              # Order checkout
│       ├── 📄 order-success.html         # Order confirmation
│       ├── 📄 wishlist.html              # Saved favorite items
│       ├── 📄 profile.html               # User account profile
│       ├── 📄 orders.html                # Order history
│       │
│       ├── 📂 admin/
│       │   ├── 📄 dashboard.html         # Admin dashboard with stats
│       │   ├── 📄 manage-users.html      # User management
│       │   ├── 📄 manage-orders.html     # Order management
│       │   ├── 📄 manage-food.html       # Food item management
│       │   └── 📄 manage-restaurants.html# Restaurant management
│       │
│       ├── 📂 css/
│       │   ├── 📄 style.css              # Core global styles
│       │   ├── 📄 navbar.css             # Navigation bar styling
│       │   ├── 📄 footer.css             # Footer styling
│       │   ├── 📄 home.css               # Home page styles
│       │   ├── 📄 auth.css               # Login/signup styles (modern gradient design)
│       │   ├── 📄 restaurant.css         # Restaurant page styles
│       │   ├── 📄 cart.css               # Cart/checkout styles
│       │   ├── 📄 profile.css            # Profile page styles
│       │   ├── 📄 admin.css              # Admin panel styles
│       │   ├── 📄 modal.css              # Modal popup styles
│       │   └── 📄 responsive.css         # Mobile responsive breakpoints
│       │
│       ├── 📂 js/
│       │   ├── 📄 main.js                # Home page logic
│       │   ├── 📄 auth.js                # Login/signup with validation
│       │   ├── 📄 cart.js                # Cart operations
│       │   ├── 📄 api.js                 # Mock API (ready for backend)
│       │   ├── 📄 restaurant.js          # Restaurant details logic
│       │   ├── 📄 order.js               # Order processing
│       │   ├── 📄 search.js              # Search functionality
│       │   ├── 📄 profile.js             # Profile management
│       │   └── 📄 admin.js               # Admin operations
│       │
│       ├── 📂 assets/
│       │   ├── 📂 images/
│       │   │   ├── 📂 food/              # Food item images
│       │   │   ├── 📂 banners/           # Hero banner images
│       │   │   └── 📂 icons/             # UI icon images
│       │   └── 📂 fonts/                 # Custom fonts
│       │
│       └── 📄 README.md                  # Project documentation
│
├── 📂 tasks/                             # Learning tasks
│   ├── 📄 task1.html                     # Profile page task
│   ├── 📄 task2.html                     # Registration form task
│   ├── 📄 task3.html                     # Notification box task
│   ├── 📄 task4.html                     # HTML table task
│   ├── 📄 task5.html                     # Advanced form task
│   └── 📂 images/                        # Task resources
│
│── 📄 README.md                          # This file
└── 📄 .git/                              # Git version control

```

---

## 🔧 Detailed Module Descriptions

### **Authentication Module** (`auth.html`, `auth.js`, `auth.css`)
**Purpose**: Secure user authentication with role-based access

**Features**:
- ✅ Modern gradient UI design with two-column layout
- ✅ Email validation and format checking
- ✅ Password strength requirements (min 6 chars, letters + numbers)
- ✅ Password visibility toggle (eye icon in textbox)
- ✅ Real-time error messages
- ✅ Duplicate email prevention
- ✅ Role selection (Customer/Admin)
- ✅ Terms & conditions acceptance
- ✅ Smooth animations and transitions

**Technical Details**:
- Uses localStorage for user data persistence
- Input type toggling for password visibility
- Form validation with error clearing on focus
- Responsive design for all screen sizes

### **Restaurant Browsing** (`restaurants.html`, `restaurant.js`)
**Purpose**: Display all available restaurants with filtering and ratings

**Features**:
- ✅ Card-based restaurant layout
- ✅ Restaurant ratings and review counts
- ✅ Cuisine type filtering
- ✅ Quick view and menu access
- ✅ Click to view detailed menu

### **Search Functionality** (`search.html`, `search.js`)
**Purpose**: Enable users to find specific food items quickly

**Features**:
- ✅ Real-time search across all restaurants
- ✅ Filter by price range
- ✅ Sort by rating/popularity
- ✅ Quick add to cart from results
- ✅ Search history (localStorage)

### **Shopping Cart** (`cart.html`, `cart.js`)
**Purpose**: Manage selected items before checkout

**Features**:
- ✅ Add/remove items
- ✅ Quantity adjustment
- ✅ Real-time price calculation
- ✅ Apply discount codes
- ✅ Persistent cart (localStorage)
- ✅ Proceed to checkout button

### **Checkout & Payment** (`checkout.html`)
**Purpose**: Complete the purchase process

**Features**:
- ✅ Order summary display
- ✅ Delivery address form
- ✅ Multiple payment methods (COD, UPI, Card)
- ✅ Order confirmation with order ID
- ✅ Estimated delivery time

### **Order Tracking** (`orders.html`, `order.js`)
**Purpose**: View order history and current status

**Features**:
- ✅ List all customer orders
- ✅ Order status tracking
- ✅ Delivery address display
- ✅ Order total and items
- ✅ Re-order functionality

### **Wishlist** (`wishlist.html`)
**Purpose**: Save favorite food items for quick access

**Features**:
- ✅ Add/remove favorites
- ✅ Persistent wishlist (localStorage)
- ✅ Quick add to cart from wishlist

### **User Profile** (`profile.html`, `profile.js`)
**Purpose**: Manage user account and preferences

**Features**:
- ✅ View/edit profile information
- ✅ Manage saved addresses
- ✅ View order history
- ✅ Logout functionality

### **Admin Dashboard** (`admin/dashboard.html`, `admin.js`)
**Purpose**: Comprehensive management interface for administrators

**Features**:
- 📊 Statistics widget (users, orders, revenue, restaurants)
- 👥 User management with delete functionality
- 📦 Order management with status updates
- 🍕 Food item management (add/edit/delete)
- 🏢 Restaurant partner management

---

## 🚀 Getting Started

### **Prerequisites**
- Modern web browser (Chrome 90+, Firefox 88+, Safari 14+, Edge 90+)
- No installation required - pure client-side application
- Recommended: ~10MB free disk space for localStorage

### **Installation & Setup**

**Option 1: Direct File Opening**
```bash
# Navigate to project directory
cd project/Food-ordering

# Open in browser (Windows)
start index.html

# Open in browser (macOS)
open index.html

# Open in browser (Linux)
xdg-open index.html
```

**Option 2: Using Local Server** (Recommended for better compatibility)
```bash
# Using Python 3
python -m http.server 8000

# Using Python 2
python -m SimpleHTTPServer 8000

# Using Node.js (if installed)
npx http-server

# Then open: http://localhost:8000
```

### **Quick Start**
1. Open `index.html` in your web browser
2. Explore the home page with featured restaurants
3. Click "Signup" to create an account (Customer role)
4. Browse restaurants and add items to cart
5. Complete checkout with COD payment
6. View orders in your profile

### **Admin Access**
1. Signup with role: **Admin**
2. Navigate to admin panel (dashboard.html)
3. Manage users, orders, food items, and restaurants

---

## 💾 Data Storage

All data is stored in browser **localStorage**:
- 🔐 **users**: Registered user accounts
- 🛒 **cart**: Shopping cart items
- ❤️ **wishlist**: Favorite items
- 📦 **orders**: Order history
- 🏪 **restaurants**: Restaurant data
- 🍕 **food**: Food menu items

**Note**: Data persists only on the same browser. Clear browser cache to reset data.

---

## 🎨 Design & UI Features

### **Modern Design System**
- **Color Palette**: Purple gradient (#667eea → #764ba2), white, gray accents
- **Typography**: Clear hierarchy with responsive font sizes
- **Icons**: Font Awesome icons (6.4.0) for visual clarity
- **Animations**: Smooth transitions and hover effects
- **Spacing**: Consistent padding and margins

### **Responsive Breakpoints**
- 📱 **Mobile** (< 480px): Single column, optimized touch targets
- 📱 **Tablet** (480px - 768px): 2 columns, adjusted spacing
- 💻 **Desktop** (> 768px): Full multi-column layout

### **Interactive Elements**
- ✨ Hover effects on cards and buttons
- 🎯 Active state feedback
- 📨 Form validation with error messages
- 🔔 Success notifications
- 🔄 Loading states

---

## 🔒 Security Considerations

### **Current Implementation**
- Client-side form validation
- Required field checks
- Email format validation
- Password strength requirements

### **Future Enhancements**
- Backend authentication with JWT
- Password hashing (bcrypt)
- HTTPS/SSL encryption
- Rate limiting on login attempts
- CSRF protection
- Input sanitization

---

## 📊 Technology Stack

| Category | Technologies |
|----------|---------------|
| **Frontend** | HTML5, CSS3, JavaScript (ES6+) |
| **Icons** | Font Awesome 6.4.0 |
| **Storage** | Browser localStorage |
| **Version Control** | Git/GitHub |
| **Deployment Ready** | Staticfile buildpack compatible |

---

## 📈 Future Enhancement Roadmap

### **Phase 2: Backend Integration**
- [ ] Node.js/Express backend
- [ ] MongoDB database
- [ ] REST API endpoints
- [ ] User authentication with JWT

### **Phase 3: Advanced Features**
- [ ] Real-time notifications
- [ ] Payment gateway integration (Stripe/Razorpay)
- [ ] Email notifications
- [ ] SMS delivery updates
- [ ] Push notifications
- [ ] Restaurant reviews and ratings

### **Phase 4: Performance & Scale**
- [ ] Image optimization and CDN
- [ ] Caching strategies
- [ ] Database indexing
- [ ] Load balancing
- [ ] Analytics dashboard

### **Phase 5: Additional Features**
- [ ] Multiple language support
- [ ] Dark mode
- [ ] Referral program
- [ ] Loyalty points system
- [ ] Subscribe & save offers

---

## 🤝 Development Workflow

### **Git Operations**
```bash
# Clone repository
git clone https://github.com/aloksingh2366/IBM-Internship.git

# Navigate to project
cd IBM-Internship

# Create feature branch
git checkout -b feature/new-feature

# Make changes and commit
git add .
git commit -m "Add new feature: description"

# Push to GitHub
git push origin feature/new-feature

# Create Pull Request on GitHub
```

### **Branch Naming Convention**
- `feature/*` - New features
- `bugfix/*` - Bug fixes
- `hotfix/*` - Production issues
- `docs/*` - Documentation updates

---

## 📚 Learning Outcomes

Through this internship project, I've learned:

✅ **Frontend Development**
- Semantic HTML5 structure
- Advanced CSS3 (flexbox, grid, gradients, animations)
- Modern JavaScript (ES6+, DOM manipulation)

✅ **UI/UX Design**
- Responsive design principles
- Mobile-first approach
- User experience best practices
- Accessibility considerations

✅ **Web Application Architecture**
- Component-based design
- State management with localStorage
- Form validation and error handling
- Real-time calculations and updates

✅ **Development Practices**
- Version control with Git
- Code organization and modularity
- Clean code principles
- Documentation standards

✅ **Problem Solving**
- Debugging techniques
- Performance optimization
- Cross-browser compatibility
- Problem decomposition

---

## 📞 Contact & Support

**Developer**: Alok Singh Suman  
**Email**: [aloksinghsuman271003@gmail.com](mailto:aloksinghsuman271003@gmail.com)  
**LinkedIn**: [linkedin.com/in/alok-singh-suman/](https://www.linkedin.com/in/alok-singh-suman/)  
**GitHub**: [github.com/aloksinghsuman](https://github.com/aloksinghsuman)  

---

## 📄 License

This project is part of IBM Internship training program. All rights reserved.

---

## 🙏 Acknowledgments

- **IBM**: For the internship opportunity and learning platform
- **Mentors**: For guidance and support
- **Font Awesome**: For icon library
- **Web Development Community**: For best practices and resources

---

**Last Updated**: March 28, 2026  
**Project Status**: ✅ In Active Development  
**Current Version**: 1.0.0

---

## 📝 Notes for Reviewers

This project demonstrates:
- ✨ Modern, professional UI/UX design
- 🎯 Complete full-stack frontend application (client-side)
- 📱 Responsive design across all devices
- 🔐 Input validation and user authentication
- 💾 Persistent data management
- 🧩 Modular, maintainable code structure
- 📚 Comprehensive documentation

All files are organized, well-commented, and ready for production or backend integration.