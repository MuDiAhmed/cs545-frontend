import OnClickFavoriteList, { OnClickRequest } from "./OnButtonClick";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import FavoriteModal from "./FavoriteModal";

export default function FavoriteList() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const handleFavListClick = () => setShow(true);

  return (
    <div>
      <div>
        <p>
          <Button variant="primary" onClick={handleFavListClick}>
            Add to Favorite List
          </Button>
        </p>
      </div>

      <FavoriteModal show={show} handleClose={handleClose} />
    </div>
  );
}
export function Request() {
  return (
    <div>
      <div>
        <p>
          <Button variant="primary" onClick={OnClickRequest}>
            Request for Rent/Buy
          </Button>
        </p>
      </div>
    </div>
  );
}
