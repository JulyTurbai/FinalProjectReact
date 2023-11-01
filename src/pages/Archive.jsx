import React from "react";
import { useSelector } from "react-redux";

export const Archive = () => {
    const cards = useSelector((state) => state.cards.cards);
    
  return (
    <>
        <div className="history">
            <div className="history-block">
                <h2 className="history-title">Архів</h2>
                {cards && cards.length > 0 ? (
                    cards.map((card) => (
                    <div className="card-info" key={card.id}>
                        <div className="card-info__main">
                            <h3 className="card-info__name">{card.name}</h3>
                            <h3>{card.number}</h3>
                        </div>
                        <ul className="card-info__info">
                        {card.balanceHistory.map((entry, index) => (
                            <li key={index}>
                            Зміна балансу : {entry.amount}
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
        </div>
    </>
  );
};