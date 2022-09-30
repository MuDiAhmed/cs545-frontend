import React from "react";

export default function Property(props) {

    const value = props.property;

    //TODO Display single property

    return(
        <div >
            <div class="d-flex justify-content-start" >
                <div>
                    <img
                        className="img1"
                        src={value.picture}
                        alt="Property1"
                        width="280"
                        height="170"
                    />
                    <br/>
                </div>

                <div>
                    <div className="h5">Price :$ {value.price}</div>
                    <div>numberOfBathrooms:{value.numberOfBathrooms}</div>
                    <div>numberOfBathrooms: {value.numberOfRooms}</div>
                    <div>Size : {value.size}</div>
                    <div>Views: {value.view}</div>

                    <br/>
                </div>
                <br/>
            </div>

        </div>
    )
}