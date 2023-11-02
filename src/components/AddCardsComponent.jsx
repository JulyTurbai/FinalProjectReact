import React from 'react';
import { NavLink } from 'react-router-dom';

const AddCardsComponent = ({ setSelectedOption, selectedOption, handleSelectChange }) => {
    return (
        <div className="add-cards">
            <div className="add-cards__block">
            <label className="choose-label">Оберіть картку:</label>
                <select
                    value={selectedOption}
                    onChange={(e) => setSelectedOption(e.target.value) }
                >
                    <option value="Choose-card">Обрати карту</option>
                    <option value="Universal">Universal</option>
                    <option value="Premium">Premium</option>
                    <option value="Gold">Gold</option>
                </select>
                <label className="choose-label">Як зручно отримати:</label>
                <select>
                    <option value="branch">У відділенні</option>
                    <option value="post">Новою поштою</option>
                    <option value="online">Online</option>
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