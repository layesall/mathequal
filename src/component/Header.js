import React from 'react';
import Logo from '../assets/logo.png';
import "../styles/Header.css";

const Header = () => {
    return (
        <div className="component-header">
            <div className="logo"> 
                <a href='index.html' >
                    <img src={Logo}  alt='Logo of Mathequal' />
                    <span>Mathequal</span>
                </a>
            </div>

        </div>
    );
};

export default Header;