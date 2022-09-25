import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Action } from "@remix-run/router";
import axios from "axios";
export const feachProduct = createAsyncThunk("property/fetchAll", 
    async () => {
  const result = await axios.get("http://localhost:8080/products");
  return result.data;
});

const propertySlice = createSlice({
  name: "property",
  initialState: { products: [], status: " " },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(feachProduct.fulfilled, (state, action) => {
      state.products = action.payload;
      state.status = "completed";
    });
    builder.addCase(feachProduct.pending, (state) => {
      state.status = "pending";
    });
  },
});
export default propertySlice;
