import React from 'react';
import { NavLink } from 'react-router-dom';

const DropMenu = () => {
    return (
        <div className='drop-menu'>
            <ul className='drop-menu__items'>
                <li className="drop-menu__item"><NavLink to="/transfers">Перекази</NavLink></li>
                <li className="drop-menu__item"><NavLink to="/payments">Платежі</NavLink></li>
                <li className="drop-menu__item"><NavLink to="/cards">Картки</NavLink></li>
            </ul>
        </div>
    );
};

export default DropMenu;