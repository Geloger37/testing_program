import { applyMiddleware, combineReducers, createStore } from "redux";
import authorizationReducer from './authorization/authorizationReducer';
import thunk from 'redux-thunk';

const Reducer = combineReducers({
    authorization: authorizationReducer,
    
})


export default createStore(Reducer, applyMiddleware(thunk))