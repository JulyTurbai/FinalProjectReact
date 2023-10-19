import React from 'react';

const DropMenu = () => {
    return (
        <div className='drop-menu'>
            <ul className='drop-menu__items'>
                <li className="drop-menu__item">Перекази</li>
                <li className="drop-menu__item">Платежі</li>
                <li className="drop-menu__item">Картки</li>
            </ul>
        </div>
    );
};

export default DropMenu;