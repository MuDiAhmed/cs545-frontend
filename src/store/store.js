import { configureStore } from "@reduxjs/toolkit";
import propertySlice from "../component/propertySlice";
import { reducer as propertyReducer } from "./propertySlicer";

export const store = configureStore({
  reducer: {
     property: propertySlice.reducer
  }
});
