🌟 LUXE — Premium E-Commerce Store (React + Redux)

LUXE is a modern e-commerce shopping app built with React, Redux Toolkit, and Tailwind CSS.
It fetches real products from FakeStoreAPI and gives a complete shopping experience with a cart, product modal, search, checkout, and order confirmation.

🚀 Features
🔍 Product System

Fetches products from FakeStore API

Beautiful product grid

Product preview modal (premium style)

Search instantly filters products

🛒 Smart Cart System

Add to cart

Increase / decrease quantity

Remove item

Auto calculate total

Mobile-friendly slide cart

Fully synced using Redux

💳 Checkout System

Creates fake order

Generates Order ID

Generates Tracking Number

Shows Estimated Delivery Date

Clears cart after order

📱 100% Responsive UI

Smooth animations

Premium gradient UI

Tailwind design system

Mobile cart drawer

🧰 Technologies Used
Category	Tech
Frontend	React (Vite or CRA)
State Management	Redux Toolkit
Styling	Tailwind CSS
API	FakeStore API
Icons	Heroicons / SVG
UX	Animations, Modals, Responsive UI
📦 Folder Structure
/src
│── /redux
│     ├── /productSlices
│     │      └── productSlice.js
│     ├── /cartSlices
│     │      └── cartSlice.js
│── App.jsx
│── main.jsx
│── index.css

🔧 Installation & Setup
# Clone the repo
git clone https://github.com/your-username/luxe-store.git

# Go inside project
cd luxe-store

# Install dependencies
npm install

# Start project
npm run dev

⚙️ Redux Slices
Product Slice

Stores all products

Fetched once from FakeStoreAPI

Cart Slice

Add item

Delete item

Increase quantity

Decrease quantity

Clear cart

Auto update totals

🔗 API Used

Fake Store API
Returns dummy products like electronics, clothes, jewelry, etc.

Endpoint used:

https://fakestoreapi.com/products

📸 Screenshots (Optional)

You can add screenshots like:

<img width="1280" height="1024" alt="image" src="https://github.com/user-attachments/assets/b12e7990-c3da-48f6-9102-6d9f6085b4be" />
<img width="1280" height="1024" alt="image" src="https://github.com/user-attachments/assets/44c0b768-1876-4642-8a7a-88fe90958095" />



🎯 Future Improvements

Login system

Payments (Stripe)

Dark mode

Related products

Categories filter

✨ Author

Mirza Arij Baig
Premium Frontend Developer ✨
HTML • CSS • JavaScript • React • Redux • Tailwind
