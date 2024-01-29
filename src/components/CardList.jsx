import Card from './Card';
import './CardList.css';

<<<<<<< HEAD
=======
const CardList = () => {
  const cardsData = [
    { id: 1, title: 'Card 1', content: 'Content for Card 1' },
    { id: 2, title: 'Card 2', content: 'Content for Card 2' },
    { id: 3, title: 'Card 3', content: 'Content for Card 3' },
    { id: 4, title: 'Card 4', content: 'Content for Card 4' },
    // Add more cards as needed
  ];
>>>>>>> 674ef2cce19e2d38f9c4a0f9c91b373df4e85eea

const CardList = ({ data }) => {
  return (
    <div className="card-list">
<<<<<<< HEAD
      {data.map(item => (
        <Card key={item.id} {...item} />
=======
      {cardsData.map((card) => (
        <Card key={card.title} title={card.title} content={card.content} />
>>>>>>> 674ef2cce19e2d38f9c4a0f9c91b373df4e85eea
      ))}
    </div>
  );
};


export default CardList;
