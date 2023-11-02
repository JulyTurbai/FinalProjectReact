import { changeCardBalans } from "./store/cardSlice";

export const transferMoneyHandler = (selectedCard, transferAmount, dispatch, setIsTransferResultVisible, setIsCardResultVisible, setIsSummVisible, setIsCorrectSumm) => {
  if (!selectedCard) {
    setIsCardResultVisible(true);
  } else if (transferAmount === 0 || transferAmount < 0 || isNaN(transferAmount)) {
    setIsCorrectSumm(true)
  } else {
    const newBalans = parseFloat(selectedCard.balans) + parseFloat(transferAmount);
    dispatch(changeCardBalans({ number: selectedCard.number, newBalans }));
    setIsTransferResultVisible(true);
  }
};