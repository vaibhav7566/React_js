import { createSlice } from "@reduxjs/toolkit";

const authslice = createSlice({
    name: "auth",
    initialState: {
        user: JSON.parse(localStorage.getItem("users")) || null,
    },
    reducers: {
      addUser: (state,action) => {
        state.user = action.payload;
      },
      removeUser: (state) => {
        state.user = null;
      }
    }
})

export const {addUser,removeUser} = authslice.actions;
export default authslice.reducer;