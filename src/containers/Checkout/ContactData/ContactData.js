import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '../../../components/UI/Button/Button';
import Input from '../../../components/UI/Input/Input';
import Spinner from '../../../components/UI/Spinner/Spinner';
import './ContactData.css';
import withErrorHandler from '../../../hoc/withErrorHandler/withErrorHandler';
import { checkValidation } from '../../../shared/utility';
import * as orderActions from '../../../store/actions/index';
import axios from '../../../axios-orders';

class ContactData extends Component { 
    state = {
        orderForm: {
            name: {
                elementType: "input",
                elementConfig: {
                    type: "text",
                    placeholder: "Full Name"
                },
                value: "",
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            street: {
                elementType: "input",
                elementConfig: {
                    type: "text",
                    placeholder: "Street Name"
                },
                value: "",
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            zipcode: {
                elementType: "input",
                elementConfig: {
                    type: "text",
                    placeholder: "ZipCode"
                },
                value: "",
                validation: {
                    required: true,
                    minLength: 6,
                    maxLength: 6
                },
                valid: false,
                touched: false
            },
            country: {
                elementType: "input",
                elementConfig: {
                    type: "text",
                    placeholder: "Country"
                },
                value: "",
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            email: {
                elementType: "input",
                elementConfig: {
                    type: "email",
                    placeholder: "E-mail"
                },
                value: "",
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            deliveryMethod: {
                elementType: "select",
                elementConfig: {
                    options: [
                        {value: "fastest", displayValue: "Fastest"},
                        {value: "regular", displayValue: "Regular"},
                        {value: "cheapest", displayValue: "Cheapest"},
                    ]
                },
                value: "fastest",
                valid: true
            }
        },
        formIsValid: false
    };

    orderHandler = (event) => {
        event.preventDefault();
        const formData = {};
        for(let key in this.state.orderForm) {
            formData[key] = this.state.orderForm[key].value;
        }
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            orderData: formData,
            userId: this.props.userId
        };
        this.props.onOrderBurger(order, this.props.token);
    }

    inputChangedHandler = (event, inputIdentifier) => {
        const updatedOrderForm = {
            ...this.state.orderForm
        };
        const updatedFormElement = {
            ...updatedOrderForm[inputIdentifier]
        };
        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = checkValidation(updatedFormElement.value, updatedFormElement.validation);
        updatedFormElement.touched = true;
        updatedOrderForm[inputIdentifier] = updatedFormElement;
        let formIsValid = true;
        for(let key in updatedOrderForm) {
            formIsValid = updatedOrderForm[key].valid && formIsValid;
        }
        this.setState({
            orderForm: updatedOrderForm,
            formIsValid: formIsValid
        });
    }

    render () {
        let formElementArray = [];

        for(let key in this.state.orderForm) {
            formElementArray.push({
                id: key,
                config: this.state.orderForm[key]
            });
        }

        let form = (
            <form onSubmit={this.orderHandler}>
                {formElementArray.map(formElement => {
                    return (
                        <Input
                            key={formElement.id}
                            elementType={formElement.config.elementType}
                            elementConfig={formElement.config.elementConfig}
                            value={formElement.config.value}
                            changed={(event) => this.inputChangedHandler(event, formElement.id)}
                            shouldValidate={formElement.config.validation}
                            invalid={!formElement.config.valid}
                            touched={formElement.config.touched}
                        />
                    );
                })}
                <Button btnType="Success" clicked={this.orderHandler} disabled={!this.state.formIsValid}>Finally Done!!</Button>
            </form>
        );
        
        if(this.props.loading) {
            form = <Spinner />;
        }
        return (
            <div className="ContactData">
                <h4>Enter your details for to buy your permant burger</h4>
                {form}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ingredients: state.burgerBuilder.ingredients,
        price: state.burgerBuilder.price,
        loading: state.order.loading,
        token: state.auth.token,
        userId: state.auth.userId
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onOrderBurger: (orderData, token) => dispatch(orderActions.purchaseBurger(orderData, token))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(ContactData, axios));