import React from 'react';
import { useSelector } from 'react-redux';

const SelectFromCardToCard = ({ setSelectedFromOption, selectedFromOption }) => {
    const cards = useSelector((state) => state.cards.cards);
    return (
        <select
            className="transfer-select"
            value={selectedFromOption}
            onChange={(e) => setSelectedFromOption(e.target.value)}
        >
            <option key={window.crypto.randomUUID()} value="Choose-card">Оберіть карту</option>
            {
                cards.map(card => (
                    <option
                        key={window.crypto.randomUUID()}
                        value={card.number}
                    >
                        Картка: {card.name}
                        Номер картки: {card.number}
                    </option>
                ))
            }
        </select>
    );
};

export default SelectFromCardToCard;