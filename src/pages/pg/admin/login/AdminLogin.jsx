import React from "react";
import { Link } from "react-router-dom";
import FormInput from "../../../../components/FormInput";
import "./AdminLogin.css";

const PGAdminpageLogin = () => {
  return (
    <div className="admin-login-form-container-pg">
      <form className="admin-login-form-pg">
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
          <Link to="/pg-rental/admin/signup">Sign up</Link>
          <button>Login</button>
        </div>
      </form>
    </div>
  );
};

export default PGAdminpageLogin;
