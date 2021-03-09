import React from 'react';
import './Burger.css';
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const burger = (props) => {
    let newIngredients = Object.keys(props.ingredients)
    .map(igKey => {
        return [...Array(props.ingredients[igKey])].map((_, i) => {
            return <BurgerIngredient type={igKey} key={igKey + i}/>
        });
    })
    .reduce((arr, el) => {
        return arr.concat(el);
    }, []);

    if(newIngredients.length === 0)
    {
        newIngredients = <p>Please add burger ingredients....</p>
    }

    return (
        <div className="Burger">
            <BurgerIngredient type="bread-top"/>
            {newIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
}

export default burger;