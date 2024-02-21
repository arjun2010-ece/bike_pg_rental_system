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
      rent:"Rent",
      view:"View",
    },
    {
      id: 2,
      title: "Bike Name:Royal Enfield Hunter 350",
      description: "Company:Suzuki",
      imageUrl: "../image/bike4.jpg",
      rent:"Rent",
      view:"View",
    },
    {
      id: 3,
      title: "Bike Name:Royal Enfield Hunter 350",
      description: "Company:Suzuki",
      imageUrl: "../image/bike5.jpg",
      rent:"Rent",
      view:"View",
    },
    {
      id: 4,
      title: "Bike Name:KI300S",
      description: "Company:Triumph",
      imageUrl: "../image/bike6.jpg",
      rent:"Rent",
      view:"View",
    },
    {
      id: 5,
      title: "Bike Name:Thruxton-900",
      description: "Company:Suzuki",
      imageUrl: "../image/bike7.jpg",
      rent:"Rent",
      view:"View",
    },
    {
      id: 6,
      title: "Bike Name:Royal Enfield Bullet",
      description: "Company:Suzuki",
      imageUrl: "../image/bike3.jpg",
      rent:"Rent",
      view:"View",
    },
    {
      id: 7,
      title: "Bike Name:Hero Xtreme 125R",
      description: "Company:Suzuki",
      imageUrl: "../image/scooty1.jpg",
      rent:"Rent",
      view:"View",
    },
    {
      id: 8,
      title: "Bike Name:Royal Enfield Hunter 350",
      description: "Company:Suzuki",
      imageUrl: "../image/scooty2.jpg",
      rent:"Rent",
      view:"View",
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
