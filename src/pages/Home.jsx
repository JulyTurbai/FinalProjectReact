import ImgSlider from "../components/ImgSlider";

export const Home = () => {

    return (
        <div>
            <div className="main-block">
                <div className="main main-menu">
                    <ul className="main-menu__items">
                        <li className="main-menu__item">Перекази</li>
                        <li className="main-menu__item">Платежі</li>
                        <li className="main-menu__item">Картки</li>
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
