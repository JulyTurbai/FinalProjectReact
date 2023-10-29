import React from 'react';
import { NavLink } from 'react-router-dom';

const TransfersDropMenu = () => {
    return (
            <div className='transfers-menu'>
                <ul className='transfers-menu__items'>
                    <li className="transfers-menu__item"><NavLink to="/transferstothecard">На картку</NavLink></li>
                    <li className="transfers-menu__item"><NavLink to="/cardtocard">З картки на картку</NavLink></li>
                </ul>
            </div>
    );
};

export default TransfersDropMenu;