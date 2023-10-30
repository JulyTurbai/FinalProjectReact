import React from "react";
import { useSelector } from "react-redux";

export const Archive = () => {
    const cards = useSelector((state) => state.cards.cards);
    console.log(cards)
    
  return (
    <div>
      <h2>Банківський архів</h2>
      {cards && cards.length > 0 ? (
        cards.map((card) => (
          <div key={card.id}>
            <h3>{card.name}</h3>
            <h3>{card.number}</h3>
            <ul>
              {card.balanceHistory.map((entry, index) => (
                <li key={index}>
                  Зміна балансу : {entry.amount} UAH
                  <br />
                  Час зміни: {entry.time}
                </li>
              ))}
            </ul>
          </div>
        ))
      ) : (
        <p>Немає карток у банківському архіві.</p>
      )}
    </div>
  );
};