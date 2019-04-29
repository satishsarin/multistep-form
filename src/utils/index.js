import { createStore, applyMiddleware } from "redux";
import rootReducer from "./../store/reducers/";
import thunk from 'redux-thunk';


export const testStore = (inState = {}) => {
	 return createStore(rootReducer, inState, applyMiddleware(thunk));
}