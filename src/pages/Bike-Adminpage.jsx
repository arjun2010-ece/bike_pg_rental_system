import { Fragment } from "react"
import { Link } from "react-router-dom";
import "./Bike-Adminpage.css";


const BikeAdminPage = () => {
  return (
    <Fragment>
       <div className="bike-admin-form">
        <div className="admin-form">
          <div className="form">
            <label>Name:</label>
           <input type="text"placeholder="Enter your name" required />
           <br/><br/>

            <label>Age:</label>
            <input type="number" required />
            <br/><br/>

            <label>Gender:</label>
            <input type="text" required />
            <br/><br/>

            <label>Email:</label>
            <input type="text" placeholder="Enter your email" required />
            <br/><br/>

            <label>Password:</label>
            <input type="text" placeholder="Enter your password" required />
            <br/><br/>

            <label>Confirm Password:</label>
            <input type="text"placeholder="confirm password" required />
            <br/><br/>

            <Link to="/bike-rental/admin/login">Submit</Link>

          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default BikeAdminPage