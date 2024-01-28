import { Fragment } from "react";
import CardList from "../components/CardList";
import "./PG-Homepage.css";


const PGRentPage = () => {
  const pgData = [
    { id: 1, title: 'Modern PG', description: 'Kabir Nagar Chauraha', imageUrl: '../image/pg1.jpg' },
    { id: 1, title: 'Krishna PG', description: 'In Durgakund', imageUrl: '../image/pg9.jpeg' },
    { id: 1, title: 'Sweet Home PG', description: 'Meerapur Basahi', imageUrl: '../image/pg3.jpg' },
    { id: 1, title: 'Agarwal PG', description: 'Varanasi Cantt', imageUrl: '../image/pg4.jpg' },
    { id: 1, title: 'Aadhya Girls PG', description: 'In Paharia', imageUrl: '../image/pg5.jpeg' },
    { id: 1, title: 'Vatsalya Girls PG', description: 'In Kabir Nagar', imageUrl: '../image/pg6.jpeg' },
    { id: 1, title: 'Govardhan PG', description: 'Nagawa Lanka', imageUrl: '../image/pg7.jpeg' },
    { id: 1, title: 'Jaiswal PG', description: 'Ramapura Luxa', imageUrl: '../image/pg8.jpeg' },
    // Other PG-related data
  ];

  return (
    <div>
      <div className="pg-item-list">
        <q className="pg-home-text">Find a home far from Home</q>
      </div>
      <h2>PG Rental System</h2>
      <CardList data={pgData} />
      {/* Other PG-related components */}
    </div>
  );
};

export default PGRentPage;