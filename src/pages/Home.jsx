import "./Home.css";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <main className="main">
      <div className="head">
        <h1 className="heading">Dream Rides & CozyStays:Unleash your journeys with Us!</h1>
      </div>

      <q className="home-text">
        DreamRides & CozyStays is your all-encompassing solution for an
        unparalleled travel experience. We bring together the thrill of
        exploration and the comfort of a home away from home, ensuring that
        every journey becomes an unforgettable adventure.
      </q>

        <ul className="site-navigation">
          <li>
            <Link to="/pg-rental">PG Rental</Link>
          </li>

          <li>
            <Link to="/bike-rental">Bike Rental</Link>
          </li>
        </ul>
      {/* <img src="/man.jpg" alt="image title" width={400}  height={500} /> */}
    </main>
  );
};

export default HomePage;
