import './App.css';
import axios from "axios";
import {Provider} from "react-redux";
import {store} from "./store/store";
import Base from "./component/Base";
import 'bootstrap/dist/css/bootstrap.min.css';

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
