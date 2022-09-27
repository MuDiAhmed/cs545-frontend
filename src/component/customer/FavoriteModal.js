import React, {useEffect, useState} from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import {useDispatch, useSelector} from "react-redux";
import {feachProduct} from "../../store/propertySlicer";
import {fetchCustomer} from "../../store/SingleCustomerSlicer";
import axios from "axios";
import {hover} from "@testing-library/user-event/dist/hover";
import {updateFavList} from "../../store/updateFavListSlicer";

export default function FavoriteModal({ show, handleClose,id }) {
  const [favorit, setFavorit] = useState({
    id: "default",
    name: "default",
  });
  const [newFavorite, setNewFavorite] = useState("default");

  const favoriteList = useSelector((state) => state.singleCustomer);
  const favoriteListOfCus = favoriteList.customers.favoritList;


  // favoriteListOfCus.map((item) =>{
  //     console.log(item.name);
  //     //TODO display on Favorite list as a button
  // })

  console.log(favoriteList.customers.favoritList);


  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCustomer());
  }, []);

  const onAddFavoriteList = (e) => {

    setNewFavorite(e.target.value);
    console.log(e.target.value);
    console.log(favoriteList.products?.price);
    const requestBody = {
      id:4,
      name:e.target.value,
      prop:[]

    }
dispatch(addNewFavoriteList (requestBody));

  };
  const onselectFav = (e) => {
    const requestBody = {
      name: e.target.name,
      proporty: {
        id:id
      }

    }
    //TODO axios post request
    console.log('favorite list selected');
dispatch(updateFavList(requestBody))

  };

  const addNewFavoriteList = (fav) => {
    console.log("add");
    // axios.post()
    // TODO  post this new user
    setNewFavorite('default');
    console.log(id);
    // dispatch(addNewFavoriteList())
  };

  const onSaveChanges = () => {


 console.log("save change");
  }

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Favorite List</Modal.Title>
        </Modal.Header>
        <Modal.Body>

            <ul>
              {favoriteListOfCus.map(fav => (
                  <li onClick={() =>onselectFav(fav)}>{fav.name}</li>

              ))}
            </ul>

        </Modal.Body>
        <Modal.Body>
          <form>
            <div class="container text-center">
              <div class="row">
                <div class="col-sm-8">
                  <input
                    type="text"
                    value={newFavorite}
                    onChange={onAddFavoriteList}
                    style={{ width: "300px" }}
                  />
                </div>
                <div class="col-sm-4">
                  <Button variant="primary" onClick={addNewFavoriteList}>
                    add
                  </Button>
                </div>
              </div>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick= { () => {onSaveChanges(); handleClose();}}>

            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
