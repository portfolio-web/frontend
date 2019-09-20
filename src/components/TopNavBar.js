import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import PropTypes from "prop-types";
import SideBar from "./SideBar";
import Container from "react-bootstrap/Container";
import ScrollingLink from "./toolComponents/ScrollingLink";

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
            <ScrollingLink
              toPath="/"
              toComponentNamed="home"
              className="nav-button"
            >
              home
            </ScrollingLink>
            <ScrollingLink
              toPath="/resume"
              toComponentNamed="resume"
              className="nav-button"
            >
              resume
            </ScrollingLink>
            <ScrollingLink
              toPath="/portfolio"
              toComponentNamed="portfolio"
              className="nav-button"
            >
              portfolio
            </ScrollingLink>
            <ScrollingLink
              toPath="/contact"
              toComponentNamed="contact"
              className="nav-button"
            >
              contact
            </ScrollingLink>
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
