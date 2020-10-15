import React from "react";
import "./App.css";
import Basket from "./components/Basket";
import Vase from "./components/Stuff/Vase";
import Chocolate from "./components/Stuff/Chocolate";
import { Provider } from "react-redux";
import initStore from "./store";
import TotalCount from "./components/TotalCount";
import { BrowserRouter} from "react-router-dom";
import {Route} from "react-router";
import TotalCost from "./components/TotalCost";
import ItemNameList from "./components/ItemNameList";
import Discount from "./components/Discount";

function App() {
  const store = initStore();
  return (
    <Provider store={store}>
        <BrowserRouter>
      <Basket />
      <TotalCount />
      <TotalCost />
      <Discount/>
      <ItemNameList/>
      <Vase />
      <Chocolate />
{/*
          <Route path='/Buy' component={Buy}/>
*/}
        </BrowserRouter>
    </Provider>
  );
}

export default App;
