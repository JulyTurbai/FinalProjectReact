import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { addCard } from "../components/store/cardSlice";

export const AddCard = () => {
    const dispatch = useDispatch();
    const [selectedOption, setSelectedOption] = useState('');
    
    function generateRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }
      
      function generateBankCardNumber() {
        const cardNumber = [];
        for (let i = 0; i < 16; i++) {
          cardNumber.push(generateRandomNumber(0, 9));
        }
        return cardNumber.join('');
      }

    const handleSelectChange = (e) => {
        e.preventDefault();
        dispatch(addCard({ 
            id: window.crypto.randomUUID(), 
            class: selectedOption, 
            name: selectedOption, 
            bank: 'Power Banking', 
            number: generateBankCardNumber(), 
            balans: ' 00.00 UAH', 
            balanceHistory: [
                {
                  amount:' 00.00 UAH',
                  time: "2023-10-30T10:30:00Z"
                }
              ]
        }));
    }

    return (
        <>
        <div className="add-cards">
            <div className="add-cards__block">
            <label className="choose-label">Оберіть картку:</label>
                <select
                    value={selectedOption}
                    onChange={(e) => setSelectedOption(e.target.value) }
                >
                    <option value="Choose-card">Обрати карту</option>
                    <option value="Universal">Universal</option>
                    <option value="Premium">Premium</option>
                    <option value="Gold">Gold</option>
                </select>
                <label className="choose-label">Як зручно отримати:</label>
                <select>
                    <option value="branch">У відділенні</option>
                    <option value="post">Новою поштою</option>
                    <option value="online">Online</option>
                </select>
                <button onClick={ handleSelectChange } className='add-cards__btn' type='submit'><NavLink to="/cards">Отримати картку</NavLink></button>
            </div>
            
        </div>
        <div className="add-cards__decor">
            International Bank
        </div>
        </>
    );
};