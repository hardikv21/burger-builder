import * as actionTypes from '../actions/actionTypes';

const INGREDIENTS_PRICES = {
    salad: 1,
    bacon: 2,
    cheese: 1.5,
    meat: 3
};

const initialState = {
    ingredients: null,
    price: 2,
    error: false,
    building: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_INGREDIENT:
            return addIngredient(state, action);

        case actionTypes.REMOVE_INGREDIENT:
            return removeIngredient(state, action);

        case actionTypes.SET_INGREDIENTS:
            return setIngredient(state, action);

        case actionTypes.FETCH_INGREDIENTS_FAILED:
            return {
                ...state,
                error: true
            };

        default:
            return state;
    }
};

const addIngredient = (state, action) => {
    return {
        ...state,
        ingredients: {
            ...state.ingredients,
            [action.ingredientName]: state.ingredients[action.ingredientName] + 1
        },
        price: state.price + INGREDIENTS_PRICES[action.ingredientName],
        building: true
    };
};

const setIngredient = (state, action) => {
    return {
        ...state,
        ingredients: {
            salad: action.ingredients.salad,
            bacon: action.ingredients.bacon,
            cheese: action.ingredients.cheese,
            meat: action.ingredients.meat
        },
        price: 2,
        error: false,
        building: false
    };
};

const removeIngredient = (state, action) => {
    return {
        ...state,
        ingredients: {
            ...state.ingredients,
            [action.ingredientName]: state.ingredients[action.ingredientName] - 1
        },
        price: state.price - INGREDIENTS_PRICES[action.ingredientName],
        building: true
    };
};

export default reducer;