import { Link } from "react-router-dom";
import "./PG-rental.css"


const PGRentalPage = () => {
  return (
    <>
      <div className="pg-page">
        <ul className="pg-rentals">
          <li>
            <Link to="/pg-rental/home">PG Homepage</Link>
          </li>
          <li>
            <Link to="/pg-rental/admin">PG Rental Admin</Link>
          </li>
        </ul>
      </div>
    </>
  )
}

export default PGRentalPage