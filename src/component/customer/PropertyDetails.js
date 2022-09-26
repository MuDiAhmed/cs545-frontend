import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Table from "react-bootstrap/Table";

import "./Property.css";

import PropertyImages from "./PropertyImages";

import { Button } from "react-bootstrap";
import { createSlice } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";

import UncontrolledExample from "./Slider";
import OnClickFavoriteList, {
  OnClickRequest,
  OnClickClose,
} from "./OnButtonClick";
import { feachProduct } from "../../store/propertySlicer";
import FavoriteList, { Request } from "./PropertyNavigate";
import PropertyDescriptor from "./PropertyDescription";

export default function PropertiesDetail() {
  const propertyState = useSelector((state) => state.property);
  console.log(propertyState.products);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(feachProduct());
  }, []);

  return (
    <div>
      <div >
        <button 
          type="button"
          class="btn-close align-items-end flex-column p-2"
          aria-label="Close"
          onClick={OnClickClose}
        ></button>
      </div>
      
      <div class="container" style ={{minHeight: 100 + 'vh', marginTop:70+'px'}} >
      <div class="d-flex justify-content-start align-items-center row ">
        <div class="col-sm-8" >
          {" "}
          <UncontrolledExample />{" "}
        </div>

        <div class="d-flex justify-content-between row col-sm-4 ">
          <div class="col-sm-8">
            <PropertyDescriptor />
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
