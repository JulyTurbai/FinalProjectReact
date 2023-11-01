import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCard } from './store/cardSlice';
import { NavLink } from 'react-router-dom';

const CardsComponent = ({ }) => {
    const cards = useSelector((state) => state.cards.cards);
    const dispatch = useDispatch();
    return (
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
    );
};

export default CardsComponent;