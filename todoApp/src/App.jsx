import store from "../redux/store";
import "./App.css";
import {Provider} from 'react-redux';

function App() {
  return (
    < Provider store={store}>
      <h1 className="text-5xl">CODING WITH JENIPHER</h1>
    </Provider>
  );
}

export default App;
