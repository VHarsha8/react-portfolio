import React from 'react';

const cardsData = [
  {
    id: 1,
    image: 'https://via.placeholder.com/150',
    heading: 'Card 1',
  },
  {
    id: 2,
    image: 'https://via.placeholder.com/150',
    heading: 'Card 2',
  },
  {
    id: 3,
    image: 'https://via.placeholder.com/150',
    heading: 'Card 3',
  },
  {
    id: 4,
    image: 'https://via.placeholder.com/150',
    heading: 'Card 4',
  },
  {
    id: 5,
    image: 'https://via.placeholder.com/150',
    heading: 'Card 5',
  },
  {
    id: 6,
    image: 'https://via.placeholder.com/150',
    heading: 'Card 6',
  },
];

const CardsWithMaps = () => {
  return (
    <div className="grid grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3">
      {cardsData.map((card) => (
        <div
          key={card.id}
          className="overflow-hidden bg-white rounded-lg shadow-md"
        >
          <img
            src={card.image}
            alt={card.heading}
            className="object-cover w-full h-48"
          />
          <div className="p-4">
            <h2 className="text-xl font-bold">{card.heading}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardsWithMaps;
