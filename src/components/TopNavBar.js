import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import PropTypes from "prop-types";
import SideBar from "./SideBar";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";

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
            <Link to="/" className="nav-button">
              home
            </Link>
            <Link to="/resume" className="nav-button">
              resume
            </Link>
            <Link to="/portfolio" className="nav-button">
              portfolio
            </Link>
            <Link to="/contact" className="nav-button">
              contact
            </Link>
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
