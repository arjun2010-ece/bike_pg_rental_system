import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer">

        <div className="footer-about">
          <h2>About</h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore consectetur, blanditiis mollitia magnam provident soluta qui eos omnis neque harum voluptates, saepe nostrum reiciendis quas, corporis deserunt? Blanditiis.</p>
        </div>

        <div className="footer-links">
          <h2>Links</h2>
          <div className="footer-fonts">
            <Link to="/"> <i class="fa-solid fa-arrow-right"> <span>Home</span> </i></Link>

            <Link to="/about"> <i class="fa-solid fa-arrow-right"> <span>About</span> </i></Link>

            <Link to="/contact"> <i class="fa-solid fa-arrow-right"> <span>Contact-Us</span> </i></Link>

            <Link to="/service"> <i class="fa-solid fa-arrow-right"> <span>Service</span> </i></Link>
           
          </div>
        </div>

        <div className="footer-services">
          <h2>Services</h2>
          <div className="footer-fonts">
            <Link to="/pg-rental"> <i class="fa-solid fa-arrow-right"> <span>PG Rental</span> </i></Link>

            <Link to="/bike-rental"> <i class="fa-solid fa-arrow-right"> <span>Bike Rental</span> </i></Link>
          </div>
        </div>

        <div className="footer-query">
          <h2>Have a Questions?</h2>
          <div className="footer-fonts">
            <i class="fa-solid fa-location-dot"> <span>Pune,India</span> </i>
            <i class="fa-solid fa-phone"> <span>+91 9874563215</span> </i>
            <i class="fa-regular fa-envelope"> <span>info@thapatechnical.com</span> </i>
          </div>
        </div>
      </div>

      <div className="footer-social-links-content">
        <h2>Follow Us</h2>
        <div className="footer-social-links">
          <i class="fa-brands fa-facebook"></i>
          <i class="fa-brands fa-twitter"></i>
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-linkedin"></i>
          <i class="fa-brands fa-youtube"></i>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 your company All Right Reserved</p>
      </div>
    </footer>
  )
}

export default Footer