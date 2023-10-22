import { NavLink } from "react-router-dom";
import { useSelector } from 'react-redux';
import { useEffect, useState } from "react";

export const Cards = () => {
    const cards = useSelector((state) => state.cards);
    const [ status, setStatus ] = useState('');
    const [ statusBtn, setStatusBtn ] = useState();

    useEffect(() => {
        if (cards.length === 0) {
            setStatus(`На жаль, Ви не маєте карток у нашому банку. 
            Для отримання картки, перейдіть, будь-ласка, за посиланням`
            );
            setStatusBtn(<button className="add-card"><NavLink to="/addcard">Отримати картку</NavLink></button>)
        }
    }, [cards]);

    return (
        <>
        <h1>{ status }</h1>
        { statusBtn }
            <div className="cards">
                <div className="cards__block">
                    {cards.map(card => (
                        <div className={`card ${ card.class }`} key={card.id}>
                            <div className="card__main">
                                <p className="card__for-name">{card.name}</p>
                                <div className="card__bank-name">{card.bank}</div>
                            </div>
                            <div className="card__number">
                                <p>{card.number}</p>
                            </div>
                            <div className="card__money">
                                <p>{ card.balans }</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="cards__decor">
                    International Bank
                </div>
            </div>
        </>
    );
};

