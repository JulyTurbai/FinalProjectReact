import { useSelector } from "react-redux";

export const Archive = () => {
    const cards = useSelector((state) => state.cards.cards);
    console.log(cards)
    return (
        <div>
            <p>{ cards[0].name }</p>
            <p>{ cards[0].number }</p>
            <p>{ cards[0].balans }</p>
        </div>
    );
};

