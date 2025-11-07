import { createSlice } from "@reduxjs/toolkit";

const auth = createSlice({
    name: 'user' ,
    initialState: {
        user: JSON.parse(localStorage.getItem('User')) || null,
    },
    reducers: {
        addUser: (state,action) => {
            state.user = action.payload
        },
        removeUser: (state) => {
            state.user = null
        }
    }
})

export const {addUser,removeUser} = auth.actions;
export default auth.reducer;




