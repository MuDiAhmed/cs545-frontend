import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Action } from "@remix-run/router";
import axios from "axios";


export const feachAllProperty = createAsyncThunk("property/fetchAll", async () => {
    //   const result = await axios.get("http://localhost:8080/products");
    //   return result.data;
    const data = [
        {
          image: "https://images.unsplash.com/photo-1628745277862-bc0b2d68c50c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
          price: 138.580,
          numberOfRoom: 3,
          yearOfBuild: 1990,
          size: 2333
        },
        {
          image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
          price: 567.580,
          numberOfRoom: 1,
          yearOfBuild: 2001,
          size: 928917
        },
        {
          image: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/brewster-mcleod-architects-1486154143.jpg?crop=1.00xw:1.00xh;0,0&resize=980:*",
          price: 876.100,
          numberOfRoom: 5,
          yearOfBuild: 2014,
          size: 52627
        },
        {
          image: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/fireplace-9-1573505526.jpg?crop=1.00xw:0.751xh;0.00160xw,0.0791xh&resize=980:*",
          price: 987.432,
          numberOfRoom: 2,
          yearOfBuild: 2000,
          size: 89762
        },
        {
          image: "https://hips.hearstapps.com/hmg-prod/images/laura-gonzalez-03-1663594324.jpg?crop=1.00xw:0.751xh;0,0.115xh&resize=1120:*",
          price: 989282,
          numberOfRoom: 4,
          yearOfBuild: 2019,
          size: 72872
        },
        {
          image: "https://hips.hearstapps.com/hmg-prod/images/sandra-benhamou-galerie-vauclair-parisdesignweek-1663605057.jpg?resize=980:*",
          price: 100.980,
          numberOfRoom: 7,
          yearOfBuild: 2010,
          size: 78928
        },
        {
          image: "https://hips.hearstapps.com/hmg-prod/images/greetings-from-greece-carwan-gallery-takeover-courtesy-of-india-mahdavi-3-1663619011.jpg?resize=980:*",
          price: 567.580,
          numberOfRoom: 1,
          yearOfBuild: 54,
          size: 2312
        },
        {
          image: "https://hips.hearstapps.com/hmg-prod/images/pattern-block-01-1663595830.jpg?resize=980:*",
          price: 800.800,
          numberOfRoom: 2,
          yearOfBuild: 2022,
          size: 26378
        },
        {
          image: "https://hips.hearstapps.com/hmg-prod/images/boon-001-1663601652.jpg?resize=980:*",
          price: 900.100,
          numberOfRoom: 6,
          yearOfBuild: 2020,
          size: 76543
        },
        {
          image: "https://hips.hearstapps.com/hmg-prod/images/theoreme3537atmickael-llorca-1663596922.jpg?resize=980:*",
          price:  670.890,
          numberOfRoom: 3,
          yearOfBuild: 2013,
          size: 87292
        }
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
