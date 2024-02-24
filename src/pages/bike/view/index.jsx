import React, { useContext } from "react";
import { BikeContext } from "../../../context";
import { useParams } from "react-router-dom";

const BikeViewDetailPage = () => {
  let { bikeId } = useParams();
  const { bikeData } = useContext(BikeContext);
  const { id = "", title = "", description = "", imageUrl = "" } = bikeData;
  console.log("bikeData", bikeData);

  return (
    <div>
      <h3>bikeId: {bikeId}</h3>
      <h3>id: {id}</h3>
      <h3>title: {title}</h3>
      <h3>description: {description}</h3>
      <h3>image: {imageUrl}</h3>
      <img src={`/image/${imageUrl}`} alt={title} />
    </div>
  );
};

export default BikeViewDetailPage;
