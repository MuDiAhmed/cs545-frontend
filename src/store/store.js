import { configureStore } from "@reduxjs/toolkit";
import { reducer as propertyReducer } from "./propertySlicer";
import { reducer as customerReducer } from "./customerSlicerAdmin";
import { reducer as propertyAdminReducer} from "./propertySlicerAdmin";
import { reducer as ownerAdminReducer} from "./ownerSlicerAdmin";

export const store = configureStore({
  reducer: {
     property: propertyReducer,
     customer: customerReducer,
     propertyAdmin: propertyAdminReducer,
     owner: ownerAdminReducer
  }
});
