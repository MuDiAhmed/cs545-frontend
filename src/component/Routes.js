import Admin from "./admin";
import AdminDashBoard from "./admin/AdminDashBoard";
import AdminPassRestButton from "./admin/AdminPassRestButton";

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
                path:"properties",
                element: <div>Something</div>
            },
            {
                path:"profile",
                element: <AdminPassRestButton />
            }
                
        ]


    },
]