import React from 'react';
import './Order.css';

const order = (props) => {
    const ingredients = [];
    
    for(let ingredientName in props.ingredients) {
        ingredients.push({
            name: ingredientName,
            quantity: props.ingredients[ingredientName]
        });
    }

    const ingredientsOutput = ingredients.map(igKey => {
        return (
            <span
                key={igKey.name}
                style={{
                    textTransform: "capitalize",
                    display: "inline-block",
                    margin: "0 8px",
                    border: "1px solid #ccc",
                    padding: "2px 6px"
                }}
            >
                {igKey.name} - {igKey.quantity}  
            </span> 
        );
    });
    
    return (
        <div className="Order">
            <h3>Ingredients</h3>
            <p>{ingredientsOutput}</p>
            <h3>Price: <strong>CAD {props.price}</strong></h3>
        </div>
    );
}

export default order;