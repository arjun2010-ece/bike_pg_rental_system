import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import "./Home.css";


const images = [
  '/image/bike-ride8.jpg',
  '/image/room1.jpg',
  '/image/bike-ride1.jpg',
  '/image/room2.avif',
  '/image/bike-ride7.jpg',
  '/image/room3.jpg',
  '/image/bike-ride2.jpg',
  '/image/room4.jpg',
  '/image/bike-ride3.jpg',
  '/image/pg8.jpeg',
];

const HomePage = () => {
  const [currentImage, setCurrentImage] = useState(0)
  
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 2000);

    // Cleanup the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures the effect runs only once on mount
  

  return (
    <>  
      <div className="home-container">
        <marquee> <span className="txt">"Rev Up Life, Settle In Style: Your Ride, Your Stay – Welcome Home!"</span> </marquee>
        {/* image transition */}
        <div className="image-scroll">
          <div className="images-container" style={{ transform: `translateX(-${currentImage * 100}%)` }}>
            {images.map((imageUrl, index) => (
              <div key={index} className="image">
                <img src={imageUrl} alt={`Image ${index + 1}`} />
               </div>
            ))}
          </div>
        </div>
      
        {/* main content */}
          <main className="main">
            <div className="head">
              <h1 className="heading">Ride,Rest and Repeat</h1>
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
          </main>
        </div>
    </>
  );
};

export default HomePage;
