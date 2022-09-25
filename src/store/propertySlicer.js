import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {createSlice} from "@reduxjs/toolkit";

export const fetchProperties = createAsyncThunk("property/fetchAll", async () => {
    const result= await axios.get("http://localhost:8080/products/1");
    console.log( 'resultdata', result.data);
    return result.data;
})

const propertiesSlice = createSlice({
    name:"property",
    initialState: {property: {}, status: 'hi'},
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchProperties.fulfilled, (state, action) => {
            state.property = action.payload;
            state.status = 'completed'
        });
        builder.addCase(fetchProperties.pending,  (state) => {
            state.status = 'pending'
        })
    }
})

export const { reducer } = propertiesSlice;