import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {createSlice} from "@reduxjs/toolkit";

export const fetchProperties = createAsyncThunk("property/fetchAll", async () => {
    const { data } = await axios.get("properties/")
    return data;
})

const propertiesSlice = createSlice({
    name:"post",
    initialState: {posts: [], status: ''},
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchProperties.fulfilled, (state, action) => {
            state.properties = action.payload;
            state.status = 'completed'
        });
        builder.addCase(fetchProperties.pending,  (state) => {
            state.status = 'pending'
        })
    }
})

export const { reducer } = propertiesSlice;