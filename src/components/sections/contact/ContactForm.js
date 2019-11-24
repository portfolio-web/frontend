import React from "react";
import { reduxForm, Field } from "redux-form";
import PropTypes from "prop-types";
import ValidatingField from "./CustomField";

import { initialForm } from "../../../redux/initialState";
import { connect } from "react-redux";
import ErrorWarning from "../../toolComponents/ErrorWarning";

const validate = values => {
  const errors = {};

  if (values.name && values.name.length > 15)
    errors.name = "Must be 15 characters or less";

  if (!values.email) errors.email = "Required";
  else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email))
    errors.email = "Invalid email adress";

  if (!values.message) errors.message = "Required";
  else if (values.message.length < 20)
    errors.message = "Must be at least 20 characters";

  return errors;
};

function MyContactForm({ handleSubmit, valid, formSentSuccessfully }) {
  const disabledSubmit = !valid ? "form-submit-disabled" : "";
  /*const sentWarning = {
    class: formSentSuccessfully ? "sent-warning" : "unsent-warning",
    message: formSentSuccessfully ? "Enviado correctamente" : "No enviado"
  };*/

  return (
    <div className="form-container">
      <h1 className="form-title">CONTACT</h1>
      <form onSubmit={handleSubmit} className="form-all-fields">
        <Field name="name" component={ValidatingField} placeholder="Name" />
        <Field
          name="subject"
          component={ValidatingField}
          placeholder="Subject"
        />
        <Field
          name="email"
          component={ValidatingField}
          placeholder="Email *"
        />
        <Field
          name="message"
          component={ValidatingField}
          placeholder="Message *"
          beTextArea
        />

        <button
          disabled={!valid}
          type="submit"
          className={`form-submit ${disabledSubmit}`}
        >
          SEND
        </button>
        {formSentSuccessfully ? (
          <ErrorWarning outerBoxClass="sent-warning">
            Enviado Corrrectamente
          </ErrorWarning>
        ) : null}
      </form>
    </div>
  );
}

MyContactForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  valid: PropTypes.bool,
  formSentSuccessfully: PropTypes.bool
};

const configureReduxForm = reduxForm({
  form: "contact",
  validate,
  initialValues: initialForm
});
const ContactForm = configureReduxForm(MyContactForm);

const mapStateToProps = state => {
  return {
    formSentSuccessfully: state.sent
  };
};

export default connect(mapStateToProps)(ContactForm);
