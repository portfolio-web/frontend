import React from "react";
import TopNavBar from "./TopNavBar";
import Container from "react-bootstrap/Container";
import MMBox from "./MMBox";

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
            <MMBox />
          </Container>
        </div>
      </div>
    </div>
  );
}

export default Structure;
