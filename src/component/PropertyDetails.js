import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { CloseButton } from "react-bootstrap";
import Table from "react-bootstrap/Table";
// import "./assets/property.css";
import "../assets/Property.css";
import PropertyImages from "./PropertyImages";
import { BigPropertyImages } from "./PropertyImages";
import { Button } from "react-bootstrap";
import { createSlice } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { feachProduct } from "./propertySlice";

import UncontrolledExample from "./Slider";

export default function PropertiesDetail() {
  const propertyState = useSelector((state) => state.property);
  console.log(propertyState.products);
  //   const personState = useSelector((state) => state.person)
  //   console.log(propertyState.property.status);
  // when ever we load this component we will get this property
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(feachProduct());
  }, []);

  return (
    <div>
      <div>
        <CloseButton />
      </div>
      <Table striped bordered hover>
        <thead></thead>
        <tbody>
          <tr>
            <td rowSpan={3}>
              <UncontrolledExample />
            </td>
            <td colSpan={2}>
              <div>
                <div>
                  {/* {propertyState} */}
                  {propertyState.status == "pending" ? (
                    <div>Loading</div>
                  ) : (
                    <div> name - {propertyState.products?.name}</div>
                  )}
                </div>
                <p>{propertyState.products?.name}</p>
                <p>Mark</p>
                <p>Mark</p>
              </div>
              <div>
                <p></p>
                <p>
                  <Button variant="outline-danger">Add to Favorite List</Button>
                </p>
              </div>
            </td>
          </tr>
          <tr>
            <td className="subImag">
              <PropertyImages />
            </td>
            <td>
              {" "}
              <PropertyImages />
            </td>
          </tr>
          <tr>
            <td>
              {" "}
              <PropertyImages />
            </td>
            <td>
              {" "}
              <PropertyImages />
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}
