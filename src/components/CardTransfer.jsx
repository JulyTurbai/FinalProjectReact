import React from 'react';
import SelectFromCardToCard from './SelectFromCardToCard';
import CardTransferHandler from './CardTransferHandler';
import { NavLink } from 'react-router-dom';

const CardTransfer = ({ selectedFromOption, setSelectedFromOption, selectedToOption, 
    setSelectedToOption, transferAmount, setTransferAmount, setIsCashResultVisible, setIsMoneyAnought, setTheSameCard,
    setIsCorrectSumm
}) => {
    return (
        <div className="card-transfer">
                <div className="card-transfer__decor">
                    <div className="card-transfer__decor--line"></div>
                </div>
                <div className="card-transfer__block">
                    <div className="card-transfer__choose">
                        <p>Будь ласка, оберіть картку, з якої хочете здійснити переказ</p>
                    </div>
                   
                   <SelectFromCardToCard 
                        setSelectedFromOption={ setSelectedFromOption} 
                        selectedFromOption={ selectedFromOption }
                   />
                    <div className="card-transfer__choose">
                        <p>Будь ласка, оберіть картку, на яку хочете зробити переказ</p>
                    </div>
                    
                    <SelectFromCardToCard 
                        setSelectedFromOption={ setSelectedToOption} 
                        selectedFromOption={ selectedToOption }
                   />

                    <div className="summ">
                        Введіть потрібну суму
                    </div>
                    <input type="number"
                        className="transfer-input"
                        value={transferAmount}
                        placeholder="Введіть сумму"
                        onChange={(e) => setTransferAmount(e.target.value)}
                    />
                    <CardTransferHandler
                        selectedFromOption={selectedFromOption}
                        selectedToOption={selectedToOption}
                        transferAmount={transferAmount}
                        setIsCashResultVisible={setIsCashResultVisible}
                        setIsMoneyAnought={setIsMoneyAnought}
                        setTheSameCard={ setTheSameCard }
                        setIsCorrectSumm={ setIsCorrectSumm }
                    />
                    <NavLink to="/cards" type='submit' className='transfer-cards__btn'>
                        Гаманець
                    </NavLink>
                </div>
            </div>
    );
};

export default CardTransfer;