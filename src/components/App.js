import React from "react";
import TopNavBar from "./TopNavBar";
import Home from "./sections/home/Home";
import Resume from "./sections/resume/Resume";
import Portfolio from "./sections/portfolio/Portfolio";
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
      <div id="mainColumn" className="main-column">
        <Home>Home</Home>
        <Resume>Resume</Resume>
        <Portfolio>Portfolio</Portfolio>
        <Contact>Contact</Contact>
        <div className="black-end"></div>
      </div>
    </div>
  );
}

export default App;
