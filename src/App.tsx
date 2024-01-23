import { Provider } from "react-redux";
// import "./App.css";
import Body from "./component/Routes/Body";
import appStore from "./store/store";

function App() {
  return (
    <>
      <Provider store={appStore}>
        <Body />
      </Provider>
    </>
  );
}

export default App;
