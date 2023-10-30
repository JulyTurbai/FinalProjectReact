import React from 'react';
import { useSelector } from 'react-redux';

const SelectTransferToCard = ({  setSelectedOption, selectedOption }) => {
    const cards = useSelector((state) => state.cards.cards);
    return (
        <select className="transfer-select"
                     value={ selectedOption }
                     onChange={(e) => setSelectedOption(e.target.value)}
                     >
                        <option key={ window.crypto.randomUUID() } value="Choose-card">Оберіть карту</option>
                    {
                        cards.map(card => (
                            <option 
                                key={ window.crypto.randomUUID() } 
                                value={ card.number }
                            >
                                Картка: { card.name }   
                                Номер картки: { card.number }
                            </option>   
                        ))
                    }
        </select>
    );
};

export default SelectTransferToCard;