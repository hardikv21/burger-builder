import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import './NavigationItems.css';

const navigationItems = (props) => {
    return (
        <ul className="NavigationItems">
            <NavigationItem link="/">Burger Builder</NavigationItem>
            {
                props.isAuth ?
                    <NavigationItem link="/orders">Orders</NavigationItem>
                    :
                    null
            }
            {
                !props.isAuth ? 
                    <NavigationItem link="/auth">Auth</NavigationItem>
                    :
                    <NavigationItem link="/logout">Logout</NavigationItem>
            }
        </ul>
    );
}

export default navigationItems;