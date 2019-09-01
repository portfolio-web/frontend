import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import PropTypes from "prop-types";
import SideBar from "./SideBar";

function TopNavBar({
  className,
  breakPoint,
  sideBarClassName,
  contentContainerId,
  totalPageContainerId
}) {
  return (
    <Navbar
      bg="secondary"
      variant="dark"
      expand={breakPoint}
      fixed="top"
      className={className}
    >
      <SideBar
        className={sideBarClassName}
        burgerButtonClassName={sideBarClassName}
        totalPageContainerId={totalPageContainerId}
        contentContainerId={contentContainerId}
      />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

TopNavBar.propTypes = {
  className: PropTypes.string,
  breakPoint: PropTypes.string.isRequired,
  sideBarClassName: PropTypes.string,
  contentContainerId: PropTypes.string.isRequired,
  totalPageContainerId: PropTypes.string.isRequired
};

export default TopNavBar;
