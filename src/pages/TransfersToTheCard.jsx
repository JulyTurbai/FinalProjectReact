import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { transferMoneyHandler } from "../components/TransferMoneyHandler";

export const TransfersToTheCard = () => {
    const cards = useSelector((state) => state.cards.cards);
    const [ selectedOption, setSelectedOption ] = useState(''); 
    const [ transferAmount, setTransferAmount ] = useState(0);
    const [ isTransferResultVisible, setIsTransferResultVisible ] = useState(false);
    const [ isCardResultVisible, setIsCardResultVisible ] = useState(false);
    const [ isSummVisible, setIsSummVisible ] = useState(false);
    const dispatch = useDispatch();
    const selectedCard = cards.find((card) => card.number === selectedOption);

    return (
        <>
            { isTransferResultVisible && (
                <div className="result" onClick={() => setIsTransferResultVisible(false)}>
                    <p>Переказ успішно здійснено</p>
                </div>
            )}
            { isCardResultVisible && (
                <div className="result" onClick={() => setIsCardResultVisible(false)}>
                    <p>Будь ласка, оберіть картку</p>
                </div>
            )}
            { isSummVisible && (
                <div className="result" onClick={() => setIsSummVisible(false)}>
                    <p>Будь ласка, введіть сумму</p>
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
                    <div className="summ">
                        Введіть потрібну сумму
                    </div>
                    <input type="number" 
                        className="transfer-input"
                        value={ transferAmount }
                        placeholder="Введіть сумму"
                        onChange={(e) => setTransferAmount(e.target.value)}
                    />
                    <button 
                        onClick={() => transferMoneyHandler
                        (
                            selectedCard, 
                            transferAmount, 
                            dispatch, 
                            setIsTransferResultVisible, 
                            setIsCardResultVisible,
                            setIsSummVisible
                        )} 
                        className='add-cards__btn' type='submit'>
                        Здійснити переказ
                    </button>
                    <button className='transfer-cards__btn' type='submit'><NavLink to="/cards">Гаманець</NavLink></button>
                </div>
            </div>
            <div className="transfers-cards__decor">
                International Bank
            </div>
        </>
    );
};
