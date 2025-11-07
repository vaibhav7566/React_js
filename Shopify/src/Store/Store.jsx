import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../Features/AuthSlice";
import cartReducer from "../Features/CartSlice";
import productsReducer from '../Features/ProductsSlice';
const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
    products : productsReducer
  },
});

export default store;
