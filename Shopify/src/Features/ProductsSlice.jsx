import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
    name: 'products',
    initialState: {
        products: [],
    },
    reducers:{
        setProduct : (state,action) => {
           state.products = action.payload
        }

    }
})

export const {setProduct} = productsSlice.actions;
export default productsSlice.reducer;