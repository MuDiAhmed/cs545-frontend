import {configureStore} from "@reduxjs/toolkit";
import { reducer as propertyReducer } from "./propertySlicer";

export const store = configureStore({
    reducer:{
        properties: propertyReducer,
    }
})