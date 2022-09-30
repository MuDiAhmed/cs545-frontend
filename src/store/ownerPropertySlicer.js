import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Action } from "@remix-run/router";
import axios from "axios";
import {useParams} from "react-router-dom";

export const fetchAllOwnersProperty = createAsyncThunk(
    "property/fetchAll",


    async (id) => {
        //   const result = await axios.get("http://localhost:8080/owners/{id}");
        //   return result.data;
        // id
        const data = [
            {
                picture:"https://s.yimg.com/ny/api/res/1.2/e69g_dqborwvwqTU9de8pg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTMyMQ--/https://s.yimg.com/uu/api/res/1.2/SS3GTek3.J98LAMNhRE09Q--~B/aD01Mjc7dz0xMDUwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/house_beautiful_336/60ecb223c28669b241d14842826921c8",
                price: 22000,
                numberOfRooms: 3,
                numberOfBathrooms:2,
                type:"rent",
                location:"California",
                views: 234,
                size: 23333,
                year: 2023,
            },
            {
                picture:"https://www.safewise.com/app/uploads/featured-image-first-home.jpg",

                price: 232000,
                numberOfRooms: 3,
                numberOfBathrooms:2,
                type:"rent",
                location:"Dc",
                views: 234,
                size: 23333,
                year: 2023,
            },
            {
                picture:"https://ahpweb.blob.core.windows.net/ahpcomimages/buildingcenters/90/images/4242.jpg",

                price: 652000,
                numberOfRooms: 3,
                numberOfBathrooms:2,
                type:"rent",
                location:"Iowa ",
                views: 234,
                size: 23333,
                year: 2023,
            },
            {
                picture:"https://www.one-automation.com/wp-content/uploads/2022/02/Fibaro-System-in-Dubai.jpg",

                price: 5320690,
                numberOfRooms: 3,
                numberOfBathrooms:2,
                type:"rent",
                location:"Virginia",
                views: 234,
                size: 23333,
                year: 2023,
            },

        ];
        return data;
    }
);


const ownerPropertySlice = createSlice({
    name: "property",
    initialState: { properties: [], status: " " },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchAllOwnersProperty.fulfilled, (state, action) => {
            console.log(action.payload);
            state.properties = action.payload;
            state.status = "completed";
        });
        builder.addCase(fetchAllOwnersProperty.pending, (state) => {
            state.status = "pending";
        });

    },
});
export const { reducer } = ownerPropertySlice;