import React, {createRef, useState} from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import PropertyEditPage from "./PropertyEditPage";
import RequestProperty from "../customer/RequestProperty";
import PropertyDetailsPage from "./PropertyDetailsPage";

export default function EditProperty(props) {
    const [show, setShow] = useState(false);

    const handleEdit = () => setShow(false);

    const handleEditClick = () => setShow(true);

    return (
        <div>
            <div>
                <p>

                    <Button style={{padding: "9px", margin: "20px"}} variant="primary" onClick={handleEditClick}>
                        Edit Property</Button>
                </p>
            </div>

            <PropertyEditPage show={show} handleClose={handleEdit} id={props.id}/>
        </div>
    );
}
    export function MoreDetails(props) {
        const [show, setShow] = useState(false);
        const valeRef = createRef('default');
        const handleClose = function () {
            setShow(false);
        } ;

        const handleFavListClick = () => setShow(true);

        return (
            <div>
                <div>
                    <p>
                        <Button style={{padding: "9px", margin: "20px"}} variant="primary" onClick={handleFavListClick} >
                            More Details</Button>
                    </p>
                </div>

                <PropertyDetailsPage show={show} handleClose={handleClose} id={props.id} />
            </div>
        );
}
