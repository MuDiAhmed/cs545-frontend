import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";


import { useDispatch, useSelector } from "react-redux";

import UncontrolledExample from "./Slider";
import OnClickFavoriteList, {
  OnClickRequest,
  OnClickClose,
} from "./OnButtonClick";
import { feachProduct } from "../../store/propertySlicer";
import FavoriteList, { Request } from "./PropertyNavigate";
import PropertyDescription from "./PropertyDescription";

export default function PropertiesDetail() {
  const propertyState = useSelector((state) => state.property);
  console.log(propertyState.products);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(feachProduct());
  }, []);

  return (
    <div>
      <div class="  "  >
        <button 
          type="button"
          class="btn-close "
          aria-label="Close"
          onClick={OnClickClose}
        ></button>
      </div>
      
      <div class="container" style ={{minHeight: 100 + 'vh', marginTop:70+'px'}} >
      <div class="d-flex justify-content-start align-items-center row ">
        <div class="col-sm-7" >
          {" "}
          <UncontrolledExample />{" "}
        </div>

        <div class="d-flex justify-content-between row col-sm-5 ">
          <div class="col-sm-8">
            <PropertyDescription />
          </div>
          <div class="col-sm-4">
            <FavoriteList />
            <Request />
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
