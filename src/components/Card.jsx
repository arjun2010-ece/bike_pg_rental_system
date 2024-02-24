import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BikeContext } from "../context";
import "./Card.css";

const Card = ({ id, title, description, imageUrl }) => {
  const navigate = useNavigate();
  // accessed context state and stateState variables and function for context manipulation
  const { setBikeData } = useContext(BikeContext);

  // console.log("CONTEXT DATA...", bikeData);

  const handleViewDetails = () => {
    navigate(`/bike-rental/${id}/view/details`);
    // stored data in context through setState function
    setBikeData({ id, title, description, imageUrl });
  };

  return (
    <div className="card">
      <img src={`/image/${imageUrl}`} alt={title} />
      <div className="card-content">
        <h2>{title}</h2>
        <p className="heading">{description}</p>
        <div className="card-btn">
          <button id="card-btn1">Rent</button>
          <button id="card-btn2" onClick={handleViewDetails}>
            View
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
