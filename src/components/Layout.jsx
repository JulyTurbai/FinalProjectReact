import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';


const Layout = () => {
    return (
        <div className='container'>
            
            <Header/>
            <Main/>
            <Footer/>
        
        </div>
    );
};

export default Layout;