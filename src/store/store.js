import { configureStore } from "@reduxjs/toolkit";
import { reducer as propertyReducer } from "./propertySlicer";
import { reducer as customerReducer } from "./customerSlicer";

export const store = configureStore({
  reducer: {
     property: propertyReducer,
     customer: customerReducer
  }
});
