import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from "react-redux";
import { fetchAllCustomer } from "./../../store/customerSlicer";
import React, { useEffect } from "react";

function AdminDashBoardCustomers() {

  const propertyState = useSelector((state) => state.customer);

  console.log(propertyState.customers);

  const dispatch = useDispatch();

  useEffect(() => {

    dispatch(fetchAllCustomer());

  }, []);



  return (
    <div>
      <Table responsive="sm">
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
          <tr>
            <td>1</td>
            <td>{propertyState?.customers[0]?.name}</td>
            <td>{propertyState?.customers[0]?.email}</td>
            <td>{propertyState?.customers[0]?.contact}</td>
            <td>{propertyState?.customers[0]?.address}</td>

          </tr>
          <tr>
            <td>2</td>
            <td>{propertyState?.customers[2]?.name}</td>
            <td>{propertyState?.customers[2]?.email}</td>
            <td>{propertyState?.customers[2]?.contact}</td>
            <td>{propertyState?.customers[2]?.address}</td>

          </tr>
          <tr>
            <td>3</td>
            <td>{propertyState?.customers[1]?.name}</td>
            <td>{propertyState?.customers[2]?.email}</td>
            <td>{propertyState?.customers[2]?.contact}</td>
            <td>{propertyState?.customers[2]?.address}</td>

          </tr>
          <tr>
            <td>4</td>
            <td>{propertyState?.customers[2]?.name}</td>
            <td>{propertyState?.customers[2]?.email}</td>
            <td>{propertyState?.customers[2]?.contact}</td>
            <td>{propertyState?.customers[2]?.address}</td>

          </tr>
          <tr>
            <td>5</td>
            <td>{propertyState?.customers[2]?.name}</td>
            <td>{propertyState?.customers[2]?.email}</td>
            <td>{propertyState?.customers[2]?.contact}</td>
            <td>{propertyState?.customers[2]?.address}</td>

          </tr>
          <tr>
            <td>6</td>
            <td>{propertyState?.customers[2]?.name}</td>
            <td>{propertyState?.customers[2]?.email}</td>
            <td>{propertyState?.customers[2]?.contact}</td>
            <td>{propertyState?.customers[2]?.address}</td>

          </tr>
          <tr>
            <td>7</td>
            <td>{propertyState?.customers[2]?.name}</td>
            <td>{propertyState?.customers[2]?.email}</td>
            <td>{propertyState?.customers[2]?.contact}</td>
            <td>{propertyState?.customers[2]?.address}</td>

          </tr>
          <tr>
            <td>8</td>
            <td>{propertyState?.customers[2]?.name}</td>
            <td>{propertyState?.customers[2]?.email}</td>
            <td>{propertyState?.customers[2]?.contact}</td>
            <td>{propertyState?.customers[2]?.address}</td>

          </tr>
          <tr>
            <td>9</td>
            <td>{propertyState?.customers[2]?.name}</td>
            <td>{propertyState?.customers[2]?.email}</td>
            <td>{propertyState?.customers[2]?.contact}</td>
            <td>{propertyState?.customers[2]?.address}</td>

          </tr>
          <tr>
            <td>10</td>
            <td>{propertyState?.customers[2]?.name}</td>
            <td>{propertyState?.customers[2]?.email}</td>
            <td>{propertyState?.customers[2]?.contact}</td>
            <td>{propertyState?.customers[2]?.address}</td>

          </tr>

        </tbody>
      </Table>

    </div>
  );
}

export default AdminDashBoardCustomers;