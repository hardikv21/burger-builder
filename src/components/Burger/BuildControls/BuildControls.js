import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import './BuildControls.css';

const controls = [
    {label: "Salad", type: "salad"},
    {label: "Bacon", type: "bacon"},
    {label: "Cheese", type: "cheese"},
    {label: "Meat", type: "meat"}
];

const buildControls = (props) => {
    return (
        <div className="BuildControls">
            <p>Current Price: <strong>${props.price.toFixed(2)}</strong></p>
            {
                controls.map((control) => {
                    return (
                        <BuildControl
                            key={control.label}
                            label={control.label}
                            added={() => props.addIngredient(control.type)}
                            removed={() => {
                                    return (props.removeIngredient(control.type));
                                }
                            }
                            disabled={props.disabledInformation[control.type]}
                        />
                    );
                })
            }
            <button
                className="OrderButton"
                disabled={!props.purchase}
                onClick={props.ordered}>
                    {
                        props.isAuth ? "ORDER NOW!!" : "LOGIN TO ORDER!!"
                    }
                </button>
        </div>
    );
}

export default buildControls;