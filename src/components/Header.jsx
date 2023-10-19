import { NavLink,  } from 'react-router-dom';
import { useLogin } from '../hook/UseLogin';
import DropMenu from './DropMenu';

const Header = () => {
    const { user, singOut } = useLogin();
    console.log(user)
    return (
        <header className="header">
            <nav className="menu">
                <ul className="menu-list first">
                    <li className="menu-item logo"><NavLink to="/"><img src="img/BankLogo.png" alt="" /></NavLink></li>
                    <li className="menu-item purse"><NavLink to="/purse">Гаманець</NavLink></li>
                    <li className="menu-item services">Сервіси<DropMenu/></li>
                    <li className="menu-item archive"><NavLink to="/archive">Архів</NavLink></li>
                </ul>
                <div className="menu-list second">
                    <div className='dop-info'>International Bank</div>
                    <div className="menu-item">12.23.1234</div>
                    {user && <button onClick={ singOut } className="login">Вихід</button>}
                </div>
            </nav>
      </header>
    );
};

export default Header;