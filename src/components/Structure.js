import React from "react";
import TopNavBar from "./TopNavBar";
import Container from "react-bootstrap/Container";
import MMBox from "./MMBox";
import Button from "react-bootstrap/Button";

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
        <div id="firstSection" className="first-section">
          <Container
            id="firstSectionContent"
            className="mobile-container first-section-content"
          >
            <div className="white-line" />
            <MMBox />
            <Button className="get-started">{"LET'S GET STARTED"}</Button>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default Structure;
