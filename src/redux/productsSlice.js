import { createSlice } from "@reduxjs/toolkit";
import { products } from "../fake-data";
import { createAction } from "@reduxjs/toolkit";

const slice = createSlice({
  name: 'products',
  initialState: {
    items: products,
  },
  reducers: {
    addProduct: (state, action) => {
      return {
        ...state,
        products: {
          items: [...state.items, action.payload]
        }
      }
    },
    deleteProduct: (state, action) => {
      return {
        ...state,
        items: state.items.filter((product) => 
          product.id !== action.payload),
      };
    },
  }
})

export const { addProduct, deleteProduct } = slice.actions;

export default slice.reducer;

// export const addProduct = createAction("products/addProduct");
// export const deleteProduct = createAction("products/deleteProduct");

// const initialState = {
//   products: {
// 	  items: products,
//   },
// };

// export default function productsReducer (state = initialState, action) {
//   switch (action.type) {

//     case "products/addProduct": {
//       return {
//         ...state,
//         products: {
//           items: [...state.products.items, action.payload]
//         }
//       };
//     }

//     case "products/deleteProduct": {
//       return {
//         ...state,
//         products: {
//           items: state.products.items.filter((product) => 
//             product.id !== action.payload),
//         }
//       };
//     }

//     default: 
//       return state;
//   }
// };