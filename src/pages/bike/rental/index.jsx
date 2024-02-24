import { Fragment } from "react";
import CardList from "../../../components/CardList";
import "./index.css";

const BikeRentPage = () => {
  const bikeData = [
    {
      id: 1,
      title: "Bike Name:Duke-125",
      description: "Company:KTM",
      imageUrl: "bike7.jpeg",
    },
    {
      id: 2,
      title: "Bike Name:Royal Enfield Hunter 350",
      description: "Company:Suzuki",
      imageUrl: "/bike2.jpeg",
    },
    {
      id: 3,
      title: "Bike Name:Royal Enfield Hunter 350",
      description: "Company:Suzuki",
      imageUrl: "/scooty4.jpeg",
    },
    {
      id: 4,
      title: "Bike Name:KI300S",
      description: "Company:Triumph",
      imageUrl: "/bike3.jpeg",
    },
    {
      id: 5,
      title: "Bike Name:Thruxton-900",
      description: "Company:Suzuki",
      imageUrl: "/scooty5.jpeg",
    },
    {
      id: 6,
      title: "Bike Name:Royal Enfield Bullet",
      description: "Company:Suzuki",
      imageUrl: "/bike4.jpeg",
    },
    {
      id: 7,
      title: "Bike Name:Hero Xtreme 125R",
      description: "Company:Suzuki",
      imageUrl: "/bike5.jpeg",
    },
    {
      id: 8,
      title: "Bike Name:Royal Enfield Hunter 350",
      description: "Company:Suzuki",
      imageUrl: "/scooty6.jpeg",
    },
    // Other bike-related data
  ];

  return (
    <div>
      <div className="bike-item-list"></div>
      <h2 id="bike-heading">Bike Rental System</h2>
      <CardList data={bikeData} />
      {/* Other bike-related components */}
    </div>
  );
};

export default BikeRentPage;
