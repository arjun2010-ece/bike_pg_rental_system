import { Fragment } from "react";
import CardList from "../components/CardList";
import "./Bike-Homepage.css";


const BikeRentPage = () => {
  const bikeData = [
    { id: 1, title: 'TVS Raider 125', description: 'Rs.3,12,286',quality: 'Onwards', imageUrl: '../image/bike2.jpg' },
    { id: 1, title: 'Royal Enfield Hunter 350', description: 'Rs.2,75,654',quality: 'Onwards', imageUrl: '../image/bike4.jpg' },
    { id: 1, title: 'Yamaha MT 15 V2', description: 'Rs.1,97,394',quality: 'Onwards',imageUrl: '../image/bike5.jpg' },
    { id: 1, title: 'Honda SP 125', description: 'Rs.1,02,141',quality: 'Onwards', imageUrl: '../image/bike6.jpg' },
    { id: 1, title: 'Yamaha R15 V4', description: 'Rs.2,13,406',quality: 'Onwards', imageUrl: '../image/bike7.jpg' },
    { id: 1, title: 'Royal Enfield Bullet', description: 'Rs.2,01,892',quality: 'Onwards', imageUrl: '../image/bike3.jpg' },
    { id: 1, title: 'Hero Xtreme 125R', description: 'Rs.1,17,297',quality: 'Onwards', imageUrl: '../image/scooty1.jpg' },
    { id: 1, title: 'Honda Activa 6G', description: 'Rs.1,12,453',quality: 'Onwards', imageUrl: '../image/scooty2.jpg' },
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
}

export default BikeRentPage;