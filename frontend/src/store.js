import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import {playerListReducer } from './reducers/playerReducers';
import { trophyListReducer } from './reducers/trophyReducers';

const reducer = combineReducers({
    playerList: playerListReducer,
    trophyList: trophyListReducer
});
const initialState = {};
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);
export default store;