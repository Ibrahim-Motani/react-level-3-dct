import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import countReducer from "../reducers/countReducers";
import numbersReducer from "../reducers/numbersReducer";
import usersReducer from "../reducers/usersReducer";

const configureStore = () => {
  const store = createStore(
    combineReducers({
      count: countReducer,
      numbers: numbersReducer,
      users: usersReducer,
    }), applyMiddleware(thunk)
  );
  return store;
};

export default configureStore;
