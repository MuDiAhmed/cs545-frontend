import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Action } from "@remix-run/router";
import axios from "axios";
import {useParams} from "react-router-dom";

export const feachAllProduct = createAsyncThunk(
  "property/fetchAll",
  async () => {
    //   const result = await axios.get("http://localhost:8080/products");
    //   return result.data;
    // id
    const data = [
      {
        picture:"https://bobbyhadz.com/images/blog/react-prevent-multiple-button-clicks/thumbnail.webp",
        price: 22000,
        numberOfRooms: 3,
        numberOfBathrooms:2,
        views: 234,
        size: 23333,
        year: 2023,
      },
      {
        price: 232000,
        numberOfRooms: 3,
        numberOfBathrooms:2,
        views: 234,
        size: 23333,
        year: 2023,
      },
      {
        price: 652000,
        numberOfRooms: 3,
        numberOfBathrooms:2,
        views: 234,
        size: 23333,
        year: 2023,
      },
      {
        price: 5320690,
        numberOfRooms: 3,
        numberOfBathrooms:2,
        views: 234,
        size: 23333,
        year: 2023,
      },
    ];
    return data;
  }
);

export const feachProduct = createAsyncThunk("property/fetch", async (id) => {
  //   const result = await axios.get("http://localhost:8080/products/{id}");
  //   return result.data;

  // const {v} = useParams();
  
  const data = {
   
    price: 22000,
    numberOfRooms: 3,
    numberOfBathrooms:2,
    views: 234,
    size: 23333,
    year: 2023,
  };
  return data;
});

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

    builder.addCase(feachProduct.fulfilled, (state, action) => {
      console.log(action.payload);
      state.products = action.payload;
      state.status = "completed";
    });
    builder.addCase(feachProduct.pending, (state) => {
      state.status = "pending";
    });
  },
});
export const { reducer } = propertySlice;