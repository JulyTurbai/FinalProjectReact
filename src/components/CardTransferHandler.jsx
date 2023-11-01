import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeCardBalans } from "../components/store/cardSlice";

const CardTransferHandler = ({ selectedFromOption, selectedToOption, transferAmount, setIsCashResultVisible, setIsMoneyAnought, setTheSameCard }) => {
  const dispatch = useDispatch();
  const cards = useSelector((state) => state.cards.cards);

  const cardToCardHandler = () => {
    const cardAmountNumber = parseFloat(transferAmount);

    if (selectedFromOption && selectedToOption) {
      if (selectedFromOption === selectedToOption) {
        setTheSameCard(true)
        return; 
      }

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
  };

  return (
    <button onClick={cardToCardHandler} className='add-cards__btn' type='submit'>
      Здійснити переказ
    </button>
  );
};

export default CardTransferHandler;
