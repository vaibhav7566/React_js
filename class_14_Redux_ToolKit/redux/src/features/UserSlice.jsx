import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name : 'user',
    initialState : {
        value : null,
    },
    reducers:{
        addname : (state,action) =>{
            state.value = action.payload;
        },
    },
})

export const {addname} = userSlice.actions;
export default userSlice.reducer;