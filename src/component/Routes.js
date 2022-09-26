import Admin from "./admin";
import AdminDashBoard from "./admin/AdminDashBoard";
import AdminPassReset from "./admin/AdminPassReset";
import AdminManageCustomer from "./admin/AdminManageCustomer";
import AdminManageOwner from "./admin/AdminManageOwner";
import AdminManageProperties from "./admin/AdminManageProperties";

export default [
    {
        path: "/admin",
        element: <Admin />,
        children: [
            {
                path: "dashboard",
                element: <AdminDashBoard/>
            },
            {
                path:"profile",
                element: <AdminPassReset />
            },
            {
                path:"customers",
                element: <AdminManageCustomer />
            },
            {
                path:"owners",
                element: <AdminManageOwner />
            },
            {
                path:"properties",
                element: <AdminManageProperties />
            }    
        ]


    },
]