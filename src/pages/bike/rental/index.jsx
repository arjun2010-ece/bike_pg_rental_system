import { Fragment } from "react";
import CardList from "../../../components/CardList";
import "./index.css";

const BikeRentPage = () => {
  const bikeData = [
    {
      id: 1,
      title: "Bike Name:Duke-125",
      description: "Company:KTM",
      imageUrl: "../image/bike2.jpg",
    },
    {
      id: 1,
      title: "Bike Name:Royal Enfield Hunter 350",
      description: "Company:Suzuki",
      imageUrl: "../image/bike4.jpg",
    },
    {
      id: 1,
      title: "Bike Name:Royal Enfield Hunter 350",
      description: "Company:Suzuki",
      imageUrl: "../image/bike5.jpg",
    },
    {
      id: 1,
      title: "Bike Name:KI300S",
      description: "Company:Triumph",
      imageUrl: "../image/bike6.jpg",
    },
    {
      id: 1,
      title: "Bike Name:Thruxton-900",
      description: "Company:Suzuki",
      imageUrl: "../image/bike7.jpg",
    },
    {
      id: 1,
      title: "Bike Name:Royal Enfield Bullet",
      description: "Company:Suzuki",
      imageUrl: "../image/bike3.jpg",
    },
    {
      id: 1,
      title: "Bike Name:Hero Xtreme 125R",
      description: "Company:Suzuki",
      imageUrl: "../image/scooty1.jpg",
    },
    {
      id: 1,
      title: "Bike Name:Royal Enfield Hunter 350",
      description: "Company:Suzuki",
      imageUrl: "../image/scooty2.jpg",
    },
    // Other bike-related data
  ];

  return (
    <div>
      <div className="bike-item-list"></div>
      <h2>Bike Rental System</h2>
      <CardList data={bikeData} />
      {/* Other bike-related components */}
    </div>
  );
};

export default BikeRentPage;
