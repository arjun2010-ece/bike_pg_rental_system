import { Fragment } from "react"
import { Link } from "react-router-dom";
import "./Bike-Adminpage.css";


const BikeAdminPage = () => {
  return (
    <Fragment>
      <div className="bike-admin-form">
        <div className="bike-admin">
          <div className="form">

            <label>Email : </label>
            <input type="text" placeholder="Enter your email" required />
            <br/><br/>

            <label>Mobile No . </label>
            <input type="text" placeholder="Enter your email" required />
            <br/><br/>

            <label>Password : </label>
            <input type="text" placeholder="Enter your password" required />
            <br/><br/>

            <Link to="/bike-rental/admin/login">Log in</Link>
            <Link to="/bike-rental/admin/signup">Register now</Link>

          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default BikeAdminPage