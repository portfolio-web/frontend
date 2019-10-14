import React from "react";
import Container from "react-bootstrap/Container";
import PropTypes from "prop-types";

/*Just the pure section without navigation*/

function Section({ title, className, children }) {
  return (
    <div id={title} className="section">
      <Container
        id={`${title}Content`}
        className={`mobile-container ${className} section-content`}
      >
        {children != null ? children : <h1>{title}</h1>}
      </Container>
    </div>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  children: PropTypes.element
};

export default Section;
