import { useState } from "react";
import { useDispatch } from "react-redux";
import { addCard } from "../components/store/cardSlice";
import AddCardsComponent from "../components/AddCardsComponent";

export const AddCard = () => {
    const dispatch = useDispatch();
    const [ selectedOption, setSelectedOption ] = useState('');
    
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
            <AddCardsComponent
                setSelectedOption={ setSelectedOption }
                selectedOption={ selectedOption }
                handleSelectChange={ handleSelectChange }
            />
            
            <div className="add-cards__decor">
                International Bank
            </div>
        </>
    );
};