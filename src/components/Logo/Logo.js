import React from 'react';
import BurgerLogo from '../../assets/images/burger-logo.png';
import './Logo.css';

const logo = (props) => {
    return (
        <div className="Logo" style={{height: props.height, marginBottom: props.marginBottom}}>
            <img src={BurgerLogo} alt="Burger-Builder"/>
        </div>
    );
}

export default logo;