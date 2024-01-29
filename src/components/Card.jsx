import React from 'react';
import './Card.css';

const Card = ({ title, description, imageUrl,quality }) => {
  return (
    <div className="card">
      <img src={imageUrl} alt={title} />
      <div className="card-content">
        <h2>{title} </h2>
        <p className='heading'>{description}  <span className='desc'>Onwards</span> </p>

      </div>
    </div>
  );
};


export default Card;
