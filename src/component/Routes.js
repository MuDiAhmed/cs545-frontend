import Admin from "./admin";
import AdminDashBoard from "./admin/AdminDashBoard";
import Dashboard from "./customer/Dashboard"
import AdminPassReset from "./admin/AdminPassReset";
import PropertiesDetail from "./customer/PropertyDetails";
import LoginCallback from "./auth/LoginCallback";
import Index from "./index";
import LogoutCallback from "./auth/LogoutCallback";

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
                    // {
                    //     path:"properties",
                    //     element: <div>Something</div>
                    // },
                    {
                        path: "profile",
                        element: <AdminPassReset/>
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
            }
        ]
    },
]