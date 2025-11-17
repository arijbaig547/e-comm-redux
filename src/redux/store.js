import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlices/cartSlice";
import productReducer from "./productSlices/productSlice"; // only if you want

const store = configureStore({
    reducer: {
        cart: cartReducer,
        products: productReducer // optional
    }
});

export default store; // ✅ default export
