import { NavLink } from "react-router-dom";
import ImgSlider from "../components/ImgSlider";

export const Home = () => {

    return (
        <div>
            <div className="main-block">
                <div className="main main-menu">
                    <ul className="main-menu__items">
                        <li className="main-menu__item"><NavLink to='/transfers'>Перекази</NavLink></li>
                        <li className="main-menu__item"><NavLink to='/payments'>Платежі</NavLink></li>
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
                <div className='decoration__info'>International Bank</div>
            </div>
         </div>
        
    );
};
