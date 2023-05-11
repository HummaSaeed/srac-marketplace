import React from "react";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";

const SecondaryInputField = ({
  label,
  placeholder,
  type,
  value,
  onChange,
  required,
  pattern,
  errorMessage,
}) => {
  return (
    <div>
      <input
        type={type}
        className="form-input"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        pattern={pattern}
      />
    </div>
  );
};

export default SecondaryInputField;
