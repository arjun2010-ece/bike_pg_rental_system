import { Link } from "react-router-dom";
import "./Bike-rental.css"

const BikeRentalPage = () => {
  return (
    <div className="bikes-page">
      <ul className="bike-rentals">
        <li>
          <Link to="/bike-rental/rent">Bike Rents</Link>
        </li>
        <li>
          <Link to="/bike-rental/admin">Bike Rental Admin</Link>
        </li>
      </ul>
    </div>
  );
};

export default BikeRentalPage;
