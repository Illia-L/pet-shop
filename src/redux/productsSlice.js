import { createSlice } from "@reduxjs/toolkit";

const savedCart = localStorage.getItem('cart');
const initialState = savedCart ? JSON.parse(savedCart) : {
  items: [],
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;

      const existingItem = state.items.find((item) => item.id === newItem.id);

      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({ ...newItem, quantity: 1 });
      }

      state.totalAmount += newItem.price;

      localStorage.setItem('cart', JSON.stringify(state));
    },

    removeItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem) {
        state.items = state.items.filter((item) => item.id !== id);
        state.totalAmount -= existingItem.price * existingItem.quantity;
      }

      localStorage.setItem('cart', JSON.stringify(state));
    },

    incrementQuantity: (state, action) => {
      const existingProduct = state.items.find(item => item.id === action.payload);
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      if (existingProduct) {
        existingProduct.quantity += 1;
        state.totalAmount += existingItem.price;
      }

      localStorage.setItem('cart', JSON.stringify(state));
    },
    decrementQuantity: (state, action) => {
      const existingProduct = state.items.find(item => item.id === action.payload);
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      if (existingProduct && existingProduct.quantity > 1) {
        existingProduct.quantity -= 1; 
        state.totalAmount -= existingItem.price;
      }

      localStorage.setItem('cart', JSON.stringify(state));
    },

    clearCart: (state) => {
      state.items = [];
      state.totalAmount = 0;

      localStorage.removeItem('cart');
    }
  },
});

export const { addItemToCart, removeItemFromCart, decrementQuantity, incrementQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;