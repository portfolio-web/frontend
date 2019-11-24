import React from "react";
import PropTypes from "prop-types";
import ErrorWarning from "../../toolComponents/ErrorWarning";

function InputField({ input, placeholder, beTextArea }) {
  return beTextArea ? (
    <textarea
      {...input}
      placeholder={placeholder}
      className="form-field form-textarea-field"
    />
  ) : (
    <input
      {...input}
      type="text"
      placeholder={placeholder}
      className="form-field"
    />
  );
}

function ValidatingField({ meta, ...props }) {
  const { touched, error } = meta;

  return (
    <div className="input-box">
      <InputField {...props} />
      {touched && (error && <ErrorWarning>{error}</ErrorWarning>)}
    </div>
  );
}

ValidatingField.propTypes = {
  meta: PropTypes.object,
  input: PropTypes.object,
  beTextArea: PropTypes.bool,
  placeholder: PropTypes.string
};

InputField.propTypes = {
  input: PropTypes.object,
  beTextArea: PropTypes.bool,
  placeholder: PropTypes.string
};

export default ValidatingField;
