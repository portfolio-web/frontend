import React from "react";
import TopNavBar from "./TopNavBar";

import Home from "./sections/home/Home";
import Contact from "./sections/contact/Contact";

import { breakPoint } from "../others/values";

function App() {
  return (
    <div id="totalContainer">
      <TopNavBar
        breakPoint={breakPoint}
        contentContainerId="mainColumn"
        totalPageContainerId="totalContainer"
      />
      <div id="mainColumn">
        <Home>Home</Home>
        <div className="black-section" />
        <Contact>Contact</Contact>
        <div className="black-section" />
      </div>
    </div>
  );
}

export default App;
