import React from 'react';
import Logo from '../images/logo.jpg';
import './Header.css';

const Header = () => {
    return(
        <div className="header">
            <img src={Logo} alt="logo" /><h1>Mini-Wiki</h1>
        </div>
    )    
}

export default Header;
