import React from 'react';
import "../styles/Footer.css";

const Footer = () => {
    return (
        <div className='component-footer'>
            <div className='copyright'>
                &copy; 
                <a href="https://layesall.com/" title='Layesall, the owner of this app'>Layesall</a> 
                &middot; 
                2021
            </div>
        </div>
    );
};

export default Footer;