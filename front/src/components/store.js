import { applyMiddleware, combineReducers, createStore } from "redux";
import authorizationReducer from './authorization/authorizationReducer';
import registrationReducer from './registration/registrationReducer';
import restorePasswordReducer from './restorePassword/restorePasswordReducer';
import thunk from 'redux-thunk';

const Reducer = combineReducers({
    authorization: authorizationReducer,
    registration: registrationReducer,
    restorePassword: restorePasswordReducer,
})


export default createStore(Reducer, applyMiddleware(thunk))