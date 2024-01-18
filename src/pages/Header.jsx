import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="sect">
        <NavLink
          to="/about"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          About page
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive, isPending }) =>
             isPending ? "pending" : isActive ? "active" : ""
          }
        >
          contact page
        </NavLink>
    </div>
  )
}

export default Header