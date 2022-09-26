import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchAllCustomer = createAsyncThunk("customer/fetchAll", async () => {
    // const { data } = await axios.get("properties/")
    const data = [
        {
            name : "Hiwot",
            email : "RetaH@miu.edu",
            address : "Fairfield",
            contact : 20298182018
        },
        {
            customerName : "Hamida",
            customerEmail : "hammaqso@miu.edu",
            customerAddress : "Fairfield",
            customerContact : 6417892938
        },
        {
            name : "Jamila",
            email : "jamilamaqsoudi@miu.edu",
            address : "Maryland",
            contact : 20298182018
        },
        {
            customerName : "Hamida",
            customerEmail : "hammaqso@miu.edu",
            customerAddress : "Fairfield",
            customerContact : 6417892938
        },
        {
            customerName : "Hamida",
            customerEmail : "hammaqso@miu.edu",
            customerAddress : "Fairfield",
            customerContact : 6417892938
        }
]
    return data;
})

const customersSlice = createSlice({
    name:"customer",
    initialState: {customers: {}, status: 'hi'},
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchAllCustomer.fulfilled, (state, action) => {
            state.customers = action.payload;
            state.status = 'completed'
        });
        builder.addCase(fetchAllCustomer.pending,  (state) => {
            state.status = 'pending'
        })
    }
})

export const { reducer } = customersSlice;