import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { getLocationInfo } from '../reducers/locationinfo';

const reducer = combineReducers({
      location : getLocationInfo
      
})


let initialState = {};

export const store = createStore(reducer,initialState,applyMiddleware(thunk))


