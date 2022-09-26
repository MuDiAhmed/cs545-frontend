import Admin from "./admin";
import AdminDashBoard from "./admin/AdminDashBoard";
import Dashboard from "./customer/Dashboard"
import AdminPassReset from "./admin/AdminPassReset";
import Addproperty from "./customer/AddProperty";

export default [
    {
        path: "/admin",
        element: <Admin />,
        children: [
            {
                path: "dashboard",
                element: <AdminDashBoard/>
            },
            // {
            //     path:"properties",
            //     element: <div>Something</div>
            // },
            {
                path:"profile",
                element: <AdminPassReset />
            }
        ]


    },
    {
        path: "/dashboard",
        element: <Dashboard />
    },
    {
        path:'/property/add',
        element: <Addproperty/>
        

    }
    
]