import React from "react";
import App from "./App";
import { Provider as ReduxProvider } from "react-redux";
import configureStore from "../redux/configureStore";
import { BrowserRouter as Router } from "react-router-dom";

const store = configureStore();

function Root() {
  return (
    <ReduxProvider store={store}>
      <Router>
        <App />
      </Router>
    </ReduxProvider>
  );
}

export default Root;
