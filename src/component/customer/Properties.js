import React from "react";
import Property from "./Property";


export default function Properties(props) {

const value = props.properties;

    //TODO Display single property

    return(
        <div >
            <div >
                <h3 class="font-weight-bold" >{value.name}</h3>
                    <div>
                        <div>
                            {value.property.map((i) =>
                                <Property property={i}/>
                            )}
                            <br/>

                        </div>

                    </div>
                </div>

        </div>
    )
}