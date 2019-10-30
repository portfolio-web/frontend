import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function InfoBox({ icon, children, textSize }) {
  const info = children;

  var textSizeClass;
  if (textSize == "sm") textSizeClass = "info-box-text-small";
  else if (textSize == "bg") textSizeClass = "info-box-text-big";
  else textSizeClass = "info-box-text-medium";

  return (
    <div className="info-box">
      <div className="info-box-icon">
        <FontAwesomeIcon icon={icon} fixedWidth />
      </div>
      <h3 className={`info-box-description ${textSizeClass}`}>{info}</h3>
    </div>
  );
}

InfoBox.propTypes = {
  icon: PropTypes.object,
  children: PropTypes.string,
  textSize: PropTypes.string
};

export default InfoBox;
