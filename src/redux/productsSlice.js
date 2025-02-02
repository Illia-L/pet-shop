import { createSlice } from '@reduxjs/toolkit';

const initialState = {
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
    },

    removeItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem) {
        state.items = state.items.filter((item) => item.id !== id);
        state.totalAmount -= existingItem.price * existingItem.quantity;
      }
    },

    incrementQuantity: (state, action) => {
      const existingProduct = state.items.find(item => item.id === action.payload);
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      if (existingProduct) {
        existingProduct.quantity += 1;
        state.totalAmount += existingItem.price;
      }
    },
    decrementQuantity: (state, action) => {
      const existingProduct = state.items.find(item => item.id === action.payload);
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      if (existingProduct && existingProduct.quantity > 1) {
        existingProduct.quantity -= 1; 
        state.totalAmount -= existingItem.price;
      }
    },

    clearCart: (state) => {
      state.items = [];
      state.totalAmount = 0;
    }
  },
});

export const { addItemToCart, removeItemFromCart, decrementQuantity, incrementQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;