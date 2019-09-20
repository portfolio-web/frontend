import React from "react";
import Container from "react-bootstrap/Container";
import PropTypes from "prop-types";

/*Just the section without routing*/

function Section({ title, className, ...props }) {
  return (
    <div id={title} className="section">
      <Container
        id={`${title}Content`}
        className={`mobile-container ${className} section-content`}
      >
        {props.children != null ? props.children : <h1>{title}</h1>}
      </Container>
    </div>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  children: PropTypes.node
};

export default Section;
