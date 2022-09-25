import React from 'react';
import AdminDashBoardProperties from './AdminDashBoardProperties';
import AdminDashBoardCustomers from './AdminDashBoardCustomers';
export default function AdminDashBoard(){
    return(
        <div className=".dashboard--pro">
            <hr></hr>
            <h4 style={{textAlign:"left"}}>Last 10 Properties Rented</h4>
            <AdminDashBoardProperties />
            <hr></hr>
            <h4 style={{textAlign:"left"}}>Last 10 Recent Customers</h4>
            <AdminDashBoardCustomers />
        </div>
    )
}