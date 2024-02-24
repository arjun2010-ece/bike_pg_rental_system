import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import './Card.css';

const Card = ({ title, description, imageUrl, rent, view, rentalDetail }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="card">
      <img src={imageUrl} alt={title} />
      <div className="card-content">
        <h2>{title}</h2>
        <p className='heading'>{description}</p>
        <div className="card-btn">
          <button id="card-btn1">{rent}</button>
          <button id="card-btn2">{view}</button>
        </div>
        {showDetails && (
          <div className="details">
            <p>Rental Details: {rentalDetail}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
