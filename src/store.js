import {createStore, combineReducers} from 'redux'
import innerPageReducer from './innerPageReducer';
import footerPageReducer from './footerPageReducer.js'
const rootReducer = combineReducers({
    innerPageReducer,
    footerPageReducer
});

const initStore = (initialState) => {
    return createStore(
        rootReducer,
        initialState,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

    );
};

export default initStore;