import { useState } from "react";
import CardTransfer from "../components/CardTransfer";

export const CardToCard = () => {
    const [ selectedFromOption, setSelectedFromOption ] = useState('');
    const [selectedToOption, setSelectedToOption] = useState('');
    const [isCashResultVisible, setIsCashResultVisible] = useState(false);
    const [transferAmount, setTransferAmount] = useState(0);
    const [isMoneyAnought, setIsMoneyAnought] = useState(false);
    const [ theSameCard, setTheSameCard ] = useState(false)
    const [ isCorrectSumm, setIsCorrectSumm ] = useState(false)

    return (
        <>
            { isMoneyAnought && (
                <div className="result" onClick={() => setIsMoneyAnought(false)}>
                    <p>На рахунку цієї картки не достатньо грошей для здійснення операції</p>
                </div>
            )}
            { isCashResultVisible && (
                <div className="result" onClick={() => setIsCashResultVisible(false)}>
                    <p>Операція здійснена успішно</p>
                </div>
            )}
            { theSameCard && (
                <div className="result" onClick={() => setTheSameCard(false)}>
                    <p>Обрано дві однакових картки</p>
                </div>
            )}
            { isCorrectSumm && (
                <div className="result" onClick={() => setIsCorrectSumm(false)}>
                    <p>Введено некоректну суму</p>
                </div>
            )}


            <CardTransfer
            selectedFromOption={ selectedFromOption }
            setSelectedFromOption={ setSelectedFromOption }
            selectedToOption={ selectedToOption }
            setSelectedToOption={ setSelectedToOption }
            transferAmount={ transferAmount }
            setTransferAmount={ setTransferAmount }
            setIsMoneyAnought={ setIsMoneyAnought }
            isCashResultVisible={ isCashResultVisible }
            setIsCashResultVisible={ setIsCashResultVisible }
            setTheSameCard={ setTheSameCard }
            setIsCorrectSumm={ setIsCorrectSumm }
            />
            
            <div className="transfers-cards__decor">
                International Bank
            </div>
        </>
    );
};
