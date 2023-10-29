import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { changeCardBalans } from "../components/store/cardSlice";

export const CardToCard = () => {
    const cards = useSelector((state) => state.cards.cards);
    const dispatch = useDispatch();
    const [selectedFromOption, setSelectedFromOption] = useState('');
    const [selectedToOption, setSelectedToOption] = useState('');
    const [isCashResultVisible, setIsCashResultVisible] = useState(false);
    const [transferAmount, setTransferAmount] = useState(0);
    const [isMoneyAnought, setIsMoneyAnought] = useState(false);

    const cardToCardHandler = () => {
        const cardAmountNumber = parseFloat(transferAmount);

        if (selectedFromOption && selectedToOption) {
            const selectedCardFrom = cards.find((card) => card.number === selectedFromOption);
            const selectedCardTo = cards.find((card) => card.number === selectedToOption);

            if (selectedCardFrom && selectedCardTo) {
                const cardFromBalansNumber = parseFloat(selectedCardFrom.balans.replace(/[^0-9.]/g, ''));
                const cardToBalansNumber = parseFloat(selectedCardTo.balans.replace(/[^0-9.]/g, ''));
                

                if (cardFromBalansNumber >= cardAmountNumber) {
                    const newBalansFrom = (cardFromBalansNumber - cardAmountNumber).toFixed(2);
                    dispatch(changeCardBalans({ number: selectedFromOption, newBalans: newBalansFrom }));
                    const newBalansTo = (cardToBalansNumber + cardAmountNumber).toFixed(2);
                    dispatch(changeCardBalans({ number: selectedToOption, newBalans: newBalansTo }));

                    setIsCashResultVisible(true);
                } else {
                    setIsMoneyAnought(true);
                }
            } else {
                alert("Обрані картки не знайдені");
            }
        } else {
            alert("Будь ласка, оберіть картки для переказу");
        }
    }


    return (
        <>
            {isMoneyAnought && (
                <div className="result" onClick={() => setIsMoneyAnought(false)}>
                    <p>На рахунку цієї картки не достатньо грошей для здійснення операції</p>
                </div>
            )}
            {isCashResultVisible && (
                <div className="result" onClick={() => setIsCashResultVisible(false)}>
                    <p>Операція здійснена успішно</p>
                </div>
            )}
            <div className="card-transfer">
                <div className="card-transfer__decor">
                    <div className="card-transfer__decor--line"></div>
                </div>
                <div className="card-transfer__block">
                    <div className="card-transfer__choose">
                        <p>Будь ласка, оберіть картку, з якої хочете здійснити переказ</p>
                    </div>
                    <select
                        className="transfer-select--from"
                        value={selectedFromOption}
                        onChange={(e) => setSelectedFromOption(e.target.value)}
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
                    <div className="card-transfer__choose">
                        <p>Будь ласка, оберіть картку, на яку хочете зробити переказ</p>
                    </div>
                    <select
                        className="transfer-select--to"
                        value={selectedToOption}
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
                    <div className="summ">
                        Введіть потрібну сумму
                    </div>
                    <input type="number"
                        className="transfer-input"
                        value={transferAmount}
                        placeholder="Введіть сумму"
                        onChange={(e) => setTransferAmount(e.target.value)}
                    />
                    <button
                        onClick={cardToCardHandler}
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
