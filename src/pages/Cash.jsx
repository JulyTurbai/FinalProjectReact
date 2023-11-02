import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { cashMoneyHandler } from '../components/СashMoneyHandler';

export const Cash = () => {
    const cards = useSelector((state) => state.cards.cards);
    const [ selectedOption, setSelectedOption ] = useState(''); 
    const [ cashAmount, setCashAmount ] = useState(0);
    const [ isCashResultVisible, setIsCashResultVisible ] = useState(false);
    const [ isMoneyAnought, setIsMoneyAnought ] = useState(false);
    const [ isCorrectSumm, setIsCorrectSumm ] = useState(false);
    const [isCard, setIsCard ] = useState(false);
    const dispatch = useDispatch();
    const selectedCard = cards.find((card) => card.number === selectedOption);
    const cashAmountNumber = parseFloat(cashAmount);
    
    
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
            { isCorrectSumm && (
                <div className="result" onClick={() => setIsCorrectSumm(false) }>
                    <p>Введено некоректну суму</p>
                </div>
            )}
             { isCard && (
                <div className="result" onClick={() => setIsCard(false) }>
                    <p>Будь ласка, оберіть картку</p>
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
                     value={ selectedOption }
                     onChange={(e) => setSelectedOption(e.target.value)}
                     >
                        <option key={ window.crypto.randomUUID() } value="Choose-card">Оберіть карту</option>
                    {
                        cards.map(card => (
                            <option key={ window.crypto.randomUUID() } value={ card.number }> { card.name }  { card.number }  { card.balans }</option>   
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
                    <button onClick={() => cashMoneyHandler(selectedOption, selectedCard, cashAmount, setIsCashResultVisible, setIsCorrectSumm , setIsMoneyAnought, setIsCard, dispatch) } className='add-cards__btn' type='submit'>Зняти готівку</button>
                    <NavLink to="/cards" type='submit' className='transfer-cards__btn'>
                        Гаманець
                    </NavLink>

                </div>
            </div>
            <div className="transfers-cards__decor">
                International Bank
            </div>
        </>
    );
};