import { createSlice } from "@reduxjs/toolkit";
import { fetchProducts } from "./productThunk";
import { addProduct, removeProduct ,updateProduct} from './actions';

const initialState = {
  products: [],
  status: "idle",
  error: null,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = action.payload;

      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addProduct,(state,action)=>{
        state.products.push(action.payload);
      })
      .addCase(removeProduct,(state,action)=>{
        state.products = state.products.filter(product => product.id !== action.payload);
      })
      .addCase(updateProduct,(state,action)=>{
        const { id, updatedProduct } = action.payload;
        const productIndex = state.products.findIndex(product => product.id === id);
        if (productIndex !== -1) {
          state.products[productIndex] = { ...state.products[productIndex], ...updatedProduct };
      }
      })
  },
});

export const selectProducts = (state) => state.product.products;
export default productSlice.reducer;
