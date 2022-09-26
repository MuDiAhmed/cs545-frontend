import React from 'react';
import Badge from 'react-bootstrap/Badge';
import AdminDashBoardCustomers from './AdminDashBoardCustomers';
import AdminDashboardProperties from './AdminDashBoardProperties';
import AdminGraph from './AdminGraph';
export default function AdminDashBoard(){
    return(
        <div className="dashboard--pro">


            <hr />
            <h3><Badge bg="primary">Number of Customers and Registered Properties in Chart:</Badge></h3>
            <hr />
            <AdminGraph /> 
            <hr />
            <h3><Badge bg="primary">Last 10 Properties Rented:</Badge></h3>
            <hr />
            <AdminDashboardProperties />
            <hr />
            <h3><Badge bg="primary">Last 10 Recent Registered Customers:</Badge></h3>
            <hr />
            <AdminDashBoardCustomers />
            <hr/>
            
        </div>
    )
}