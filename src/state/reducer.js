import { createStore, compose } from 'redux';
import { RECEIVED_PRODUCTS, ADD_PRODUCT, DELETE_PRODUCT, REQUEST_PRODUCTS, UPDATE_PRODUCT } from './action';

const initialState = {
    products: [],
    loadingProducts: "" // "loading" "loaded"
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case REQUEST_PRODUCTS:
            return { ...state, loadingProducts: "loading" }
        
        case RECEIVED_PRODUCTS:
            return { ...state, loadingProducts: "loaded", products: action.payload}

        default:
            return state;
    }
}

export default reducer;