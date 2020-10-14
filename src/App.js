import React from "react";
import "./App.css";
import Basket from "./components/Basket";
import Vase from "./components/Stuff/Vase";
import Chocolate from "./components/Stuff/Chocolate";
import { Provider } from "react-redux";
import initStore from "./store";

function App() {
  const store = initStore();
  return (
    <Provider store={store}>
      <Basket />
      <Vase />
      <Chocolate />
    </Provider>
  );
}

export default App;
