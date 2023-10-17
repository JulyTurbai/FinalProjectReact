import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header className="header">
            <nav className="menu">
                <ul className="menu-list first">
                    <li className="menu-item"><NavLink to="/">Головна</NavLink></li>
                    <li className="menu-item"><NavLink to="/purse">Гаманець</NavLink></li>
                    <li className="menu-item"><NavLink to="/services">Сервіси</NavLink></li>
                    <li className="menu-item"><NavLink to="/archive">Архів</NavLink></li>
                </ul>
                <ul className="menu-list second">
                    <li className="menu-item">12.23.1234</li>
                    <li className="menu-item">Вхід</li>
                </ul>
            </nav>
      </header>
    );
};

export default Header;