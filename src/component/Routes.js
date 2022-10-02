import Admin from "./admin";
import AdminDashBoard from "./admin/AdminDashBoard";
import Dashboard from "./customer/Dashboard"
import AdminPassReset from "./admin/AdminPassReset";
import AdminManageCustomer from "./admin/AdminManageCustomer";
import AdminManageOwner from "./admin/AdminManageOwner";
import AdminManageProperties from "./admin/AdminManageProperties";
import PropertiesDetail from "./customer/PropertyDetails";
import CustomerFavoriteList from "./customer/CustomerFavoriteList";
import OwnerDashboard from "./owner/OwnerDashboard";
import OwnerProperty from "./owner/OwnerProperty";
import OwnerFilteredProperty from "./owner/OwnerFilteredProperty";


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
    {
        path: "/dashboard",
        element: <Dashboard />
    },
    {
        // "/products",
        path: "/property/:id",
        element: <PropertiesDetail />
    },
    {
        path: "/favoriteList",
        element: <CustomerFavoriteList/>
    },
    {
        path: "/owners/:id/",
        element: <OwnerDashboard/>
    },
    {

        path: "owner/property/:id",
        element: <OwnerProperty />
    },
    {
        path: "owners/:id/:id",
        element: <OwnerFilteredProperty />
    }
    
]