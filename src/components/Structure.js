import React from "react";
import TopNavBar from "./TopNavBar";
import { Switch, Route } from "react-router-dom";
import Home from "./sections/home/Home";
import Resume from "./sections/resume/Resume";
import Portfolio from "./sections/portfolio/Portfolio";
import Contact from "./sections/contact/Contact";

function Structure() {
  //Values.
  const breakPoint = "md";

  return (
    <div id="totalContainer">
      <TopNavBar
        breakPoint={breakPoint}
        contentContainerId="mainColumn"
        totalPageContainerId="totalContainer"
      />
      <div id="mainColumn" className="main-column">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/resume" component={Resume} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    </div>
  );
}

export default Structure;
