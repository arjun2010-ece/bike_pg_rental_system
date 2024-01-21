import './Header.css';
import { NavLink } from "react-router-dom";


const Header = () => {
  return (
    <div className="container">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Home
        </NavLink>


        <NavLink
          to="/about"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          About
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive, isPending }) =>
             isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Contact-Us

        </NavLink>
        <NavLink
          to="/service"
          className={({ isActive, isPending }) =>
             isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Service
        </NavLink>
    </div>
  )
}

export default Header