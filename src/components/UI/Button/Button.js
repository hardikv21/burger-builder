import React from 'react';
import './Button.css';

const button = (props) => {
    const btnClass = "Button " + props.btnType;
    return (
        <button
            className={btnClass}
            onClick={props.clicked}
            disabled={props.disabled}
        >
            {props.children}
        </button>
    );
}

export default button;