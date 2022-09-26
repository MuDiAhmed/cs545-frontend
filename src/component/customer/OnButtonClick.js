import { Popover } from "bootstrap";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import FavoriteModal from "./FavoriteModal";

export default function OnClickFavoriteList() {
  //   return <div>Router to Favorite List </div>;
  console.log("FavoriteList");

  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <FavoriteModal
      // setShow={setShow}
      show={show}
      handleClose={handleClose}
      // handleShow={handleShow}
    />
  );
}
export function OnClickRequest() {
  //   return <div>Request for Rent/Buy </div>;
  console.log("Request");
}
export function OnClickClose() {
  //   return <div>Request for Rent/Buy </div>;
  console.log("closed");
  <Link to={"/dashboard"}></Link>;
}
