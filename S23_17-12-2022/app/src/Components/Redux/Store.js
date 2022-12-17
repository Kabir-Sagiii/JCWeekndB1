import { createStore, applyMiddleware, combineReducers } from "redux";

import myReducer from "./MyReducer";
import cityReducer from "./CityReducer";

import logger from "redux-logger";

const combinedReducers = combineReducers({ myReducer, cityReducer });

const myStore = createStore(combinedReducers, applyMiddleware(logger));

export default myStore;
