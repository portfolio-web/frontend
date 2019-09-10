import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import PropTypes from "prop-types";
import SideBar from "./SideBar";
import Container from "react-bootstrap/Container";

function TopNavBar({ breakPoint, contentContainerId, totalPageContainerId }) {
  const mobileOnly = `d-block d-${breakPoint}-none`;

  return (
    <Navbar
      bg="secondary"
      variant="dark"
      expand={breakPoint}
      fixed="top"
      className="nav-bar"
    >
      <SideBar
        className={mobileOnly}
        burgerButtonClassName={mobileOnly}
        totalPageContainerId={totalPageContainerId}
        contentContainerId={contentContainerId}
      />
      <Container>
        <Navbar.Collapse>
          <Nav className="mr-auto">
            <Nav.Link href="#home" className="nav-button">
              home
            </Nav.Link>
            <Nav.Link href="#resume" className="nav-button">
              resume
            </Nav.Link>
            <Nav.Link href="#portfolio" className="nav-button">
              portfolio
            </Nav.Link>
            <Nav.Link href="#contact" className="nav-button">
              contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

TopNavBar.propTypes = {
  breakPoint: PropTypes.string.isRequired,
  contentContainerId: PropTypes.string.isRequired,
  totalPageContainerId: PropTypes.string.isRequired
};

export default TopNavBar;
