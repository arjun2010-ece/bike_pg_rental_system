import React from 'react';
import Card from './Card';
import './CardList.css';


const CardList = ({ data }) => {
  return (
    <div className="card-list">
      {data.map(item => (
        <Card key={item.id} {...item} />
      ))}
    </div>
  );
};


export default CardList;
