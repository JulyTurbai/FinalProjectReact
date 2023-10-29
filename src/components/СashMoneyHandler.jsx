import { changeCardBalans } from "./store/cardSlice";

export const cashMoneyHandler = (selectedOption, selectedCard, cashAmount, setIsCashResultVisible, setIsMoneyAnought, dispatch) => {
    const cashAmountNumber = parseFloat(cashAmount);

    if (selectedCard) {
        const cardBalansNumber = parseFloat(selectedCard.balans.replace(/[^0-9.]/g, ''));
        const tolerance = 0.01;

        if (Math.abs(cashAmountNumber - cardBalansNumber) < tolerance) {
            setIsCashResultVisible(true);
            const newBalans = "00.00";
            dispatch(changeCardBalans({ number: selectedOption, newBalans }));
        } else if (cashAmountNumber >= cardBalansNumber) {
            setIsMoneyAnought(true);
        } else {
            setIsCashResultVisible(true);
            const newBalans = (cardBalansNumber - cashAmountNumber).toFixed(2);
            dispatch(changeCardBalans({ number: selectedOption, newBalans }));
        }
    } else {
        alert("Будь ласка, оберіть картку");
    }
};