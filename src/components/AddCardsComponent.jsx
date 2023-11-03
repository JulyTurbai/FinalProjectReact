import React from 'react';
import { NavLink } from 'react-router-dom';

const AddCardsComponent = ({ setSelectedOption, selectedOption, handleSelectChange }) => {
    return (
        <div className="add-cards">
            <div className="add-cards__block">
                <label className="choose-label">Оберіть картку:</label>
                <select
                    value={selectedOption}
                    onChange={(e) => setSelectedOption(e.target.value)}
                >
                    <option key="Universal" value="Universal">Universal</option>
                    <option key="Premium" value="Premium">Premium</option>
                    <option key="Gold" value="Gold">Gold</option>
                </select>
                <label className="choose-label">Як зручно отримати:</label>
                <select>
                    <option key="branch" value="branch">У відділенні</option>
                    <option key="post" value="post">Новою поштою</option>
                    <option key="online" value="online">Online</option>
                </select>
                <div onClick={handleSelectChange} className='add-cards__btn'>
                    <NavLink to="/cards">
                        <div>Отримати картку</div>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default AddCardsComponent;
