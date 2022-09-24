import {Route, Routes, BrowserRouter} from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./page/Home";

export default function Base() {
    return (
        <BrowserRouter>
            <div>
                <Header></Header>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    {/*<Route path="/todos/:id" element={<TodoDetails/>}/>*/}
                    {/*<Route path="/todos-create" element={<TodoForm/>}/>*/}
                </Routes>
                <Footer></Footer>
            </div>
        </BrowserRouter>
    );
}