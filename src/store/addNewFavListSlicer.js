import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

export const addNewFavListSlicer = createAsyncThunk(
    "customer/favoriteList",
    async () => {
        // await axios.put("user/favorite-list",{ requestBody});
    }

)
// const addFavoriteListSlice = creat




const newFavoriteList = createSlice({
    name:"favoriteList",
    initialState:{favoriteList:[], status:""},
    reducers:{},
    extraReducers:(builder) => {
        builder.addCase(addNewFavListSlicer.fulfilled,(state) =>{
            state.status = "completed";
            console.log(state.status);
        });
        builder.addCase(addNewFavListSlicer.pending,(state) => {
            state.status = "pending";
            console.log(state.status);
        });
    }
})