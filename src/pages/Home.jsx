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
            <div className="decor">
                <div className="decor-main">
                <p className="decor__text">Power Banking.....</p>
                <img src="img/BankLogo.png" alt="" />
                </div>
                <p className="decor__text-descr">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                <br/>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a 
                type specimen book. It has survived not only five centuries
                <br/>Contrary to popular belief, Lorem Ipsum is not simply random text.
                <br/>It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
            </div>

         </div>
        
    );
};
