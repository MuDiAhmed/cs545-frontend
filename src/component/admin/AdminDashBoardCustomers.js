import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from "react-redux";
import { fetchAllCustomer } from "./../../store/customerSlicer";
import React, { useEffect } from "react";

function AdminDashBoardCustomers() {

  const {customers, status} = useSelector((state) => state.customer);

  // console.log(propertyState.customers);
  // console.log(propertyState.customers.name);

  const dispatch = useDispatch();

  useEffect(() => {

    dispatch(fetchAllCustomer());

  }, []);

  const data = [
    {
        name : "Hiwot",
        email : "RetaH@miu.edu",
        contact : "Ottumwa",
        address : 20298182018
    },
    {
        name : "Hamida",
        email : "hammaqso@miu.edu",
        contact : "Fairfield",
        address : 6417892938
    },
    {
        name : "Jamila",
        email : "jamilamaqsoudi@miu.edu",
        contact : "Maryland",
        address : 20298182018
    },
    {
        name : "John",
        email : "doejohn@miu.edu",
        contact : "Burlington",
        address : 6417892938
    },
    {
        name : "Sara",
        email : "sarasmith@miu.edu",
        contact : "Iowa",
        address : 6417892938
    },
    {
      name : "Ahmed",
      email : "ahmedAli@miu.edu",
      contact : "Virginia",
      address : 827129992
  }];

  return (
    <div>
            <Table responsive="sm">
        <thead>
          <tr>
            <th>#</th>
            {/* <th>{propertyState.customers?.name}</th> */}
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
                      <td>{i+1}</td>
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
  
                   </tr>
                ))
           }
         </tbody>
      </Table>

    </div>
  );
}

export default AdminDashBoardCustomers;