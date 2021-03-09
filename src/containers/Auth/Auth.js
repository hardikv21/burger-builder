import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Button from '../../components/UI/Button/Button';
import Input from '../../components/UI/Input/Input';
import Spinner from '../../components/UI/Spinner/Spinner';
import './Auth.css';
import { checkValidation } from '../../shared/utility';
import * as actions from '../../store/actions/index';

class Auth extends Component {
    state = {
        controls: {
            email: {
                elementType: "input",
                elementConfig: {
                    type: "email",
                    placeholder: "Username"
                },
                value: "",
                validation: {
                    required: true,
                    isEmail: true
                },
                valid: false,
                touched: false
            },
            password: {
                elementType: "input",
                elementConfig: {
                    type: "password",
                    placeholder: "Password"
                },
                value: "",
                validation: {
                    required: true,
                    minLength: 7
                },
                valid: false,
                touched: false
            }
        },
        isSignUp: true
    };

    componentDidMount () {
        if(!this.props.buildingBurger && this.props.authRedirectPath !== "/") {
            this.props.onSetAuthRedirectPath();
        }
    }
    
    inputChangedHandler = (event, controlName) => {
        const updatedControl = {
            ...this.state.controls,
            [controlName]: {
                ...this.state.controls[controlName],
                value: event.target.value,
                valid: checkValidation(event.target.value, this.state.controls[controlName].validation),
                touched: true
            }
        };
        this.setState({
            controls: updatedControl
        });
    }

    onSubmitHandler = (event) => {
        event.preventDefault();
        const email = this.state.controls.email.value;
        const password = this.state.controls.password.value;
        this.props.onAuth(email, password, this.state.isSignUp);
    }

    switchAuthModeHandler = () => {
        this.setState(prevState => {
            return {
                isSignUp: !prevState.isSignUp
            };
        });
    }

    render() {
        let formElementArray = [];

        for(let key in this.state.controls) {
            formElementArray.push({
                id: key,
                config: this.state.controls[key]
            });
        }

        let form = (
            <form onSubmit={this.onSubmitHandler}>
                {
                    formElementArray.map(formElement => {
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
                    })
                }
                <Button btnType="Success">SUBMIT!!</Button>
            </form>
        );

        if(this.props.loading) {
            form = <Spinner />;
        }

        let errorMessage = null;

        if(this.props.error) {
            errorMessage = <p>
                {this.props.error.message}
            </p>;
        }

        let authRedirect = null;

        if(this.props.isAuthenticated) {
            authRedirect = <Redirect to={this.props.authRedirectPath}/>;
        }

        return (
            <div className="Auth">
                {authRedirect}
                {form}
                <Button
                    btnType="Danger"
                    clicked={this.switchAuthModeHandler}
                >
                    Switch to: {
                        this.state.isSignUp ? "LOGIN" : "SIGN IN"
                    }
                </Button>
                {errorMessage}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        loading: state.auth.loading,
        error: state.auth.error,
        isAuthenticated: state.auth.token !== null,
        buildingBurger: state.burgerBuilder.building,
        authRedirectPath: state.auth.authRedirectPath
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (email, password, isSignUp) => dispatch(actions.auth(email, password, isSignUp)),
        onSetAuthRedirectPath: () => dispatch(actions.setAuthRedirectPath("/"))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);