import React from "react";
import CardDefault from "./Card";

const CardList = ({ cards }: any) => {
  // Check if cards is an array
  if (!Array.isArray(cards)) {
    console.error("cards is not an array:", cards);
    return null; // or handle the error in an appropriate way
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center">
      {cards.map(
        (
          card: {
            title: string;
            description: string;
            image: string;
            id: number;
          },
          index: React.Key | null | undefined
        ) => (
          <CardDefault
            key={index}
            title={card.title}
            description={card.description}
            image={card.image}
            id={card.id}
          />
        )
      )}
    </div>
  );
};

export default CardList;
