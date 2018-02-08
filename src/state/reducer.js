import { createStore, compose } from 'redux';
import { BUY_SHINTO_COINS, SELL_SHINTO_COINS, MINE_SHINTO_COINS } from './action';

const initialState = {
    value: 1,
    transactions: [], //{id: '', action: '', amount: 0, value: 0}
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case BUY_SHINTO_COINS:
            return { ...state,  value: state.value + action.payload,
                                transactions: state.transactions.concat([{  id: Math.floor(Math.random() * 9999) + 1, 
                                                                            action: 'Bought', 
                                                                            amount: action.payload, 
                                                                            value: state.value + action.payload}])}
        case SELL_SHINTO_COINS:
            return { ...state, value: state.value - action.payload,
            transactions: state.transactions.concat([{  id: Math.floor(Math.random() * 9999) + 1, 
                                                        action: 'Sold', 
                                                        amount: action.payload, 
                                                        value: state.value - action.payload}])}
        case MINE_SHINTO_COINS:
            return { ...state,  value: state.value + 1,
                                transactions: state.transactions.concat([{  id: Math.floor(Math.random() * 9999) + 1, 
                                                                            action: 'Mined', 
                                                                            amount: 1, 
                                                                            value: state.value + 1}])}
        default:
            return state;
    }
}

export default reducer;