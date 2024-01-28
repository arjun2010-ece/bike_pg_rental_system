import { Fragment } from "react";
import CardList from "../components/CardList";
import "./Bike-Homepage.css";


const BikeRentPage = () => {
  const bikeData = [
    { id: 1, title: 'Mountain Bike', description: 'Explore the trails.', imageUrl: '../image/bike2.jpg' },
    { id: 1, title: 'Mountain Bike', description: 'Explore the trails.', imageUrl: '../image/bike4.jpg' },
    { id: 1, title: 'Mountain Bike', description: 'Explore the trails.', imageUrl: '../image/bike5.jpg' },
    { id: 1, title: 'Mountain Bike', description: 'Explore the trails.', imageUrl: '../image/bike6.jpg' },
    { id: 1, title: 'Mountain Bike', description: 'Explore the trails.', imageUrl: '../image/bike7.jpg' },
    { id: 1, title: 'Mountain Bike', description: 'Explore the trails.', imageUrl: '../image/bike3.jpg' },
    { id: 1, title: 'Mountain Bike', description: 'Explore the trails.', imageUrl: '../image/scooty1.jpg' },
    { id: 1, title: 'Mountain Bike', description: 'Explore the trails.', imageUrl: '../image/scooty2.jpg' },
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