import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/CounterSlice";
import userReducer from '../features/UserSlice';

const store = configureStore({
  reducer: {
    count : counterReducer,
    user : userReducer,
  },
});

export default store;