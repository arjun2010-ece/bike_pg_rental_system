import React from "react";
import "./FormInput.css"

const FormInput = ({ label, inputType, placeholder="", name }) => {
  return (
    <div className="form-group">
      <label>{label} : </label>
      <input type={inputType} placeholder={placeholder} name={name}  />
    </div>
  );
};

export default FormInput;
