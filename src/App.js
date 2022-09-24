import './App.css';
import axios from "axios";
import {Provider} from "react-redux";
import {store} from "./store/store";
import Base from "./component/Base";

function App() {
  axios.defaults.baseURL = "http://localhost:8080/api/";
  return (
      <Provider store={store}>
        <div className="App">
          <Base></Base>
        </div>
      </Provider>
  );
}

export default App;
