import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { updateBalans } from "../components/store/cardSlice";

export const TransfersToTheCard = () => {
    const cards = useSelector((state) => state.cards.cards);
    const [selectedOption, setSelectedOption] = useState(''); 
    const [transferAmount, setTransferAmount] = useState(0);
    const dispatch = useDispatch();

    const transferMoneyHandler = () => {
        if(transferAmount && selectedOption === 0 ) {
            alert('Введіть, будь ласка сумму переказу')
        } else {
            const newBalans = transferAmount; 
            const cardNumber = selectedOption; 
            dispatch(updateBalans({ number: cardNumber, newBalans }));
            alert('Переказ успішно здійснено')
        }
        
    }

    return (
        <>
            <div className="card-transfer">
                <div className="card-transfer__block">
                    <div className="card-transfer__choose">
                        <p>Будь ласка, оберіть картку, на яку хочете здійснити переказ</p>
                    </div>
                    <select className="transfer-select"
                     value={selectedOption}
                     onChange={(e) => setSelectedOption(e.target.value)}
                     >
                        <option key={ window.crypto.randomUUID() } value="Choose-card">Оберіть карту</option>
                    {
                        cards.map(card => (
                            <>
                                <option key={ window.crypto.randomUUID() } value={ card.number }>Картка: { card.name }   Номер картки: { card.number }</option>
                            </>
                        ))
                    }
                    </select>
                    <input type="number" 
                        className="transfer-input"
                        value={transferAmount}
                        placeholder="Введіть сумму"
                        onChange={(e) => setTransferAmount(e.target.value)}
                    />
                    <button  onClick={ transferMoneyHandler} className='add-cards__btn' type='submit'>Здійснити переказ</button>
                    <button className='transfer-cards__btn' type='submit'><NavLink to="/cards">Гаманець</NavLink></button>
                </div>
            </div>
            <div className="transfers-cards__decor">
                International Bank
            </div>
        </>
    );
};
