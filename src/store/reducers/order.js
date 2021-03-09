import * as actionTypes from '../actions/actionTypes';

const initialState = {
    orders: [],
    loading: false,
    purchased: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.PURCHASE_BURGER_SUCCESS:
            return purchaseBurgerSuccess(state, action);

        case actionTypes.PURCHASE_BURGER_FAIL:
            return {
                ...state,
                loading: false
            };

        case actionTypes.PURCHASE_BURGER_START:
            return {
                ...state,
                loading: true
            };

        case actionTypes.PURCHASE_INIT:
            return {
                ...state,
                purchased: false
            };

        case actionTypes.FETCH_ORDERS_START:
            return {
                ...state,
                loading: true
            };

        case actionTypes.FETCH_ORDERS_FAIL:
            return {
                ...state,
                loading: false
            };

        case actionTypes.FETCH_ORDERS_SUCCESS:
            return {
                ...state,
                orders: action.orders,
                loading: false
            };

        default:
            return state;
    }
};

const purchaseBurgerSuccess = (state, action) => {
    const newOrder = {
        ...action.orderData,
        id: action.id
    }
    return {
        ...state,
        orders: state.orders.concat(newOrder),
        loading: false,
        purchased: true
    };
};

export default reducer;