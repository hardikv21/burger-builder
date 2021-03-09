import React, { Component } from 'react';
import Button from '../../UI/Button/Button';
import Auxiliary from '../../../hoc/Auxiliary/Auxiliary';

class OrderSummary extends Component {
    render() {
        const ingredientSummary = Object.keys(this.props.ingredients)
        .map((igKey) => {
            return <li 
                key={igKey}>
                <span style={{textTransform: "capitalize"}}>{igKey}</span> :- {this.props.ingredients[igKey]}
            </li>
        });

        return (
            <Auxiliary>
                <h3>Your Order</h3>
                <p>Delicious burgerrrr with:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p>Final Price:- <strong>${this.props.price.toFixed(2)}</strong></p>
                <p>Checkout!???</p>
                <Button btnType="Danger" clicked={this.props.cancelHandler}>CANCEL</Button>
                <Button btnType="Success" clicked={this.props.continueHandler}>CONTINUE</Button>
            </Auxiliary>
        );
    }
}

export default OrderSummary;