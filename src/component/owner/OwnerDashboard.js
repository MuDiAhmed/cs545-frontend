import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {fetchCustomer} from "../../store/SingleCustomerSlicer";
import {fetchAllOwnersProperty} from "../../store/ownerPropertySlicer";
import OwnerSingleProperty from "./OwnerSingleProperty";
import Button from "react-bootstrap/Button";
import FavoriteModal from "../customer/FavoriteModal";
import Card from 'react-bootstrap/Card';

export default function OwnerDashboard() {


    const value = useSelector((state) => state.ownersProperty);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAllOwnersProperty());
    },[]);
    const ownerProperties =value.properties

    console.log(value.properties)


    return(
        <div>
            <div> <h3> Owner Dashboard </h3> </div>
            <h3 style={{backgroundColor: "#1872F0",textAlign: "left",padding:"9px",borderRadius: "1px",color:"white",fontSize: "17px"}}> Properties add by you</h3>

            <Card border="primary" style={{ width: '95rem', padding:"9px", marginLeft:"110px", fontWeight: "bold", fontSize: "20px",}}>

                <Card.Body>
                    {/*<Card.Title>Primary Card Title</Card.Title>*/}
                    <Card.Text>
                        <div style={{ width: '95rem', padding:"9px", marginLeft:"150px", fontWeight: "bold", fontSize: "20px",}}>
                            Search By :
                            <select>
                                <option> id</option>
                                <option> name</option>
                                <option> location</option>
                            </select>
                            <input
                                type="text"

                                style={{ width: "300px" }}
                            />
                        </div>
                    </Card.Text>
                </Card.Body>
            </Card>



            <div>{ownerProperties.map((property) =>
                <OwnerSingleProperty property = {property}/>
            )}</div>


        </div>
    )
}