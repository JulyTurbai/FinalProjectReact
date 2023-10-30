import React from 'react';
import { useSelector } from 'react-redux';

const SelectFromCardToCard = ({ setSelectedToOption, selectedToOption }) => {
    const cards = useSelector((state) => state.cards.cards);
    return (
        <select
            className="transfer-select"
            value={ selectedToOption }
            onChange={(e) => setSelectedToOption(e.target.value)}
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