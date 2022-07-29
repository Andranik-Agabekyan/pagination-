import { applyMiddleware, createStore } from "redux";
import { combineReducers } from "redux";
import thunk from "redux-thunk";
import countriesReducer from './reducer'

const rootReducer = combineReducers({
    countriesReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))


export default store;