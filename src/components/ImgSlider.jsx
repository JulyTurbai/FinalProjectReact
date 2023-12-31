import { useState } from "react";

const ImgSlider = () => {

    const imgs = [
        '/img/main-img3.jpg',
        '/img/main-img2.png',
        '/img/main-img4.png',
        '/img/main-img5.png',
        '/img/banner1.png',
    ];

    const [ currentImgIndex, setCurrentImgIndex ] = useState(0);

    const prevSlide = () => {
        setCurrentImgIndex((prevIndex) => (prevIndex === 0 ? imgs.length -1 : prevIndex - 1));
    };

    const nextSlide = () => {
        setCurrentImgIndex((prevIndex) => (prevIndex === imgs.length -1 ? 0 : prevIndex + 1))
    }
    
    return (
        <div className="img-slider">
            <button className="slider-btn prev" onClick={prevSlide}>&lt;</button>
            <img className="slider-imgs" src={ imgs[currentImgIndex] } alt="slide" />
            <button className="slider-btn next" onClick={nextSlide}>&gt;</button>
        </div>
    );
};

export default ImgSlider;