import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from "react-redux";
import { fetchProperties } from "./../../store/propertySlicer";
import React, { useEffect } from "react";

function AdminDashBoardCustomers() {

  const propertyState = useSelector((state) => state.property);

  // console.log(propertyState.property);

  const dispatch = useDispatch();

  useEffect(() => {

    dispatch(fetchProperties());

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
            <td>{propertyState?.properties[0]?.name}</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>

          </tr>
          <tr>
            <td>2</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>

          </tr>
          <tr>
            <td>3</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>

          </tr>
          <tr>
            <td>4</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>

          </tr>
          <tr>
            <td>5</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>

          </tr>
          <tr>
            <td>6</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>

          </tr>
          <tr>
            <td>7</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>

          </tr>
          <tr>
            <td>8</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>

          </tr>
          <tr>
            <td>9</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>

          </tr>
          <tr>
            <td>10</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>

          </tr>

        </tbody>
      </Table>

    </div>
  );
}

export default AdminDashBoardCustomers;