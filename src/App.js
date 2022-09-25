import './App.css';
import axios from "axios";
import {Provider} from "react-redux";
import {store} from "./store/store";
import Index from "./component";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  axios.defaults.baseURL = "http://localhost:8080/api/";
  return (
      <Provider store={store}>
        <div className="App">
          <Index></Index>
        </div>
      </Provider>
  );
}

export default App;
