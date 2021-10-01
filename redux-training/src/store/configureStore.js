import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import countReducer from '../reducers/countReducer';

const configureStore = () => {
    const store = createStore(combineReducers({
        count: countReducer,
    }))
    return store;
}

export default configureStore;