import React from "react";
import TopNavBar from "./TopNavBar";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";

function Structure() {
  //Values.
  const breakPoint = "md";

  //Styles.
  const mobile = `d-block d-${breakPoint}-none`; //For showing the element before breakpoint only.
  const navBar = "d-block";

  return (
    <div id="totalContainer">
      <TopNavBar
        className={navBar}
        breakPoint={breakPoint}
        sideBarClassName={mobile}
        contentContainerId="mainColumn"
        totalPageContainerId="totalContainer"
      />
      <div id="mainColumn" className="main-column">
        <div id="firstSection" className="first-section">
          <Container
            id="firstSectionContent"
            className="mobile-container first-section-content"
          ></Container>
        </div>
      </div>
    </div>
  );
}

export default Structure;
