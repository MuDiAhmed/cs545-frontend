import Admin from "./admin";
import AdminDashBoard from "./admin/AdminDashBoard";
import Dashboard from "./customer/Dashboard"
import AdminPassReset from "./admin/AdminPassReset";
import Addproperty from "./customer/AddProperty";
import AdminManageCustomer from "./admin/AdminManageCustomer";
import AdminManageOwner from "./admin/AdminManageOwner";
import AdminManageProperties from "./admin/AdminManageProperties";
import PropertiesDetail from "./customer/PropertyDetails";
import LoginCallback from "./auth/LoginCallback";
import Index from "./index";
import LogoutCallback from "./auth/LogoutCallback";
import CustomerFavoriteList from "./customer/CustomerFavoriteList";

export default [
    {
        path: "/",
        element: <Index/>,
        children: [
            {
                path: "login-callback",
                element: <LoginCallback/>
            },
            {
                path: "logout-callback",
                element: <LogoutCallback/>
            },
            {
                path: "admin",
                element: <Admin/>,
                children: [
                    {
                        path: "dashboard",
                        element: <AdminDashBoard/>
                    },
                    {
                        path: "profile",
                        element: <AdminPassReset/>
                    },
                    {
                        path: "customers",
                        element: <AdminManageCustomer/>
                    },
                    {
                        path: "owners",
                        element: <AdminManageOwner/>
                    },
                    {
                        path: "properties",
                        element: <AdminManageProperties/>
                    }
                ]
            },
            {
                path: "/dashboard",
                element: <Dashboard/>
            },
            {
                path: "/products",
                element: <PropertiesDetail/>
            },
            {
                path: "/dashboard",
                element: <Dashboard/>
            },
            {
                path: '/property/add',
                element: <Addproperty/>

            },
            {
                path: "/favoriteList",
                element: <CustomerFavoriteList/>
            }
        ]
    }
]