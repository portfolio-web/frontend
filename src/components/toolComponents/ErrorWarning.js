import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";

function ErrorWarning({ children }) {
  const errorMessage = children;

  return (
    <div className="error-warning">
      <div className="error-warning-icon">
        <FontAwesomeIcon icon={faExclamationCircle} />
      </div>
      <p className="error-warning-description">{errorMessage}</p>
    </div>
  );
}

ErrorWarning.propTypes = {
  children: PropTypes.string
};

export default ErrorWarning;
