import React from "react";
import PropTypes from "prop-types";
import { push as Menu } from "react-burger-menu";

function SideBar({ totalPageContainerId, contentContainerId, ...props }) {
  return (
    <Menu
      pageWrapId={contentContainerId}
      outerContainerId={totalPageContainerId}
      className={props.className}
      burgerButtonClassName={props.burgerButtonClassName}
    />
  );
}

SideBar.propTypes = {
  totalPageContainerId: PropTypes.string.isRequired,
  contentContainerId: PropTypes.string.isRequired,
  className: PropTypes.string,
  burgerButtonClassName: PropTypes.string
};

export default SideBar;
