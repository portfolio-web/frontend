import React from "react";
import TopNavBar from "./TopNavBar";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";

function Structure() {
  //Values.
  const breakPointValue = 768;
  const breakPoint = "md";
  const totalPageContainerId = "total";
  const contentContainerId = "content";

  //Aux.
  const isInMobile = () => {
    const w = window.screen.availWidth;
    return w <= breakPointValue;
  };

  //Styles.
  const mobile = `d-block d-${breakPoint}-none`; //For showing the element before breakpoint only.
  const navBar = "d-block";
  const content = isInMobile()
    ? "px-0 content position-relative d-block"
    : "content position-relative d-block";

  return (
    <div id={totalPageContainerId}>
      <TopNavBar
        className={navBar}
        breakPoint={breakPoint}
        sideBarClassName={mobile}
        contentContainerId={contentContainerId}
        totalPageContainerId={totalPageContainerId}
      />
      <Container fluid={true} id={contentContainerId} className={content}>
        <Image src="src/others/placeholder.png" fluid={true} />
        <Image src="src/others/placeholder.png" fluid={true} />
        <Image src="src/others/placeholder.png" fluid={true} />
        <Image src="src/others/placeholder.png" fluid={true} />
        <Image src="src/others/placeholder.png" fluid={true} />
        <Image src="src/others/placeholder.png" fluid={true} />
      </Container>
    </div>
  );
}

export default Structure;
