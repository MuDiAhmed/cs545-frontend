import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";



export const fetchCustomer = createAsyncThunk("customer/fetchAll", async () => {
    // const { data } = await axios.get("properties/")
    const data ={
            name : "Hiwot",
            email : "RetaH@miu.edu",
            contact : "Ottumwa",
            address : 20298182018
        };
    return data;

});

const SinglCustomersSlice = createSlice({
    name:"customer",
    initialState: {customers: [], status: 'hi'},
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