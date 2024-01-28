// Import necessary components from react-router-dom
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import your page components
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import ContactPage from "./pages/Contact";
import ServicePage from "./pages/Service";
import Header from "./pages/Header";
import BikeRentalPage from "./pages/Bike-rental";
import BikeRentPage from "./pages/Bike-Homepage";
import BikeAdminpage from "./pages/Bike-Adminpage";
import BikeAdminpageLogin from "./pages/Bike-AdminpageLogin";
import PGRentalPage from "./pages/PG-rental";
import PGRentPage from "./pages/PG-Homepage";
import PGAdminpage from "./pages/PG-Adminpage";
import PGAdminpageLogin from "./pages/PG-AdminpageLogin";

// Define the RouteConfig component
const RouteConfig = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/service" element={<ServicePage />} />
        <Route path="/bike-rental" element={<BikeRentalPage />} />
        <Route path="/bike-rental/home" element={<BikeRentPage />} />
        <Route path="/bike-rental/admin" element={<BikeAdminpage />} />
        <Route path="/bike-rental/admin/login" element={<BikeAdminpageLogin />} />
        <Route path="/pg-rental" element={<PGRentalPage />} />
        <Route path="/pg-rental/home" element={<PGRentPage />} />
        <Route path="/pg-rental/admin" element={<PGAdminpage />} />
        <Route path="/pg-rental/admin/login" element={<PGAdminpageLogin />} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
};

export default RouteConfig;
