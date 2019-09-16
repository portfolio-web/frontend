import React from "react";
import Container from "react-bootstrap/Container";
import PropTypes from "prop-types";

function Section({ title, className, ...props }) {
  return (
    <div id={title} className="section">
      <Container
        id={`${title}Content`}
        className={`mobile-container ${className} section-content`}
      >
        {props.children}
      </Container>
    </div>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired
};

export default Section;
