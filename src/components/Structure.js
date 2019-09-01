import React from "react";
import TopNavBar from "./TopNavBar";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";

function Structure() {
  //Values.
  const breakPoint = "md";
  const totalPageContainerId = "total";
  const contentContainerId = "content";

  //Styles.
  const mobile = `d-block d-${breakPoint}-none`; //For showing the element before breakpoint only.
  const navBar = "d-block";

  return (
    <div id={totalPageContainerId}>
      <TopNavBar
        className={navBar}
        breakPoint={breakPoint}
        sideBarClassName={mobile}
        contentContainerId={contentContainerId}
        totalPageContainerId={totalPageContainerId}
      />
      <Container fluid={true} id={contentContainerId} className='content position-relative d-block main-column'>
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
