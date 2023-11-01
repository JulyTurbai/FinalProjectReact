import { useEffect, useState } from "react";
import CardsComponent from "../components/CardsComponent";
import { useSelector } from "react-redux";

export const Cards = () => {
    const cards = useSelector((state) => state.cards.cards);
    const [ cardStatus, setCardStatus ] = useState('');
    
    useEffect(() => {
        if (cards.length === 0) {
            setCardStatus(<div className="card-status">
                            <h3 className="card-status__title">На жаль, Ви не маєте карток у нашому банку. 
                                Для отримання картки перейдіть, будь-ласка, за посиланням
                            </h3>
                            <div className="card-status__decor"></div>
                        </div>
                    );
                }
        }, [cards]);
    
        return (
        <>
            { cardStatus }
            <CardsComponent/>
        </>
    );
};