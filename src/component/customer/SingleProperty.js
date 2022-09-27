import PropertyDescription from "./PropertyDescription";
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {feachAllProduct, feachProduct} from "../../store/propertySlicer";
import DisplaySingleProperty from "./DisplaySingleProperty";

export default function SingleProerty() {
//TODO fetch and display it here.
  const propertyList = useSelector((state) => state.property);
  const properties = propertyList.products;
  console.log(propertyList.products);

  const dispatch = useDispatch();

    useEffect(() => {
    dispatch(feachAllProduct());
  }, []);


  return (

    <div class="container text-center">
      <div class="row row-cols-2">
        <div class="col">
          {/*<img*/}
          {/*  className="img1"*/}
          {/*  src="https://yourintegrityhome.com/wp-content/uploads/2021/03/Home-Cover-Image-1.jpg"*/}
          {/*  alt="Property1"*/}
          {/*  width="280"*/}
          {/*  height="170"*/}
          {/*/>*/}
        </div>
        <div class="col">
          <div>
            {properties.map(prop => (
                <DisplaySingleProperty property = {prop} />
            ))}
          </div>
          {/*<PropertyDescription />{" "}*/}
        </div>
      </div>
    </div>
  );
}
