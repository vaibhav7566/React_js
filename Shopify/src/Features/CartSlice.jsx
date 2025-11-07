import { createSlice } from "@reduxjs/toolkit";
import Cart from "../Pages/Cart";

const cartSlice = createSlice({
  name: "cartSlice",
  initialState: {
    cartitems: [],
  },

  reducers: {
    addToCart: (state, action) => {
      // Step 1: check if item already exists
      const itemExist = state.cartitems.find(
        (elem) => elem.pro.id === action.payload.pro.id
      );

      // Step 2: if found, increase quantity
      if (itemExist) {
        itemExist.quantity += 1;
      }
      // Step 3: else, add new product with quantity 1
      else {
        state.cartitems.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
         let itemExist = state.cartitems.find((elem) => elem.pro.id === action.payload.pro.id);
         if(itemExist){
            if(itemExist.quantity >1){
                itemExist.quantity -= 1;
            }else if(itemExist.quantity === 1){
             state.cartitems = state.cartitems.filter((elem) => elem.pro.id !== itemExist.pro.id)
            }
         }
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
