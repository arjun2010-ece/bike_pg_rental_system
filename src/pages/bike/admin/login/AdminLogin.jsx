import React from "react";
import { Link } from "react-router-dom";
import FormInput from "../../../../components/FormInput";
import "./AdminLogin.css";

const BikeAdminpageLogin = () => {
  return (
    <div className="admin-login-form-container">
      <form className="admin-login-form">
        <FormInput
          label="Email"
          inputType="text"
          placeholder="Enter your email"
          name="email"
        />

        <FormInput
          label="Password"
          inputType="text"
          placeholder="Enter your password"
          name="password"
        />

        <div className="btn-group">
          <Link to="/bike-rental/admin/signup">Sign up</Link>
          <button>Login</button>
        </div>
      </form>
    </div>
  );
};

export default BikeAdminpageLogin;
