import { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import CardTransferHandler from "../components/CardTransferHandler";

export const CardToCard = () => {
    const cards = useSelector((state) => state.cards.cards);
    const [selectedFromOption, setSelectedFromOption] = useState('');
    const [selectedToOption, setSelectedToOption] = useState('');
    const [isCashResultVisible, setIsCashResultVisible] = useState(false);
    const [transferAmount, setTransferAmount] = useState(0);
    const [isMoneyAnought, setIsMoneyAnought] = useState(false);

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
                    <CardTransferHandler
                        selectedFromOption={selectedFromOption}
                        selectedToOption={selectedToOption}
                        transferAmount={transferAmount}
                        setIsCashResultVisible={setIsCashResultVisible}
                        setIsMoneyAnought={setIsMoneyAnought}
                    />
                    <button className='transfer-cards__btn' type='submit'><NavLink to="/cards">Гаманець</NavLink></button>
                </div>
            </div>
            <div className="transfers-cards__decor">
                International Bank
            </div>
        </>
    );
};
