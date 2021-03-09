import React, { Component } from 'react';
import { connect } from 'react-redux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Modal from '../../components/UI/Modal/Modal';
import Spinner from '../../components/UI/Spinner/Spinner';
import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as action from '../../store/actions/index';
import axios from '../../axios-orders';

class BurgerBuilder extends Component {
    state = {
        purchasing: false
    };

    componentDidMount () {
        this.props.onInitIngredients();
    }

    updatePurchaseHandler (updatedIngredient) {
        const count = Object.keys(updatedIngredient)
            .map(keyIngredient => {
                return updatedIngredient[keyIngredient];
            })
            .reduce((sum, el) => {
                return sum + el;
            }, 0);
        return count > 0;
    }

    purchaseHandler = () => {
        if(this.props.isAuthenticated) {
            this.setState({
                purchasing: true
            });
        }
        else {
            this.props.onSetAuthRedirectPath("/checkout");
            this.props.history.push("/auth");
        }
    }

    purchaseCancelHandler = () => {
        this.setState({
            purchasing: false
        });
    }

    purchaseContinueHandler = () => {
        this.props.onPurchaseInit();
        this.props.history.push("/checkout");
    }

    render () {
        const disabledInfo = {
            ...this.props.ingredients
        };

        for(let key in disabledInfo) {
            disabledInfo[key] = (disabledInfo[key] <= 0);
        }

        let orderSummary = null;

        let burger = this.props.error ? <p>Error in ingredients loading...</p> : <Spinner />;

        if(this.props.ingredients) {
            burger = (
                <Auxiliary>
                    <Burger
                        ingredients={this.props.ingredients}
                    />
                    <BuildControls
                        addIngredient={this.props.onIngredientAdded}
                        removeIngredient={this.props.onIngredientRemoved}
                        disabledInformation={disabledInfo}
                        price={this.props.price}
                        purchase={this.updatePurchaseHandler(this.props.ingredients)}
                        ordered={this.purchaseHandler}
                        isAuth={this.props.isAuthenticated}
                    />
                </Auxiliary>
            );
            orderSummary = <OrderSummary
                ingredients={this.props.ingredients}
                continueHandler={this.purchaseContinueHandler}
                cancelHandler={this.purchaseCancelHandler}
                price={this.props.price}
            />;
        }

        return (
            <Auxiliary>
                <Modal
                    show={this.state.purchasing}
                    modalClosed={this.purchaseCancelHandler}>
                    {orderSummary}
                </Modal>
                {burger}
            </Auxiliary>
        );
    }
}

const mapStateToProps = state => {
    return {
        ingredients: state.burgerBuilder.ingredients,
        price: state.burgerBuilder.price,
        error: state.burgerBuilder.error,
        isAuthenticated: state.auth.token !== null
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onIngredientAdded: (name) => dispatch(action.addIngredient(name)),
        onIngredientRemoved: (name) => dispatch(action.removeIngredient(name)),
        onInitIngredients: () => dispatch(action.initIngredients()),
        onPurchaseInit: () => dispatch(action.purchaseInit()),
        onSetAuthRedirectPath: (path) => dispatch(action.setAuthRedirectPath(path))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios));