import {NEXT_STATE, PREV_STATE, UPDATE_INPUT} from '../constants/action-types';

const INITIAL_STATE = {
	step: 1,
	firstName: '',
	lastName: '',
	email: '',
  age: '',
  city: '',
  country: ''
}

export default function mformReducer (state = INITIAL_STATE, action) {
	const updatedVal = action.payload
	switch(action.type){
		case NEXT_STATE:
			return ({
					...state,
					step: state.step + 1
			})
		case PREV_STATE:
			return({
				...state,
				step: state.step - 1
			})
		case UPDATE_INPUT:
			return Object.assign({}, state, updatedVal);	
		default:
			return state;
	}
}

