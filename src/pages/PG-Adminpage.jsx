import { Fragment } from "react";
import { Link } from "react-router-dom";
import "./PGAdminpage.css";

const PGAdminpage = () => {
  return (
    <div className="pg-admin-form">
      <form className="pg-admin form">
        <div className="form-group">
          <label>Email : </label>
          <input type="text" placeholder="Enter your email" />
        </div>

        <div className="form-group">
          <label>Mobile No . </label>
          <input type="text" placeholder="Enter your email" />
        </div>

        <div className="form-group">
          <label>Password : </label>
          <input type="text" placeholder="Enter your password" />
        </div>

        {/* <Link to="/pg-rental/admin/login">Log in</Link>
        <Link to="/pg-rental/admin/signup">Register now</Link> */}
        <div className="btn-group">
          <Link to="/pg-rental/admin/login">Login</Link>
          <button>Register</button>
        </div>
      </form>
    </div>
  );
};

export default PGAdminpage;
