import React from "react";
import { Link } from "react-router-dom";
import FormInput from "../../../components/FormInput";
import "./AdminSignup.css";

const PGAdminpageSignup = () => {
  return (
    <div className="admin-form-container">
      <form className="admin-form">
        <FormInput
          label="Name"
          inputType="text"
          placeholder="Enter your name"
          name="name"
        />

        <FormInput
          label="Email"
          inputType="text"
          placeholder="Enter your email"
          name="email"
        />

        <FormInput
          label="Mobile No"
          inputType="number"
          placeholder="Enter your mobile number"
          name="mobile"
        />

        <FormInput label="D.O.B." inputType="date" name="dob" />

        <FormInput
          label="Password"
          inputType="text"
          placeholder="Enter your password"
          name="password"
        />

        <FormInput
          label="Confirm Password"
          inputType="text"
          placeholder="confirm password"
          name="confirmPassword"
        />

        <div className="btn-group">
          <Link to="/pg-rental/admin/login">Already have an account?</Link>
          <button>Register</button>
        </div>
      </form>
    </div>
  );
};

export default PGAdminpageSignup;
