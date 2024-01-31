import { Fragment } from "react";
import { Link } from "react-router-dom";
import "./PGAdminpage.css";


const PGAdminpage = () => {
  return (
    <Fragment>
      <div className="pg-admin-form">
        <div className="pg-admin">
          <div className="form">

            <label>Email : </label>
            <input type="text" placeholder="Enter your email" />
            <br/><br/>

            <label>Mobile No . </label>
            <input type="text" placeholder="Enter your email" />
            <br/><br/>

            <label>Password : </label>
            <input type="text" placeholder="Enter your password" />
            <br/><br/>

            <Link to="/pg-rental/admin/login">Log in</Link>
            <Link to="/pg-rental/admin/signup">Register now</Link>

          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default PGAdminpage