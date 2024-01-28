import { Fragment } from "react";
import { Link } from "react-router-dom";
import "./PGAdminpage.css";


const PGAdminpage = () => {
  return (
    <Fragment>
      <div className="pg-admin-form">
        <div className="admin-form">
          <div className="form">
            <label>Name:</label>
           <input type="text"placeholder="Enter your name" />
           <br/><br/>

            <label>Age:</label>
            <input type="number" />
            <br/><br/>

            <label>Gender:</label>
            <input type="text" />
            <br/><br/>

            <label>Email:</label>
            <input type="text" placeholder="Enter your email" />
            <br/><br/>

            <label>Password:</label>
            <input type="text" placeholder="Enter your password" />
            <br/><br/>

            <label>Confirm Password:</label>
            <input type="text"placeholder="confirm password" />
            <br/><br/>

            <Link to="/pg-rental/admin/login">Submit</Link>

          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default PGAdminpage