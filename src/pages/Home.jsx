import { NavLink } from "react-router-dom";
import ImgSlider from "../components/ImgSlider";
import TransfersDropMenu from "../components/TransfersDropMenu";

export const Home = () => {

    return (
        <div className="home">
            <div className="main-block">
                <div className="main main-menu">
                    <ul className="main-menu__items">
                        <li className="main-menu__item cash"><NavLink to='/cash'>Зняти готівку</NavLink></li>
                        <li className="main-menu__item transfers">Перекази<TransfersDropMenu/></li>
                        <li className="main-menu__item"><NavLink to='/cards'>Картки</NavLink></li>
                        <li className="main-menu__item"><NavLink to='/about'>Про нас</NavLink></li>
                        <li className="main-menu__item"><NavLink to='/contacts'>Контакти</NavLink></li>
                    </ul>
                </div>
                <div className="main main-info">
                    <ImgSlider />
                </div>
            </div>
            <div className="decoration">
                <div className='decoration__block'>
                    <div className="decoration-info">International Bank</div>
                     </div>
                </div>
           </div>
        
    );
};
