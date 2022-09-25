import Admin from "./admin";
import Dashboard from "./admin/Dashboard";

export default [
    {
        path: "/admin",
        element: <Admin/>,
        children: [
            {
                path: "dashboard",
                element: <Dashboard/>,
            }
        ]


    },
]