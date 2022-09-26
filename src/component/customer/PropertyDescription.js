import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import PropertyImages from "./PropertyImages";
import { BigPropertyImages } from "./PropertyImages";

import { useDispatch, useSelector } from "react-redux";
import { feachProduct } from "../../store/propertySlicer";

export default function PropertyDescriptor() {
  const propertyState = useSelector((state) => state.property);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(feachProduct());
  }, []);

  return (
    <div>
      <div>
        <div class ='row'>

          <div class="col-sm-6">
            <div>
              {propertyState.status == "pending" ? (
                <div>Loading</div>
              ) : (
                <div> Price :${propertyState.products?.price}</div>
              )}
            </div>
            <div>
              {propertyState.status == "pending" ? (
                <div>Loading</div>
              ) : (
                <div> name - {propertyState.products?.name}</div>
              )}
            </div>
            <div>
              {propertyState.status == "pending" ? (
                <div>Loading</div>
              ) : (
                <div> numberOfRoom:{propertyState.products?.numberOfRoom}</div>
              )}
            </div>
            <div>
              {propertyState.status == "pending" ? (
                <div>Loading</div>
              ) : (
                <div>
                  <p>Views:{propertyState.products?.views}</p>
                </div>
              )}
            </div>
          </div>


          <div class="col-sm-6">
            <div >
              {propertyState.status == "pending" ? (
                <div>Loading</div>
              ) : (
                <div> Price :${propertyState.products?.price}</div>
              )}
            </div>
            <div>
              {propertyState.status == "pending" ? (
                <div>Loading</div>
              ) : (
                <div> Price :${propertyState.products?.price}</div>
              )}
            </div>
            <div>
              {propertyState.status == "pending" ? (
                <div>Loading</div>
              ) : (
                <div> Price :${propertyState.products?.price}</div>
              )}
            </div>


          </div>
        </div>
      </div>
    </div>
  );
}
