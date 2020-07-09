import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "shared-data-layer/dist/index";
import Landing from "./landing/landing";

function App() {
  return (
    <Provider store={store}>
      <Landing />
    </Provider>
  );
}

export default App;
