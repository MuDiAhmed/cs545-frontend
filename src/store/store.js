
import { reducer as customerReducerAdmin } from "./customerSlicerAdmin";
import {configureStore} from "@reduxjs/toolkit";
import {reducer as propertyReducer} from "./propertySlicer";
// import {reducer as customerReducer} from "../customerSlicer";
import {reducer as userReducer} from "./userSlicer";
import { reducer as propertyAdminReducer} from "./propertySlicerAdmin";
import { reducer as ownerAdminReducer} from "./ownerSlicerAdmin";
import { reducer as customerGraphReducer} from "./graphSlicerAdmin"

export const store = configureStore({
    reducer: {
        property: propertyReducer,
        customer: customerReducerAdmin,
        user: userReducer,
        propertyAdmin: propertyAdminReducer,
        owner: ownerAdminReducer,
        graphCustomer: customerGraphReducer,
    }
});
