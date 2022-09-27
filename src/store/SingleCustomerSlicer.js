import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {useParams} from "react-router-dom";



export const fetchCustomer = createAsyncThunk("customer/fetchAll", async () => {
    // const { data } = await axios.get("properties/")

    const data ={

            name : "Hiwot",
            email : "RetaH@miu.edu",
            contact : "Ottumwa",
            address : 20298182018,
        favoritList:[{
            id: "1",
            name: "Iowa",
            prop:[]
        },{
            id: "2",
            name: "Virginia",
            prop:[]
        }
        ]
        };
    return data;

});

const SinglCustomersSlice = createSlice({
    name:"customer",
    initialState: {customers: [], status: 'hiii'},
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchCustomer.fulfilled, (state, action) => {
            state.customers = action.payload;
            state.status = 'completed'

        });
        builder.addCase(fetchCustomer.pending,  (state) => {
            state.status = 'pending'
        })
    }
})

export const { reducer } = SinglCustomersSlice;