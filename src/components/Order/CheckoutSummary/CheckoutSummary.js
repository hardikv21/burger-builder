import React from 'react';
import Burger from '../../Burger/Burger';
import './CheckoutSummary.css';
import Button from '../../UI/Button/Button';

const checkoutSummary = (props) => {
    return (
        <div className="CheckoutSummary">
            <h1>It will be honor to serve the BURGER!!!</h1>
            <div style={{width: "100%", margin: "auto"}}>
                <Burger ingredients={props.ingredients} />
            </div>
            <Button
                btnType="Danger"
                clicked={props.checkoutCanceled}>
                CANCEL
            </Button>
            <Button
                btnType="Success"
                clicked={props.checkoutContinued}>
                CONTINUE
            </Button>
        </div>
    );
}

export default checkoutSummary;