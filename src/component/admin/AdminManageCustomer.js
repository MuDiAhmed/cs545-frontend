import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from "react-redux";
import { fetchAllCustomer, deleteCustomer } from "../../store/customerSlicerAdmin";
import React, { useEffect} from "react";
import Button from 'react-bootstrap/Button';

function AdminManageCustomer() {

  const {customers,status} = useSelector((state) => state.customer);

 


  const dispatch = useDispatch();

  useEffect(() => {

    dispatch(fetchAllCustomer());

  }, [dispatch]);



  const deleteCustomerById = (index) => {
    const idx = customers[index].id; 
    dispatch(deleteCustomer(idx));
    }


  return (
    <div>
      <h3 style={{backgroundColor: "#1872F0",textAlign: "left",padding:"9px",borderRadius: "5px",color:"white",fontSize: "20px"}}>Manage Customers</h3>
      <hr />
        <Table responsive="sm" size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Customer Name</th>
            <th>Customer Email</th>
            <th>Customer Address</th>
            <th>Customer Contact</th>
          </tr>
        </thead>
        <tbody>

           {
                customers.map((item,i) =>(
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
                      <td><Button variant="danger" onClick={()=>deleteCustomerById(i)}>Delete Customer</Button>{' '}</td>
                    }
                    
                   </tr>
                ))
           }
         </tbody>
      </Table>

    </div>
  );
}

export default AdminManageCustomer;