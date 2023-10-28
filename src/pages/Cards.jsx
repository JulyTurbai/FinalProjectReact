import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from "react";
import { deleteCard } from "../components/store/cardSlice";

export const Cards = () => {
    const cards = useSelector((state) => state.cards.cards);
    const [ cardStatus, setCardStatus ] = useState('');
    const dispatch = useDispatch();
    
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

        console.log(cards)

    return (
        <>
            { cardStatus }
            <div className="cards">
            <div className="cards__block">
                {cards.map(card => (
                    <div className="card__block" key={ window.crypto.randomUUID() }>
                        <div className={`card ${ card.class }`}>
                            <div className="card__main">
                                <p className="card__for-name">{card.name}</p>
                                <p className="card__bank-name">{card.bank}</p>
                            </div>
                            <div className="card__number">
                                <p>{card.number}</p>
                            </div>
                            <div className="card__money">
                                <p>{ card.balans }</p>
                            </div>
                        </div>
                       <button onClick={() => dispatch(deleteCard(card.id))} className="card__close">Закрити картку</button>
                    </div>
                   ))}
            </div>
                <div className="cards__get-btn">
                    <button className="cards__button-get"><NavLink to="/addcard">Отримати картку</NavLink></button>
                </div>
               <div className="cards__decor">
                    International Bank
                </div>
            </div>
        </>
    );
};