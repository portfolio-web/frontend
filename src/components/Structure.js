import React from "react";
import TopNavBar from "./TopNavBar";
import Home from "./sections/home/Home";
import Resume from "./sections/resume/Resume";
import Portfolio from "./sections/portfolio/Portfolio";
import Contact from "./sections/contact/Contact";
import { BrowserRouter as Router } from "react-router-dom";
import { breakPoint } from "../others/values";

function Structure() {
  return (
    <Router>
      <div id="totalContainer">
        <TopNavBar
          breakPoint={breakPoint}
          contentContainerId="mainColumn"
          totalPageContainerId="totalContainer"
        />
        <div id="mainColumn" className="main-column">
          <Home>Home</Home>
          <Resume>Resume</Resume>
          <Contact>Contact</Contact>
          <Portfolio>Portfolio</Portfolio>
        </div>
      </div>
    </Router>
  );
}

export default Structure;
