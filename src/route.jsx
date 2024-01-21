// Import necessary components from react-router-dom
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import your page components
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import ContactPage from './pages/Contact';
import Header from './pages/Header';
import BikePage from './pages/Bike';
import PGPage from './pages/PG';
import ServicePage from './pages/Service';


// Define the RouteConfig component
const RouteConfig = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/bike" element={<BikePage />} />
        <Route path="/pg" element={<PGPage />} />
        <Route path="/service" element={<ServicePage />} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
};

export default RouteConfig;
