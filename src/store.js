import { configureStore } from "@reduxjs/toolkit";
import surveyReducer from "./surveySlice";
import productReducer from './productsSlice'

export const store = configureStore({
  reducer: {
    survey: surveyReducer,
    product: productReducer,
  },
});
