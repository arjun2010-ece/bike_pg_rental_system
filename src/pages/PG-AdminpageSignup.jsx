import React from 'react'
import "./PG-AdminpageSignup.css"
import { Link } from 'react-router-dom'


const PGAdminpageSignup = () => {
  return (
    <>
      <div className="pg-admin-form">
        <div className="pg-admin-signup">
          <div className="form">

            <label>Name : </label>
            <input type="text" placeholder="Enter your name" required/>
            <br/><br/>

            <label>Email : </label>
            <input type="text" placeholder="Enter your email" required/>
            <br/><br/>

            <label>Mobile No . </label>
            <input type="number" required/>
            <br/><br/>

            <label>D.O.B. </label>
            <input type="date" required/>
            <br/><br/>

            <label>Password : </label>
            <input type="text" placeholder="Enter your password" required/>
            <br/><br/>

            <label>Confirm Password : </label>
            <input type="text" placeholder="confirm password" required/>
            <br/><br/>

            <Link to="/pg-rental/admin">Sign up</Link>

          </div>
        </div>
      </div>
    </>
  )
}

export default PGAdminpageSignup