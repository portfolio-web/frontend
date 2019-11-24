import React from "react";
import PropTypes from "prop-types";
import { push as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";

function SideBar({ totalPageContainerId, contentContainerId, ...props }) {
  return (
    <Menu
      width={"70%"}
      disableAutoFocus
      pageWrapId={contentContainerId}
      outerContainerId={totalPageContainerId}
      className={props.className}
      burgerButtonClassName={props.burgerButtonClassName}
    >
      <Link to="/">Home</Link>
      <Link to="/resume">Resume</Link>
      <Link to="/portfolio">Portfolio</Link>
      <Link to="/contact">Contact</Link>
    </Menu>
  );
}

SideBar.propTypes = {
  totalPageContainerId: PropTypes.string.isRequired,
  contentContainerId: PropTypes.string.isRequired,
  className: PropTypes.string,
  burgerButtonClassName: PropTypes.string
};

export default SideBar;
