import { configureStore } from "@reduxjs/toolkit";
import { reducer as propertyReducer } from "./propertySlicer";
import { reducer as customerReducer } from "./customerSlicer";
import { reducer as propertyAdminReducer} from "./propertySlicerAdmin";
import {reducer as singlePropertyReducer } from "./SingleCustomerSlicer";
import {reducer as favoriteReducer } from "./favoritePropertySlicer";
import {reducer as ownersPropertyReducer } from "./ownerPropertySlicer";


export const store = configureStore({
  reducer: {
     property: propertyReducer,
     customer: customerReducer,
     propertyAdmin: propertyAdminReducer,
      singleCustomer : singlePropertyReducer,
      favorite :favoriteReducer,
      ownersProperty:ownersPropertyReducer,
      ownerSingleProperty:ownersPropertyReducer
  }
});
