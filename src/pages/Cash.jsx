import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { cashToCardBalans } from '../components/store/cardSlice';

export const Cash = () => {
    const cards = useSelector((state) => state.cards.cards);
    const [ selectedOption, setSelectedOption ] = useState(''); 
    const [ cashAmount, setCashAmount ] = useState(0);
    const [ isCashResultVisible, setIsCashResultVisible ] = useState(false);
    const [ isMoneyAnought, setIsMoneyAnought ] = useState(false);
    const dispatch = useDispatch();

    const cashMoneyHandler = () => {
        const selectedCard = cards.find((card) => card.number === selectedOption);
        const cashAmountNumber = parseFloat(cashAmount);
    
        if (selectedCard) {
            const cardBalansNumber = parseFloat(selectedCard.balans.replace(/[^0-9.]/g, ''));
            const tolerance = 0.01;
    
            if (Math.abs(cashAmountNumber - cardBalansNumber) < tolerance) {
                setIsCashResultVisible(true);
                const newBalans = "00.00";
                dispatch(cashToCardBalans({ number: selectedOption, newBalans }));
            } else if (cashAmountNumber >= cardBalansNumber) {
                setIsMoneyAnought(true);
            } else {
                setIsCashResultVisible(true);
                const newBalans = (cardBalansNumber - cashAmountNumber).toFixed(2);
                dispatch(cashToCardBalans({ number: selectedOption, newBalans }));
            }
        } else {
            alert("Будь ласка, оберіть картку");
        }
    }
    
    return (
        <>
        { isCashResultVisible && (
                <div className="result" onClick={() => setIsCashResultVisible(false) }>
                    <p>Операція здійснена успішно</p>
                </div>
            )}
        { isMoneyAnought && (
                <div className="result" onClick={() => setIsMoneyAnought(false) }>
                    <p>На рахунку цієї картки не достатньо грошей для здійснення операції</p>
                </div>
            )}
            <div className="card-transfer">
                <div className="card-transfer__decor">
                    <div className="card-transfer__decor--line"></div>
                </div>
                <div className="card-transfer__block">
                    <div className="card-transfer__choose">
                        <p>Будь ласка, оберіть картку, з якої хочете зняти готівку</p>
                    </div>
                    <select className="transfer-select"
                     value={selectedOption}
                     onChange={(e) => setSelectedOption(e.target.value)}
                     >
                        <option key={ window.crypto.randomUUID() } value="Choose-card">Оберіть карту</option>
                    {
                        cards.map(card => (
                            <option key={ window.crypto.randomUUID() } value={ card.number }>Картка: { card.name }   Номер картки: { card.number }</option>   
                        ))
                    }
                    </select>
                    <div className="summ">
                        Введіть потрібну сумму
                    </div>
                    <input type="number" 
                        className="transfer-input"
                        value={ cashAmount }
                        placeholder="Введіть сумму"
                        onChange={(e) => setCashAmount(e.target.value)}
                    />
                    <button onClick={ cashMoneyHandler } className='add-cards__btn' type='submit'>Зняти готівку</button>
                    <button className='transfer-cards__btn' type='submit'><NavLink to="/cards">Гаманець</NavLink></button>
                </div>
            </div>
            <div className="transfers-cards__decor">
                International Bank
            </div>
        </>
    );
};