import React from "react";
import PropertyDescription from "./PropertyDescription";

export default function DisplaySingleProperty(props) {
    const value = props.property;
    console.log(value);
    //TODO Display single property

    return(
        <div className="container text-center">
                <div className="row row-cols-2">
                    <div className="col">
                        <img
                            className="img1"
                            src="https://yourintegrityhome.com/wp-content/uploads/2021/03/Home-Cover-Image-1.jpg"
                            alt="Property1"
                            width="280"
                            height="170"
                        />
                    </div>
                    <div className="col">
                        <div>
                            <div  class="h5" >Price :$ {value.price}</div>
                            <div>numberOfBathrooms:{value.numberOfBathrooms}</div>
                           <div>numberOfBathrooms: {value.numberOfRooms}</div>
                           <div>Size : {value.size}</div>
                           <div>Views: {value.view}</div>
                        </div>

                    </div>
                </div>

        </div>
    )
}