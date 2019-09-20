import React from "react";
import PropTypes from "prop-types";
import { push as Menu } from "react-burger-menu";
import ScrollingLink from "./toolComponents/ScrollingLink";

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
      <ScrollingLink toPath="/" toComponentNamed="home">
        Home
      </ScrollingLink>
      <ScrollingLink toPath="/resume" toComponentNamed="resume">
        Resume
      </ScrollingLink>
      <ScrollingLink toPath="/portfolio" toComponentNamed="portfolio">
        Portfolio
      </ScrollingLink>
      <ScrollingLink toPath="/contact" toComponentNamed="contact">
        Contact
      </ScrollingLink>
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
