import React from "react";
import PropTypes from "prop-types";
import NavigableSection from "../../toolComponents/NavigableSection";
import ContactForm from "./ContactForm";
import InfoBox from "./InfoBox";
import {
  faMapMarkerAlt,
  faEnvelope,
  faPhoneAlt
} from "@fortawesome/free-solid-svg-icons";

import sendContactForm from "../../../redux/actionCreators/contactFormActions";
import { connect } from "react-redux";

function Contact(props) {
  const { sendContactForm } = props;
  const visibilityController = <div className="visibility-controller" />;

  const submitForm = values => {
    sendContactForm(values);
  };

  return (
    <NavigableSection
      path="/contact"
      title="contact"
      className="contact-container"
      visibilityController={visibilityController}
    >
      {/*visibilityController*/}

      <ContactForm onSubmit={submitForm} />

      <div className="info-boxes-container">
        <InfoBox icon={faMapMarkerAlt}>
          Coronel Zelaya 358, San Miguel de Tucumán (4000), Tucumán, Argentina
        </InfoBox>
        <InfoBox icon={faEnvelope}>marianomedina86@gmail.com</InfoBox>
        <InfoBox icon={faPhoneAlt} textSize="bg">
          +54 9 381 588 278
        </InfoBox>
      </div>
    </NavigableSection>
  );
}

Contact.propTypes = {
  sendContactForm: PropTypes.func.isRequired
};

const mapDispatchToProps = {
  sendContactForm
};

export default connect(
  null,
  mapDispatchToProps
)(Contact);
