import React from 'react';

export const Contacts = () => {
    return (
        <div className='contacts'>
             <div className="contacts-decor__decor-one"></div>
            <div className="contacts__main">
                <h1 className='contacts__title'>Контакти</h1>
                <img className='contacts__logo' src="img/BankLogo.png" alt="" />
            </div>
            <div className="contacts__block">
                <div className="contacts__content">
                    <p className='contacts__item'>
                        Телефон: 099-8676-585-89<br/>
                    </p>
                    <p className='contacts__item'>
                        Адреса: On the other hand, <br/>
                        we denounce with righteous indignation and c86966 dislike.
                    </p>
                    <p className="contacts__item">
                        Головна адреса: Temporibus autem quibusdam <br/>
                        et aut officiis debitis 
                        aut rerum necessitatibus 90977
                    </p>
                </div>
                <div className="contacts-decor__decor-two">
                    <img src="img/contact-main.png" alt="" />
                </div>
            </div>
            <div className="contacts-decor__decor-three">International Bank</div>
        </div>
    );
};
