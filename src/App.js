import "./App.css";
import axios from "axios";
import { Provider } from "react-redux";
import { store } from "./store/store";
import Base from "./component/Base";
import { BrowserRouter } from "react-router-dom";
import Dashboard from "./component/Dashbord";

function App() {
  axios.defaults.baseURL = "http://localhost:8080/api/";
  return (
    <Provider store={store}>
      <BrowserRouter>
     
        <div className="App">
           </div>
           <Dashboard/>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
