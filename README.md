# 🌟 LUXE — Premium E-Commerce Store (React + Redux)

**LUXE** is a premium, modern e-commerce shopping application built with **React**, **Redux Toolkit**, and **Tailwind CSS**.  
It uses **FakeStoreAPI** to fetch real products and provides a complete shopping experience with cart, search, product modal, checkout flow, and order confirmation.

---

## 🚀 Features

### 🔍 Product System
- Fetches products from **FakeStore API**
- Beautiful responsive product grid
- Premium-style **Product Preview Modal**
- **Instant Search** with live filtering

### 🛒 Smart Cart System
- Add items to cart
- Increase / decrease quantity
- Remove products
- Auto-calculated totals
- Mobile-friendly **slide cart**
- Fully syncs with **Redux Toolkit**

### 💳 Checkout System
- Create a fake order
- Generates **Order ID**
- Generates **Tracking Number**
- Shows **Estimated Delivery Date**
- Clears cart after order confirmation

### 📱 100% Responsive UI
- Smooth animations  
- Gradient-based premium UI  
- Tailwind CSS design system  
- Mobile-responsive drawer cart  

---

## 🧰 Technologies Used

| Category | Tech |
|---------|------|
| Frontend | React (Vite or CRA) |
| State Management | Redux Toolkit |
| Styling | Tailwind CSS |
| API | FakeStore API |
| Icons | Heroicons / Custom SVG |
| UX | Animations, Modals, Responsive UI |

---

## 📦 Folder Structure

/src
│── /redux
│── /store
│ ├── /productSlices
│ │ └── productSlice.js
│ ├── /cartSlices
│ │ └── cartSlice.js
│── App.jsx
│── main.jsx
│── index.css

yaml
Copy code

---

## 🔧 Installation & Setup

# Clone the repo
git clone https://github.com/arijbaig547/e-comm-redux

# Go inside project
cd luxe-store

# Install dependencies
npm install

# Start project
npm run dev
⚙️ Redux Slices
📌 Product Slice
Stores all products

Fetches from FakeStoreAPI once

Manages global product state

🧺 Cart Slice
Add item
Delete item
Increase / decrease quantity
Clear cart
Automatically updates totals

🔗 API Used
Fake Store API
Returns dummy products such as electronics, fashion, and jewelry.

Endpoint Used:
https://fakestoreapi.com/products



https://fakestoreapi.com/products
📸 Screenshots:
🖼️ Home / Product Grid
<img width="1280" height="1024" alt="image" src="https://github.com/user-attachments/assets/b12e7990-c3da-48f6-9102-6d9f6085b4be" />
🛒 Cart + Product Page
<img width="1280" height="1024" alt="image" src="https://github.com/user-attachments/assets/44c0b768-1876-4642-8a7a-88fe90958095" />


🎯 Future Improvements
Login system
Stripe payment integration
Dark mode
Related products section
Categories filter

✨ Author
Mirza Arij Baig
Frontend Developer ✨
HTML • CSS • JavaScript • React • Redux • Tailwind

