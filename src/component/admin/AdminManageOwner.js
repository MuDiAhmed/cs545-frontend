import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from "react-redux";
import { fetchAllOwner, deleteOwner } from "../../store/ownerSlicerAdmin";
import React, { useEffect} from "react";
import Button from 'react-bootstrap/Button';

function AdminManageOwner() {

  const {owners,status} = useSelector((state) => state.owner);
  console.log(owners);


  const dispatch = useDispatch();

  useEffect(() => {

    dispatch(fetchAllOwner());

  }, [dispatch]);



  const deleteOwnerById = (index) => {
    const idx = owners[index].id;
    dispatch(deleteOwner(idx));
  }


  return (
    <div>
      <h3 style={{backgroundColor: "#1872F0",textAlign: "left",padding:"9px",borderRadius: "5px",color:"white",fontSize: "20px"}}>Manage Owners</h3>
      <hr />
        <Table responsive="sm" size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Owner Name</th>
            <th>Owner Email</th>
            <th>Owner Address</th>
            <th>Owner Contact</th>
          </tr>
        </thead>
        <tbody>

           {
                owners.map((item,i) =>(
                   <tr key={i}>
                                       {
                      <td>{item.id}</td>
                    }
                    {
                      <td>{item.name}</td>
                    }
                                        {
                      <td>{item.email}</td>
                    }
                                        {
                      <td>{item.contact}</td>
                    }
                                        {
                      <td>{item.address}</td>
                    }

                     {
                      <td><Button variant="danger" onClick={()=>deleteOwnerById(i)}>Delete Owner</Button>{' '}</td>
                    }

                   </tr>
                ))
           }
         </tbody>
      </Table>

    </div>
  );
}

export default AdminManageOwner;
