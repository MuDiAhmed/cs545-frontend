import React from 'react';
import AdminDashBoardCustomers from './AdminDashBoardCustomers';
import AdminDashboardProperties from './AdminDashboardProperties'
export default function AdminDashBoard(){
    return(
        <div className=".dashboard--pro">
            
            <h4 style={{textAlign:"left"}}>Last 10 Properties Rented</h4>
            <AdminDashboardProperties />
            <hr></hr>
            <h4 style={{textAlign:"left"}}>Last 10 Recent Customers</h4>
            <AdminDashBoardCustomers />
        </div>
    )
}