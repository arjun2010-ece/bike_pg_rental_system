import Card from './Card';
import './CardList.css';

const CardList = () => {
  const cardsData = [
    { id: 1, title: 'Card 1', content: 'Content for Card 1' },
    { id: 2, title: 'Card 2', content: 'Content for Card 2' },
    { id: 3, title: 'Card 3', content: 'Content for Card 3' },
    { id: 4, title: 'Card 4', content: 'Content for Card 4' },
    // Add more cards as needed
  ];

  return (
    <div className="card-list">
      {cardsData.map((card) => (
        <Card key={card.title} title={card.title} content={card.content} />
      ))}
    </div>
  );
};

export default CardList;
