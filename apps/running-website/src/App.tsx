import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "shared-data-layer/dist/index";
import AppNavigator from "./navigation/AppNavigator";

function App() {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}

export default App;
