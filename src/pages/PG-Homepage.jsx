import { Fragment } from "react";
import CardList from "../components/CardList";
import "./PG-Homepage.css";

const PGRentPage = () => {
  return (
    <Fragment>
      <div className="item-list">
        <img src="../image/bedroom2.jpg" alt="bedroom image" />
        <q className="pg-home-text">Find a home far from HOME</q>
      </div>

      <CardList />
      
    </Fragment>
  );
};

export default PGRentPage;
