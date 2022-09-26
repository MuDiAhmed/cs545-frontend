import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Action } from "@remix-run/router";
import axios from "axios";


export const feachAllProperty = createAsyncThunk("property/fetchAll", async () => {
    //   const result = await axios.get("http://localhost:8080/products");
    //   return result.data;
    const data = [

      {
        price: 22000,
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


const propertySlice = createSlice({
  name:"property",
  initialState: {properties: {}, status: 'hi'},
  reducers: {},
  extraReducers: (builder) => {
      builder.addCase(feachAllProperty.fulfilled, (state, action) => {
          state.properties = action.payload;
          state.status = 'completed'
      });
      builder.addCase(feachAllProperty.pending,  (state) => {
          state.status = 'pending'
      });
  }
})

export const { reducer } = propertySlice;
