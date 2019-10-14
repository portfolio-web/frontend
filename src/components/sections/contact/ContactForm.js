import React from "react";
import { reduxForm, Field } from "redux-form";
import PropTypes from "prop-types";
import ValidatingField from "./CustomField";

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

function MyContactForm({ handleSubmit, valid }) {
  const disabledSubmit = !valid ? "form-submit-disabled" : "";

  return (
    <div className="form-container">
      <h1 className="form-title">CONTACT FORM</h1>
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
          placeholder="E-mail *"
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
      </form>
    </div>
  );
}

MyContactForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  valid: PropTypes.bool
};

const configureReduxForm = reduxForm({
  form: "contact",
  validate
});
const ContactForm = configureReduxForm(MyContactForm);

export default ContactForm;
