import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Action } from "@remix-run/router";
import axios from "axios";
export const feachAllProduct = createAsyncThunk(
  "property/fetchAll",
  async () => {
    //   const result = await axios.get("http://localhost:8080/products");
    //   return result.data;
    const data = [
      {
        name: "Redi",
        price: 22,
        numberOfRoom: 3,
        views: 234,
        size: 2333,
        year: 2023,
      },
    ];
    return data;
  }
);


const propertySlice = createSlice({
  name: "property",
  initialState: { products: [], status: " " },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(feachAllProduct.fulfilled, (state, action) => {
      console.log(action.payload);
      state.products = action.payload;
      state.status = "completed";
    });
    builder.addCase(feachAllProduct.pending, (state) => {
      state.status = "pending";
    });
  },
});
export const { reducer } = propertySlice;
