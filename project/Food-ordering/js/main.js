const foods = [
  // Deal of the Day (bestseller)
  { name: "Chicken Biryani Combo", price: 299, category: "bestseller", type: "biryani", image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE1MCIgZmlsbD0iI2ZlZjNmZSIvPjx0ZXh0IHg9IjEwMCIgeT0iODAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSI+8J+RjCBEaWFtb25kPC90ZXh0Pjwvc3ZnPg==" },
  { name: "Paneer Butter Masala + Naan", price: 249, category: "bestseller", type: "curry", image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE1MCIgZmlsbD0iI2ZlZjNmZSIvPjx0ZXh0IHg9IjEwMCIgeT0iODAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSI+8J+RjSBDdXJyeTwvdGV4dD48L3N2Zz4=" },
  { name: "Veg Thali", price: 199, category: "bestseller", type: "thali", image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE1MCIgZmlsbD0iI2ZlZjNmZSIvPjx0ZXh0IHg9IjEwMCIgeT0iODAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSI+8J+RjCBUSEFMSTwvdGV4dD48L3N2Zz4=" },
  { name: "Chicken Thali", price: 349, category: "bestseller", type: "thali", image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE1MCIgZmlsbD0iI2ZlZjNmZSIvPjx0ZXh0IHg9IjEwMCIgeT0iODAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSI+8J+RjCBUSEFMSTwvdGV4dD48L3N2Zz4=" },
  { name: "Burger + Fries Combo", price: 199, category: "bestseller", type: "combo", image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE1MCIgZmlsbD0iI2ZlZjNmZSIvPjx0ZXh0IHg9IjEwMCIgeT0iODAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSI+8J+RjCBDb21ibzwvdGV4dD48L3N2Zz4=" },
  { name: "Pizza Combo Meal", price: 399, category: "bestseller", type: "combo", image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE1MCIgZmlsbD0iI2ZlZjNmZSIvPjx0ZXh0IHg9IjEwMCIgeT0iODAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSI+8J+RjCBDb21ibzwvdGV4dD48L3N2Zz4=" },
  { name: "Rolls Combo", price: 149, category: "bestseller", type: "combo", image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE1MCIgZmlsbD0iI2ZlZjNmZSIvPjx0ZXh0IHg9IjEwMCIgeT0iODAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSI+8J+RjCBDb21ibzwvdGV4dD48L3N2Zz4=" },
  { name: "Family Pack Biryani", price: 599, category: "bestseller", type: "biryani", image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE1MCIgZmlsbD0iI2ZlZjNmZSIvPjx0ZXh0IHg9IjEwMCIgeT0iODAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSI+8J+RjCBEaWFtb25kPC90ZXh0Pjwvc3ZnPg==" },
  { name: "Dal Makhani + Rice", price: 179, category: "bestseller", type: "curry", image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE1MCIgZmlsbD0iI2ZlZjNmZSIvPjx0ZXh0IHg9IjEwMCIgeT0iODAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSI+8J+RjSBDdXJyeTwvdGV4dD48L3N2Zz4=" },
  { name: "Rajma Chawal", price: 149, category: "bestseller", type: "curry", image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE1MCIgZmlsbD0iI2ZlZjNmZSIvPjx0ZXh0IHg9IjEwMCIgeT0iODAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSI+8J+RjSBDdXJyeTwvdGV4dD48L3N2Zz4=" },
  { name: "Egg Curry Combo", price: 199, category: "bestseller", type: "combo", image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE1MCIgZmlsbD0iI2ZlZjNmZSIvPjx0ZXh0IHg9IjEwMCIgeT0iODAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSI+8J+RjCBDb21ibzwvdGV4dD48L3N2Zz4=" },
  { name: "Fried Rice Combo", price: 179, category: "bestseller", type: "combo", image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE1MCIgZmlsbD0iI2ZlZjNmZSIvPjx0ZXh0IHg9IjEwMCIgeT0iODAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSI+8J+RjCBDb21ibzwvdGV4dD48L3N2Zz4=" },
  { name: "Noodles Combo", price: 169, category: "bestseller", type: "combo", image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE1MCIgZmlsbD0iI2ZlZjNmZSIvPjx0ZXh0IHg9IjEwMCIgeT0iODAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSI+8J+RjCBDb21ibzwvdGV4dD48L3N2Zz4=" },
  { name: "Pav Bhaji Combo", price: 129, category: "bestseller", type: "combo", image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE1MCIgZmlsbD0iI2ZlZjNmZSIvPjx0ZXh0IHg9IjEwMCIgeT0iODAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSI+8J+RjCBDb21ibzwvdGV4dD48L3N2Zz4=" },
  { name: "Chole Bhature Combo", price: 149, category: "bestseller", type: "combo", image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE1MCIgZmlsbD0iI2ZlZjNmZSIvPjx0ZXh0IHg9IjEwMCIgeT0iODAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSI+8J+RjCBDb21ibzwvdGV4dD48L3N2Zz4=" },
  { name: "Tandoori Chicken Combo", price: 299, category: "bestseller", type: "combo", image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE1MCIgZmlsbD0iI2ZlZjNmZSIvPjx0ZXh0IHg9IjEwMCIgeT0iODAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSI+8J+RjCBDb21ibzwvdGV4dD48L3N2Zz4=" },
  { name: "Fish Curry Combo", price: 249, category: "bestseller", type: "combo", image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE1MCIgZmlsbD0iI2ZlZjNmZSIvPjx0ZXh0IHg9IjEwMCIgeT0iODAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSI+8J+RjCBDb21ibzwvdGV4dD48L3N2Zz4=" },
  { name: "Veg Pulao Combo", price: 159, category: "bestseller", type: "combo", image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE1MCIgZmlsbD0iI2ZlZjNmZSIvPjx0ZXh0IHg9IjEwMCIgeT0iODAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSI+8J+RjCBDb21ibzwvdGV4dD48L3N2Zz4=" },
  { name: "Cheese Burst Pizza Combo", price: 449, category: "bestseller", type: "combo", image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE1MCIgZmlsbD0iI2ZlZjNmZSIvPjx0ZXh0IHg9IjEwMCIgeT0iODAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSI+8J+RjCBDb21ibzwvdGV4dD48L3N2Zz4=" },
  { name: "Dessert Combo Meal", price: 199, category: "bestseller", type: "combo", image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE1MCIgZmlsbD0iI2ZlZjNmZSIvPjx0ZXh0IHg9IjEwMCIgeT0iODAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSI+8J+RjCBDb21ibzwvdGV4dD48L3N2Zz4=" },

  // Hyderabadi Biryani (bestseller)
  { name: "Hyderabadi Chicken Biryani", price: 299, category: "bestseller", type: "biryani", image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE1MCIgZmlsbD0iI2ZlZjNmZSIvPjx0ZXh0IHg9IjEwMCIgeT0iODAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSI+8J+RjCBEaWFtb25kPC90ZXh0Pjwvc3ZnPg==" },
  { name: "Hyderabadi Mutton Biryani", price: 399, category: "bestseller", type: "biryani", image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE1MCIgZmlsbD0iI2ZlZjNmZSIvPjx0ZXh0IHg9IjEwMCIgeT0iODAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSI+8J+RjCBEaWFtb25kPC90ZXh0Pjwvc3ZnPg==" },
  { name: "Hyderabadi Egg Biryani", price: 249, category: "bestseller", type: "biryani", image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE1MCIgZmlsbD0iI2ZlZjNmZSIvPjx0ZXh0IHg9IjEwMCIgeT0iODAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSI+8J+RjCBEaWFtb25kPC90ZXh0Pjwvc3ZnPg==" },
  { name: "Hyderabadi Veg Biryani", price: 229, category: "bestseller", type: "biryani", image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE1MCIgZmlsbD0iI2ZlZjNmZSIvPjx0ZXh0IHg9IjEwMCIgeT0iODAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSI+8J+RjCBEaWFtb25kPC90ZXh0Pjwvc3ZnPg==" },
  { name: "Paneer Biryani", price: 279, category: "bestseller", type: "biryani", image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE1MCIgZmlsbD0iI2ZlZjNmZSIvPjx0ZXh0IHg9IjEwMCIgeT0iODAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSI+8J+RjCBEaWFtb25kPC90ZXh0Pjwvc3ZnPg==" },
  { name: "Dum Chicken Biryani", price: 349, category: "bestseller", type: "biryani", image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE1MCIgZmlsbD0iI2ZlZjNmZSIvPjx0ZXh0IHg9IjEwMCIgeT0iODAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSI+8J+RjCBEaWFtb25kPC90ZXh0Pjwvc3ZnPg==" },
  { name: "Spicy Chicken Biryani", price: 319, category: "bestseller", type: "biryani", image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE1MCIgZmlsbD0iI2ZlZjNmZSIvPjx0ZXh0IHg9IjEwMCIgeT0iODAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSI+8J+RjCBEaWFtb25kPC90ZXh0Pjwvc3ZnPg==" },
  { name: "Boneless Chicken Biryani", price: 329, category: "bestseller", type: "biryani", image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE1MCIgZmlsbD0iI2ZlZjNmZSIvPjx0ZXh0IHg9IjEwMCIgeT0iODAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSI+8J+RjCBEaWFtb25kPC90ZXh0Pjwvc3ZnPg==" },
  { name: "Keema Biryani", price: 379, category: "bestseller", type: "biryani", image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE1MCIgZmlsbD0iI2ZlZjNmZSIvPjx0ZXh0IHg9IjEwMCIgeT0iODAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSI+8J+RjCBEaWFtb25kPC90ZXh0Pjwvc3ZnPg==" },
  { name: "Fish Biryani", price: 349, category: "bestseller", type: "biryani", image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE1MCIgZmlsbD0iI2ZlZjNmZSIvPjx0ZXh0IHg9IjEwMCIgeT0iODAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSI+8J+RjCBEaWFtb25kPC90ZXh0Pjwvc3ZnPg==" },
  { name: "Prawn Biryani", price: 399, category: "bestseller", type: "biryani", image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE1MCIgZmlsbD0iI2ZlZjNmZSIvPjx0ZXh0IHg9IjEwMCIgeT0iODAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSI+8J+RjCBEaWFtb25kPC90ZXh0Pjwvc3ZnPg==" },
  { name: "Double Masala Biryani", price: 359, category: "bestseller", type: "biryani", image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE1MCIgZmlsbD0iI2ZlZjNmZSIvPjx0ZXh0IHg9IjEwMCIgeT0iODAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSI+8J+RjCBEaWFtb25kPC90ZXh0Pjwvc3ZnPg==" },
  { name: "Special Family Biryani", price: 599, category: "bestseller", type: "biryani", image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE1MCIgZmlsbD0iI2ZlZjNmZSIvPjx0ZXh0IHg9IjEwMCIgeT0iODAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSI+8J+RjCBEaWFtb25kPC90ZXh0Pjwvc3ZnPg==" },
  { name: "Tandoori Chicken Biryani", price: 379, category: "bestseller", type: "biryani", image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE1MCIgZmlsbD0iI2ZlZjNmZSIvPjx0ZXh0IHg9IjEwMCIgeT0iODAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSI+8J+RjCBEaWFtb25kPC90ZXh0Pjwvc3ZnPg==" },
  { name: "Butter Chicken Biryani", price: 389, category: "bestseller", type: "biryani", image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE1MCIgZmlsbD0iI2ZlZjNmZSIvPjx0ZXh0IHg9IjEwMCIgeT0iODAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSI+8J+RjCBEaWFtb25kPC90ZXh0Pjwvc3ZnPg==" },
  { name: "Mushroom Biryani", price: 259, category: "bestseller", type: "biryani", image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE1MCIgZmlsbD0iI2ZlZjNmZSIvPjx0ZXh0IHg9IjEwMCIgeT0iODAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSI+8J+RjCBEaWFtb25kPC90ZXh0Pjwvc3ZnPg==" },
  { name: "Soya Biryani", price: 239, category: "bestseller", type: "biryani", image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE1MCIgZmlsbD0iI2ZlZjNmZSIvPjx0ZXh0IHg9IjEwMCIgeT0iODAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSI+8J+RjCBEaWFtb25kPC90ZXh0Pjwvc3ZnPg==" },
  { name: "Nawabi Biryani", price: 419, category: "bestseller", type: "biryani", image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE1MCIgZmlsbD0iI2ZlZjNmZSIvPjx0ZXh0IHg9IjEwMCIgeT0iODAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSI+8J+RjCBEaWFtb25kPC90ZXh0Pjwvc3ZnPg==" },
  { name: "Hyderabadi Dum Mutton Biryani", price: 449, category: "bestseller", type: "biryani", image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE1MCIgZmlsbD0iI2ZlZjNmZSIvPjx0ZXh0IHg9IjEwMCIgeT0iODAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSI+8J+RjCBEaWFtb25kPC90ZXh0Pjwvc3ZnPg==" },
  { name: "Extra Spicy Biryani", price: 339, category: "bestseller", type: "biryani", image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE1MCIgZmlsbD0iI2ZlZjNmZSIvPjx0ZXh0IHg9IjEwMCIgeT0iODAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSI+8J+RjCBEaWFtb25kPC90ZXh0Pjwvc3ZnPg==" },

  // Lucknowi Biryani (bestseller)
  { name: "Lucknowi Chicken Biryani", price: 319, category: "bestseller", type: "biryani", image: "assets/images/food/biryani.jpg" },
  { name: "Lucknowi Mutton Biryani", price: 419, category: "bestseller", type: "biryani", image: "assets/images/food/biryani.jpg" },
  { name: "Awadhi Biryani", price: 359, category: "bestseller", type: "biryani", image: "assets/images/food/biryani.jpg" },
  { name: "Veg Lucknowi Biryani", price: 249, category: "bestseller", type: "biryani", image: "assets/images/food/biryani.jpg" },
  { name: "Paneer Awadhi Biryani", price: 299, category: "bestseller", type: "biryani", image: "assets/images/food/biryani.jpg" },
  { name: "Egg Lucknowi Biryani", price: 269, category: "bestseller", type: "biryani", image: "assets/images/food/biryani.jpg" },
  { name: "Mild Spice Biryani", price: 289, category: "bestseller", type: "biryani", image: "assets/images/food/biryani.jpg" },
  { name: "Dum Awadhi Biryani", price: 379, category: "bestseller", type: "biryani", image: "assets/images/food/biryani.jpg" },
  { name: "Chicken Yakhni Biryani", price: 349, category: "bestseller", type: "biryani", image: "assets/images/food/biryani.jpg" },
  { name: "Mutton Yakhni Biryani", price: 449, category: "bestseller", type: "biryani", image: "assets/images/food/biryani.jpg" },
  { name: "Nawabi Chicken Biryani", price: 389, category: "bestseller", type: "biryani", image: "assets/images/food/biryani.jpg" },
  { name: "Royal Mutton Biryani", price: 499, category: "bestseller", type: "biryani", image: "assets/images/food/biryani.jpg" },
  { name: "Saffron Biryani", price: 429, category: "bestseller", type: "biryani", image: "assets/images/food/biryani.jpg" },
  { name: "Mughlai Biryani", price: 399, category: "bestseller", type: "biryani", image: "assets/images/food/biryani.jpg" },
  { name: "Handi Biryani", price: 369, category: "bestseller", type: "biryani", image: "assets/images/food/biryani.jpg" },
  { name: "Fish Awadhi Biryani", price: 379, category: "bestseller", type: "biryani", image: "assets/images/food/biryani.jpg" },
  { name: "Prawn Lucknowi Biryani", price: 429, category: "bestseller", type: "biryani", image: "assets/images/food/biryani.jpg" },
  { name: "Mushroom Awadhi Biryani", price: 279, category: "bestseller", type: "biryani", image: "assets/images/food/biryani.jpg" },
  { name: "Special Lucknowi Combo Biryani", price: 649, category: "bestseller", type: "biryani", image: "assets/images/food/biryani.jpg" },
  { name: "Butter Chicken Awadhi Biryani", price: 419, category: "bestseller", type: "biryani", image: "assets/images/food/biryani.jpg" },

  // Kebabs (nonveg)
  { name: "Chicken Seekh Kebab", price: 199, category: "nonveg", type: "kebab", image: "assets/images/food/kebab.jpg" },
  { name: "Mutton Seekh Kebab", price: 249, category: "nonveg", type: "kebab", image: "assets/images/food/kebab.jpg" },
  { name: "Chicken Tikka", price: 229, category: "nonveg", type: "kebab", image: "assets/images/food/kebab.jpg" },
  { name: "Paneer Tikka", price: 189, category: "veg", type: "kebab", image: "assets/images/food/kebab.jpg" },
  { name: "Hara Bhara Kebab", price: 169, category: "veg", type: "kebab", image: "assets/images/food/kebab.jpg" },
  { name: "Galouti Kebab", price: 299, category: "nonveg", type: "kebab", image: "assets/images/food/kebab.jpg" },
  { name: "Shami Kebab", price: 219, category: "nonveg", type: "kebab", image: "assets/images/food/kebab.jpg" },
  { name: "Reshmi Kebab", price: 239, category: "nonveg", type: "kebab", image: "assets/images/food/kebab.jpg" },
  { name: "Malai Chicken Kebab", price: 249, category: "nonveg", type: "kebab", image: "assets/images/food/kebab.jpg" },
  { name: "Tandoori Chicken", price: 279, category: "nonveg", type: "kebab", image: "assets/images/food/kebab.jpg" },
  { name: "Fish Tikka", price: 259, category: "nonveg", type: "kebab", image: "assets/images/food/kebab.jpg" },
  { name: "Afghani Chicken", price: 269, category: "nonveg", type: "kebab", image: "assets/images/food/kebab.jpg" },
  { name: "Tangdi Kebab", price: 239, category: "nonveg", type: "kebab", image: "assets/images/food/kebab.jpg" },
  { name: "Veg Seekh Kebab", price: 179, category: "veg", type: "kebab", image: "assets/images/food/kebab.jpg" },
  { name: "Mushroom Tikka", price: 199, category: "veg", type: "kebab", image: "assets/images/food/kebab.jpg" },
  { name: "Chicken Hariyali Kebab", price: 229, category: "nonveg", type: "kebab", image: "assets/images/food/kebab.jpg" },
  { name: "Mutton Boti Kebab", price: 279, category: "nonveg", type: "kebab", image: "assets/images/food/kebab.jpg" },
  { name: "Cheese Kebab", price: 219, category: "veg", type: "kebab", image: "assets/images/food/kebab.jpg" },
  { name: "Soya Chaap Kebab", price: 189, category: "veg", type: "kebab", image: "assets/images/food/kebab.jpg" },
  { name: "Tandoori Broccoli", price: 169, category: "veg", type: "kebab", image: "assets/images/food/kebab.jpg" },

  // Korma & Curries (veg)
  { name: "Butter Chicken", price: 299, category: "nonveg", type: "curry", image: "assets/images/food/curry.jpg" },
  { name: "Chicken Korma", price: 279, category: "nonveg", type: "curry", image: "assets/images/food/curry.jpg" },
  { name: "Mutton Korma", price: 349, category: "nonveg", type: "curry", image: "assets/images/food/curry.jpg" },
  { name: "Paneer Butter Masala", price: 229, category: "veg", type: "curry", image: "assets/images/food/curry.jpg" },
  { name: "Shahi Paneer", price: 249, category: "veg", type: "curry", image: "assets/images/food/curry.jpg" },
  { name: "Dal Makhani", price: 189, category: "veg", type: "curry", image: "assets/images/food/curry.jpg" },
  { name: "Chole Masala", price: 169, category: "veg", type: "curry", image: "assets/images/food/curry.jpg" },
  { name: "Rajma Curry", price: 179, category: "veg", type: "curry", image: "assets/images/food/curry.jpg" },
  { name: "Kadai Chicken", price: 289, category: "nonveg", type: "curry", image: "assets/images/food/curry.jpg" },
  { name: "Kadai Paneer", price: 239, category: "veg", type: "curry", image: "assets/images/food/curry.jpg" },
  { name: "Palak Paneer", price: 219, category: "veg", type: "curry", image: "assets/images/food/curry.jpg" },
  { name: "Chicken Curry", price: 269, category: "nonveg", type: "curry", image: "assets/images/food/curry.jpg" },
  { name: "Fish Curry", price: 299, category: "nonveg", type: "curry", image: "assets/images/food/curry.jpg" },
  { name: "Egg Curry", price: 199, category: "nonveg", type: "curry", image: "assets/images/food/curry.jpg" },
  { name: "Malai Kofta", price: 229, category: "veg", type: "curry", image: "assets/images/food/curry.jpg" },
  { name: "Mushroom Masala", price: 209, category: "veg", type: "curry", image: "assets/images/food/curry.jpg" },
  { name: "Soya Chaap Curry", price: 199, category: "veg", type: "curry", image: "assets/images/food/curry.jpg" },
  { name: "Navratan Korma", price: 259, category: "veg", type: "curry", image: "assets/images/food/curry.jpg" },
  { name: "Aloo Gobi", price: 149, category: "veg", type: "curry", image: "assets/images/food/curry.jpg" },
  { name: "Mix Veg Curry", price: 179, category: "veg", type: "curry", image: "assets/images/food/curry.jpg" },

  // Rolls (veg)
  { name: "Chicken Roll", price: 129, category: "nonveg", type: "rolls", image: "assets/images/food/roll.jpg" },
  { name: "Egg Roll", price: 99, category: "nonveg", type: "rolls", image: "assets/images/food/roll.jpg" },
  { name: "Paneer Roll", price: 109, category: "veg", type: "rolls", image: "assets/images/food/roll.jpg" },
  { name: "Veg Roll", price: 89, category: "veg", type: "rolls", image: "assets/images/food/roll.jpg" },
  { name: "Chicken Egg Roll", price: 149, category: "nonveg", type: "rolls", image: "assets/images/food/roll.jpg" },
  { name: "Double Chicken Roll", price: 179, category: "nonveg", type: "rolls", image: "assets/images/food/roll.jpg" },
  { name: "Cheese Paneer Roll", price: 139, category: "veg", type: "rolls", image: "assets/images/food/roll.jpg" },
  { name: "Mushroom Roll", price: 119, category: "veg", type: "rolls", image: "assets/images/food/roll.jpg" },
  { name: "Soya Chaap Roll", price: 129, category: "veg", type: "rolls", image: "assets/images/food/roll.jpg" },
  { name: "Tandoori Chicken Roll", price: 159, category: "nonveg", type: "rolls", image: "assets/images/food/roll.jpg" },
  { name: "Kebab Roll", price: 169, category: "nonveg", type: "rolls", image: "assets/images/food/roll.jpg" },
  { name: "Spicy Chicken Roll", price: 139, category: "nonveg", type: "rolls", image: "assets/images/food/roll.jpg" },
  { name: "Butter Chicken Roll", price: 179, category: "nonveg", type: "rolls", image: "assets/images/food/roll.jpg" },
  { name: "Malai Paneer Roll", price: 149, category: "veg", type: "rolls", image: "assets/images/food/roll.jpg" },
  { name: "Aloo Roll", price: 79, category: "veg", type: "rolls", image: "assets/images/food/roll.jpg" },
  { name: "Chilli Paneer Roll", price: 159, category: "veg", type: "rolls", image: "assets/images/food/roll.jpg" },
  { name: "Chicken Seekh Roll", price: 169, category: "nonveg", type: "rolls", image: "assets/images/food/roll.jpg" },
  { name: "Mutton Roll", price: 189, category: "nonveg", type: "rolls", image: "assets/images/food/roll.jpg" },
  { name: "Frankie Roll", price: 99, category: "veg", type: "rolls", image: "assets/images/food/roll.jpg" },
  { name: "Cheese Corn Roll", price: 129, category: "veg", type: "rolls", image: "assets/images/food/roll.jpg" },

  // Breads & Extras (veg)
  { name: "Butter Naan", price: 49, category: "veg", type: "bread", image: "assets/images/food/bread.jpg" },
  { name: "Garlic Naan", price: 59, category: "veg", type: "bread", image: "assets/images/food/bread.jpg" },
  { name: "Plain Naan", price: 39, category: "veg", type: "bread", image: "assets/images/food/bread.jpg" },
  { name: "Tandoori Roti", price: 29, category: "veg", type: "bread", image: "assets/images/food/bread.jpg" },
  { name: "Butter Roti", price: 39, category: "veg", type: "bread", image: "assets/images/food/bread.jpg" },
  { name: "Missi Roti", price: 49, category: "veg", type: "bread", image: "assets/images/food/bread.jpg" },
  { name: "Lachha Paratha", price: 59, category: "veg", type: "bread", image: "assets/images/food/bread.jpg" },
  { name: "Aloo Paratha", price: 79, category: "veg", type: "bread", image: "assets/images/food/bread.jpg" },
  { name: "Paneer Paratha", price: 99, category: "veg", type: "bread", image: "assets/images/food/bread.jpg" },
  { name: "Kulcha", price: 49, category: "veg", type: "bread", image: "assets/images/food/bread.jpg" },
  { name: "Butter Kulcha", price: 59, category: "veg", type: "bread", image: "assets/images/food/bread.jpg" },
  { name: "Rumali Roti", price: 39, category: "veg", type: "bread", image: "assets/images/food/bread.jpg" },
  { name: "Cheese Naan", price: 79, category: "veg", type: "bread", image: "assets/images/food/bread.jpg" },
  { name: "Stuffed Naan", price: 69, category: "veg", type: "bread", image: "assets/images/food/bread.jpg" },
  { name: "Plain Rice", price: 89, category: "veg", type: "rice", image: "assets/images/food/rice.jpg" },
  { name: "Jeera Rice", price: 99, category: "veg", type: "rice", image: "assets/images/food/rice.jpg" },
  { name: "Veg Pulao", price: 129, category: "veg", type: "rice", image: "assets/images/food/rice.jpg" },
  { name: "Steamed Rice", price: 79, category: "veg", type: "rice", image: "assets/images/food/rice.jpg" },
  { name: "Curd Rice", price: 99, category: "veg", type: "rice", image: "assets/images/food/rice.jpg" },
  { name: "Raita", price: 49, category: "veg", type: "side", image: "assets/images/food/raita.jpg" },

  // Fast Food (nonveg)
  { name: "Veg Burger", price: 99, category: "veg", type: "fastfood", image: "assets/images/food/burger.jpg" },
  { name: "Chicken Burger", price: 129, category: "nonveg", type: "fastfood", image: "assets/images/food/burger.jpg" },
  { name: "Cheese Burger", price: 119, category: "veg", type: "fastfood", image: "assets/images/food/burger.jpg" },
  { name: "Double Patty Burger", price: 159, category: "nonveg", type: "fastfood", image: "assets/images/food/burger.jpg" },
  { name: "French Fries", price: 79, category: "veg", type: "fastfood", image: "assets/images/food/fries.jpg" },
  { name: "Cheese Fries", price: 99, category: "veg", type: "fastfood", image: "assets/images/food/fries.jpg" },
  { name: "Veg Pizza", price: 199, category: "veg", type: "fastfood", image: "assets/images/food/pizza.jpg" },
  { name: "Chicken Pizza", price: 249, category: "nonveg", type: "fastfood", image: "assets/images/food/pizza.jpg" },
  { name: "Margherita Pizza", price: 229, category: "veg", type: "fastfood", image: "assets/images/food/pizza.jpg" },
  { name: "Farmhouse Pizza", price: 299, category: "veg", type: "fastfood", image: "assets/images/food/pizza.jpg" },
  { name: "Pasta White Sauce", price: 179, category: "veg", type: "fastfood", image: "assets/images/food/pasta.jpg" },
  { name: "Pasta Red Sauce", price: 169, category: "veg", type: "fastfood", image: "assets/images/food/pasta.jpg" },
  { name: "Noodles", price: 149, category: "veg", type: "fastfood", image: "assets/images/food/noodles.jpg" },
  { name: "Fried Rice", price: 139, category: "veg", type: "fastfood", image: "assets/images/food/rice.jpg" },
  { name: "Manchurian", price: 159, category: "veg", type: "fastfood", image: "assets/images/food/manchurian.jpg" },
  { name: "Spring Rolls", price: 99, category: "veg", type: "fastfood", image: "assets/images/food/springroll.jpg" },
  { name: "Momos", price: 119, category: "veg", type: "fastfood", image: "assets/images/food/momos.jpg" },
  { name: "Cheese Sandwich", price: 89, category: "veg", type: "fastfood", image: "assets/images/food/sandwich.jpg" },
  { name: "Club Sandwich", price: 129, category: "veg", type: "fastfood", image: "assets/images/food/sandwich.jpg" },
  { name: "Hot Dog", price: 109, category: "veg", type: "fastfood", image: "assets/images/food/hotdog.jpg" },

  // Desserts (veg)
  { name: "Gulab Jamun", price: 49, category: "veg", type: "dessert", image: "assets/images/food/dessert.jpg" },
  { name: "Rasgulla", price: 39, category: "veg", type: "dessert", image: "assets/images/food/dessert.jpg" },
  { name: "Jalebi", price: 59, category: "veg", type: "dessert", image: "assets/images/food/dessert.jpg" },
  { name: "Rabri", price: 69, category: "veg", type: "dessert", image: "assets/images/food/dessert.jpg" },
  { name: "Kheer", price: 79, category: "veg", type: "dessert", image: "assets/images/food/dessert.jpg" },
  { name: "Ice Cream Vanilla", price: 89, category: "veg", type: "dessert", image: "assets/images/food/dessert.jpg" },
  { name: "Ice Cream Chocolate", price: 99, category: "veg", type: "dessert", image: "assets/images/food/dessert.jpg" },
  { name: "Brownie", price: 119, category: "veg", type: "dessert", image: "assets/images/food/dessert.jpg" },
  { name: "Chocolate Cake", price: 149, category: "veg", type: "dessert", image: "assets/images/food/dessert.jpg" },
  { name: "Pastry", price: 79, category: "veg", type: "dessert", image: "assets/images/food/dessert.jpg" },
  { name: "Ladoo", price: 29, category: "veg", type: "dessert", image: "assets/images/food/dessert.jpg" },
  { name: "Barfi", price: 49, category: "veg", type: "dessert", image: "assets/images/food/dessert.jpg" },
  { name: "Rasmalai", price: 59, category: "veg", type: "dessert", image: "assets/images/food/dessert.jpg" },
  { name: "Kulfi", price: 69, category: "veg", type: "dessert", image: "assets/images/food/dessert.jpg" },
  { name: "Falooda", price: 99, category: "veg", type: "dessert", image: "assets/images/food/dessert.jpg" },
  { name: "Cheesecake", price: 169, category: "veg", type: "dessert", image: "assets/images/food/dessert.jpg" },
  { name: "Donuts", price: 89, category: "veg", type: "dessert", image: "assets/images/food/dessert.jpg" },
  { name: "Halwa", price: 79, category: "veg", type: "dessert", image: "assets/images/food/dessert.jpg" },
  { name: "Gajar Halwa", price: 89, category: "veg", type: "dessert", image: "assets/images/food/dessert.jpg" },
  { name: "Pudding", price: 99, category: "veg", type: "dessert", image: "assets/images/food/dessert.jpg" },

  // Beverages (veg)
  { name: "Cold Coffee", price: 79, category: "veg", type: "beverage", image: "assets/images/food/drink.jpg" },
  { name: "Hot Coffee", price: 69, category: "veg", type: "beverage", image: "assets/images/food/drink.jpg" },
  { name: "Tea", price: 39, category: "veg", type: "beverage", image: "assets/images/food/drink.jpg" },
  { name: "Green Tea", price: 49, category: "veg", type: "beverage", image: "assets/images/food/drink.jpg" },
  { name: "Lemon Tea", price: 59, category: "veg", type: "beverage", image: "assets/images/food/drink.jpg" },
  { name: "Milkshake Chocolate", price: 99, category: "veg", type: "beverage", image: "assets/images/food/drink.jpg" },
  { name: "Milkshake Strawberry", price: 99, category: "veg", type: "beverage", image: "assets/images/food/drink.jpg" },
  { name: "Mango Shake", price: 89, category: "veg", type: "beverage", image: "assets/images/food/drink.jpg" },
  { name: "Lassi Sweet", price: 69, category: "veg", type: "beverage", image: "assets/images/food/drink.jpg" },
  { name: "Lassi Salted", price: 69, category: "veg", type: "beverage", image: "assets/images/food/drink.jpg" },
  { name: "Buttermilk", price: 49, category: "veg", type: "beverage", image: "assets/images/food/drink.jpg" },
  { name: "Fresh Lime Soda", price: 59, category: "veg", type: "beverage", image: "assets/images/food/drink.jpg" },
  { name: "Lemon Juice", price: 49, category: "veg", type: "beverage", image: "assets/images/food/drink.jpg" },
  { name: "Orange Juice", price: 79, category: "veg", type: "beverage", image: "assets/images/food/drink.jpg" },
  { name: "Apple Juice", price: 89, category: "veg", type: "beverage", image: "assets/images/food/drink.jpg" },
  { name: "Coconut Water", price: 69, category: "veg", type: "beverage", image: "assets/images/food/drink.jpg" },
  { name: "Soft Drinks", price: 39, category: "veg", type: "beverage", image: "assets/images/food/drink.jpg" },
  { name: "Energy Drink", price: 99, category: "veg", type: "beverage", image: "assets/images/food/drink.jpg" },
  { name: "Iced Tea", price: 79, category: "veg", type: "beverage", image: "assets/images/food/drink.jpg" },
  { name: "Mojito", price: 89, category: "veg", type: "beverage", image: "assets/images/food/drink.jpg" }
];

const container = document.getElementById("foodContainer");
const categoryCards = document.getElementById("categoryCards");
const categoryFilters = document.getElementById("categoryFilters");

const categoryList = [
  { title: "Deal of the Day", tag: "bestseller", image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE1MCIgZmlsbD0iI2ZlZjNmZSIvPjx0ZXh0IHg9IjEwMCIgeT0iODAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSI+8J+RjBEZWFsczwvdGV4dD48L3N2Zz4=" },
  { title: "Hyderabadi Biryani", tag: "biryani", image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE1MCIgZmlsbD0iI2ZlZjNmZSIvPjx0ZXh0IHg9IjEwMCIgeT0iODAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSI+8J+RjBCaXJ5YW5pPC90ZXh0Pjwvc3ZnPg==" },
  { title: "Lucknowi Biryani", tag: "biryani", image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE1MCIgZmlsbD0iI2ZlZjNmZSIvPjx0ZXh0IHg9IjEwMCIgeT0iODAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSI+8J+RjBCaXJ5YW5pPC90ZXh0Pjwvc3ZnPg==" },
  { title: "Kebabs", tag: "kebab", image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE1MCIgZmlsbD0iI2ZlZjNmZSIvPjx0ZXh0IHg9IjEwMCIgeT0iODAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSI+8J+RjBLZWJhYnM8L3RleHQ+PC9zdmc+" },
  { title: "Korma & Curries", tag: "curry", image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE1MCIgZmlsbD0iI2ZlZjNmZSIvPjx0ZXh0IHg9IjEwMCIgeT0iODAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSI+8J+RjBDdXJyeTwvdGV4dD48L3N2Zz4=" },
  { title: "Rolls", tag: "rolls", image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE1MCIgZmlsbD0iI2ZlZjNmZSIvPjx0ZXh0IHg9IjEwMCIgeT0iODAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSI+8J+RjBSb2xsczwvdGV4dD48L3N2Zz4=" },
  { title: "Breads & Extras", tag: "bread", image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE1MCIgZmlsbD0iI2ZlZjNmZSIvPjx0ZXh0IHg9IjEwMCIgeT0iODAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSI+8J+RjFCcmVhZDwvdGV4dD48L3N2Zz4=" },
  { title: "Fast Food", tag: "fastfood", image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE1MCIgZmlsbD0iI2ZlZjNmZSIvPjx0ZXh0IHg9IjEwMCIgeT0iODAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSI+8J+RjBGYXN0IEZvb2Q8L3RleHQ+PC9zdmc+" },
  { title: "Desserts", tag: "dessert", image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE1MCIgZmlsbD0iI2ZlZjNmZSIvPjx0ZXh0IHg9IjEwMCIgeT0iODAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSI+8J+RjBEZXNzZXJ0PC90ZXh0Pjwvc3ZnPg==" },
  { title: "Beverages", tag: "beverage", image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE1MCIgZmlsbD0iI2ZlZjNmZSIvPjx0ZXh0IHg9IjEwMCIgeT0iODAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSI+8J+RjRCZXZlcmFnZXM8L3RleHQ+PC9zdmc+" }
];

function loadCategoryCards() {
  categoryCards.innerHTML = categoryList.map(category => `
    <div class="category-item" data-tag="${category.tag}">
      <div class="category-item__img"><img src="${category.image}" alt="${category.title}"></div>
      <h4>${category.title}</h4>
    </div>
  `).join("");

  document.querySelectorAll('.category-item').forEach(el => {
    el.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
      const filterKey = el.getAttribute('data-tag');
      document.querySelector(`.filter-btn[data-filter="${filterKey}"]`)?.classList.add('active');
      renderFoods(filterKey);
    });
  });
}

function renderFoods(filter = 'all') {
  let filtered = foods;
  if (filter !== 'all') {
    if (filter === 'bestseller') {
      filtered = foods.filter(food => food.category === 'bestseller');
    } else if (filter === 'veg') {
      filtered = foods.filter(food => {
        if (food.category === 'veg') return true;
        if (food.category === 'bestseller') {
          // For bestseller items, determine veg/nonveg from name
          const name = food.name.toLowerCase();
          return name.includes('veg') || name.includes('paneer') || name.includes('mushroom') ||
                 name.includes('dal') || name.includes('rajma') || name.includes('chole') ||
                 name.includes('soya') || name.includes('hara bhara') || name.includes('cheese');
        }
        return false;
      });
    } else if (filter === 'nonveg') {
      filtered = foods.filter(food => {
        if (food.category === 'nonveg') return true;
        if (food.category === 'bestseller') {
          // For bestseller items, determine veg/nonveg from name
          const name = food.name.toLowerCase();
          return name.includes('chicken') || name.includes('mutton') || name.includes('fish') ||
                 name.includes('prawn') || name.includes('egg') || name.includes('butter chicken') ||
                 name.includes('tandoori chicken');
        }
        return false;
      });
    } else {
      // For category cards like biryani, kebab, curry, etc., filter by type
      filtered = foods.filter(food => food.type === filter);
    }
  }

  if (!filtered.length) {
    container.innerHTML = '<p>No items found.</p>';
    return;
  }

  container.innerHTML = filtered.map((food, idx) => {
    const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    const isWishlisted = wishlist.some(item => item.name === food.name);
    return `
      <div class="food-card" onclick="openDishModal(${idx})">
        <img src="${food.image}" alt="${food.name}">
        <button class="wishlist-icon" onclick="event.stopPropagation(); toggleWishlistQuick('${food.name}', ${food.price})" title="Add to Wishlist">
          <span class="heart ${isWishlisted ? 'filled' : ''}">${isWishlisted ? '♥' : '♡'}</span>
        </button>
        <h3>${food.name}</h3>
        <p>₹${food.price}</p>
        <div class="tag">${food.category}</div>
        <button onclick="event.stopPropagation(); addToCart('${food.name}', ${food.price})">Add to Cart</button>
      </div>
    `;
  }).join("");
}

// Store current dish for modal
let currentDish = null;

function openDishModal(index) {
  currentDish = foods[index];
  const modal = document.getElementById('dishModal');
  const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
  const isWishlisted = wishlist.some(item => item.name === currentDish.name);
  
  document.getElementById('modalDishImage').src = currentDish.image;
  document.getElementById('modalDishName').textContent = currentDish.name;
  document.getElementById('modalDishCategory').textContent = `Category: ${currentDish.category} • Type: ${currentDish.type}`;
  document.getElementById('modalDishPrice').textContent = `Price: ₹${currentDish.price}`;
  document.getElementById('modalDishDescription').textContent = `Enjoy delicious ${currentDish.name}. High quality ingredients and authentic taste. Freshly prepared for you.`;
  
  const wishlistBtn = document.getElementById('wishlistBtn');
  wishlistBtn.classList.toggle('wishlisted', isWishlisted);
  wishlistBtn.querySelector('.heart-icon').textContent = isWishlisted ? '♥' : '♡';
  
  modal.style.display = 'block';
  document.body.style.overflow = 'hidden';
}

function closeDishModal() {
  const modal = document.getElementById('dishModal');
  modal.style.display = 'none';
  document.body.style.overflow = 'auto';
  currentDish = null;
}

function toggleWishlist(event) {
  event.stopPropagation();
  if (!currentDish) return;
  
  let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
  const index = wishlist.findIndex(item => item.name === currentDish.name);
  
  if (index > -1) {
    wishlist.splice(index, 1);
  } else {
    wishlist.push({ name: currentDish.name, price: currentDish.price, category: currentDish.category });
  }
  
  localStorage.setItem('wishlist', JSON.stringify(wishlist));
  
  const wishlistBtn = document.getElementById('wishlistBtn');
  wishlistBtn.classList.toggle('wishlisted');
  wishlistBtn.querySelector('.heart-icon').textContent = index > -1 ? '♡' : '♥';
}

function toggleWishlistQuick(name, price) {
  let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
  const index = wishlist.findIndex(item => item.name === name);
  
  if (index > -1) {
    wishlist.splice(index, 1);
  } else {
    const food = foods.find(f => f.name === name);
    wishlist.push({ name, price, category: food?.category });
  }
  
  localStorage.setItem('wishlist', JSON.stringify(wishlist));
  renderFoods();
}

function addToCartFromModal() {
  if (currentDish) {
    addToCart(currentDish.name, currentDish.price);
    closeDishModal();
  }
}

function addToCart(name, price) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push({ name, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(name + " added to cart!");
}

// Close modal when clicking outside
window.onclick = function(event) {
  const modal = document.getElementById('dishModal');
  if (event.target === modal) {
    closeDishModal();
  }
}

function searchFood() {
  const input = document.getElementById("searchInput").value.toLowerCase().trim();
  
  // If search is empty, show all foods
  if (input === '') {
    renderFoods('all');
    return;
  }

  const filtered = foods.filter(f => f.name.toLowerCase().includes(input));

  if (filtered.length === 0) {
    container.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 40px; color: #666;">No dishes found for "' + input + '"</p>';
    container.scrollIntoView({ behavior: 'smooth' });
    return;
  }

  // Clear active filter buttons
  categoryFilters?.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
  
  container.innerHTML = filtered.map((food, idx) => {
    const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    const isWishlisted = wishlist.some(item => item.name === food.name);
    const foodIndex = foods.indexOf(food);
    return `
      <div class="food-card" onclick="openDishModal(${foodIndex})">
        <img src="${food.image}" alt="${food.name}">
        <button class="wishlist-icon" onclick="event.stopPropagation(); toggleWishlistQuick('${food.name}', ${food.price})" title="Add to Wishlist">
          <span class="heart ${isWishlisted ? 'filled' : ''}">${isWishlisted ? '❤' : '♡'}</span>
        </button>
        <h3>${food.name}</h3>
        <p>₹${food.price}</p>
        <div class="tag">${food.category}</div>
        <button onclick="event.stopPropagation(); addToCart('${food.name}', ${food.price})">Add to Cart</button>
      </div>
    `;
  }).join("");
  
  // Scroll to results
  container.scrollIntoView({ behavior: 'smooth' });
}

// Allow Enter key to trigger search
document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.getElementById("searchInput");
  if (searchInput) {
    searchInput.addEventListener('keypress', function(event) {
      if (event.key === 'Enter') {
        searchFood();
      }
    });
  }
});

categoryFilters?.querySelectorAll('.filter-btn').forEach(button => {
  button.addEventListener('click', () => {
    categoryFilters.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    const filter = button.getAttribute('data-filter');
    renderFoods(filter);
  });
});

loadCategoryCards();
renderFoods();