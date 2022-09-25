import React from 'react';
import AdminDashBoardCustomers from './DashboardCustomers';
import AdminCards from './DashboardProperties'
export default function Dashboard(){
    return(
        <div className=".dashboard--pro">
            
            <h4 style={{textAlign:"left"}}>Last 10 Properties Rented</h4>
            <AdminCards />
            <hr></hr>
            <h4 style={{textAlign:"left"}}>Last 10 Recent Customers</h4>
            <AdminDashBoardCustomers />
        </div>
    )
}