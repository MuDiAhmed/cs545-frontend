import React from 'react';
import AdminDashBoardCustomers from './AdminDashBoardCustomers';
import AdminDashboardProperties from './AdminDashBoardProperties';
import AdminGraph from './AdminGraph';
import './../../Style.css';

export default function AdminDashBoard(){

    return(
        <div className="dashboard--pro">
            
            <h4 className="h4AdminDashBoard">Number of Customers and Registered Properties in Chart:</h4>
            <AdminGraph /> 
            <hr/>
            <h4 className="h4AdminDashBoard">Last 10 Properties Rented:</h4>
            <AdminDashboardProperties />
            <hr></hr>
            <h4 className="h4AdminDashBoard">Last 10 Recent Customers:</h4>
            <AdminDashBoardCustomers />
            <hr/>
            
        </div>
    )
}