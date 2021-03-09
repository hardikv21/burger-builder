import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import './SideDrawer.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Auxiliary from '../../../hoc/Auxiliary/Auxiliary';

const sideDrawer = (props) => {
    let showClass = ["SideDrawer", "Close"];
    if(props.open) {
        showClass = ["SideDrawer", "Open"];
    }

    return (
        <Auxiliary>
            <Backdrop
                show={props.open}
                clicked={props.closed}
            />
            <div className={showClass.join(" ")} onClick={props.closed}>
                <Logo height="11%" marginBottom="35px"/>
                <nav>
                    <NavigationItems isAuth={props.isAuth} />
                </nav>
            </div>
        </Auxiliary>
    );
}

export default sideDrawer;