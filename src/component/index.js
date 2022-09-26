import {RouterProvider, createBrowserRouter} from "react-router-dom";
import Footer from "./shared/Footer";
import Header from "./shared/Header";
import Routes from "./Routes";


export default function Index() {
    const router = createBrowserRouter(Routes);
    return (
        <div>
            <Header></Header>
            <RouterProvider router={router}/>
            <Footer></Footer>
        </div>
    );
}