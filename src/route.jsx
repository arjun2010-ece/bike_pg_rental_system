// Import necessary components from react-router-dom
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import your page components
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import ContactPage from "./pages/Contact";
import Header from "./pages/Header";
import BikeRentalHomePage from "./pages/Bike-rental";
import BikeRentPage from "./pages/Bike-rent";
import PGRentalPage from "./pages/PG-rental";
import ServicePage from "./pages/Service";

// Define the RouteConfig component
const RouteConfig = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/bike-rental" element={<BikeRentalHomePage />} />
        <Route path="/bike-rental/rent" element={<BikeRentPage />} />
        <Route path="/pg-rental" element={<PGRentalPage />} />
        <Route path="/service" element={<ServicePage />} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
};

export default RouteConfig;
