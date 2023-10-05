import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

export const fetchProducts = createAsyncThunk(
  'products',
  async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    const products = response.data.map((product) => ({
      id: product.id,
      name: product.title,
      price: product.price,
      image: product.image,
    }));
return products
  }
)
