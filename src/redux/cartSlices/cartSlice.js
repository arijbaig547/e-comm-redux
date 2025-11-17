// redux/cartSlices/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: []
  },
  reducers: {
    addItem: (state, action) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.qty += 1;
      } else {
        state.items.push(action.payload);
      }
    },
    deleteItem: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    increaseQty: (state, action) => {
      const item = state.items.find(item => item.id === action.payload);
      if (item) {
        item.qty += 1;
      }
    },
    decreaseQty: (state, action) => {
      const item = state.items.find(item => item.id === action.payload);
      if (item && item.qty > 1) {
        item.qty -= 1;
      }
    },
    clearCart: (state) => {
      state.items = [];
    }
  }
});

export const { addItem, deleteItem, increaseQty, decreaseQty, clearCart } = cartSlice.actions;
export default cartSlice.reducer;