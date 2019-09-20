import React from "react";
import Link from "react-router-dom/Link";
import PropTypes from "prop-types";
import { scroller } from "react-scroll";
import { scrollType } from "../../others/values";

function ScrollingLink({
  toPath,
  toComponentNamed,
  className,
  children,
  ...props
}) {
  return (
    <Link
      onClick={() => scroller.scrollTo(toComponentNamed, scrollType)}
      to={toPath}
      className={className}
      {...props}
    >
      {children}
    </Link>
  );
}

ScrollingLink.propTypes = {
  toPath: PropTypes.string.isRequired,
  toComponentNamed: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  children: PropTypes.element
};

export default ScrollingLink;
