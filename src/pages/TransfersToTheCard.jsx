import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { transferToCardBalans } from "../components/store/cardSlice";

export const TransfersToTheCard = () => {
    const cards = useSelector((state) => state.cards.cards);
    const [ selectedOption, setSelectedOption ] = useState(''); 
    const [ transferAmount, setTransferAmount ] = useState(0);
    const [ isTransferResultVisible, setIsTransferResultVisible ] = useState(false);
    const dispatch = useDispatch();

    const transferMoneyHandler = () => {
        const selectedCard = cards.find((card) => card.number === selectedOption);
        if (!selectedCard) {
            alert("Будь ласка, оберіть картку");
          } else if (transferAmount === 0) {
            alert("Введіть, будь ласка, суму переказу");
          } else {
            const newBalans = parseFloat(selectedCard.balans) + parseFloat(transferAmount);
            dispatch(transferToCardBalans({ number: selectedOption, newBalans }));
            setIsTransferResultVisible(true);
          }
          console.log(cards)
    }

    return (
        <>
            {isTransferResultVisible && (
                <div className="result" onClick={() => setIsTransferResultVisible(false)}>
                    <p>Переказ успішно здійснено</p>
                </div>
            )}
            <div className="card-transfer">
                <div className="card-transfer__decor">
                    <div className="card-transfer__decor--line"></div>
                </div>
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
                            <option key={ window.crypto.randomUUID() } value={ card.number }>Картка: { card.name }   Номер картки: { card.number }</option>   
                        ))
                    }
                    </select>
                    <div className="summ">
                        Введіть потрібну сумму
                    </div>
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
