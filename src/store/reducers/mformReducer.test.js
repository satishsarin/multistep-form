import {NEXT_STATE, PREV_STATE, UPDATE_INPUT} from '../constants/action-types';
import mformReducer from './mformReducer';

const setUp = () => {
		return ({
			step: 1,
			firstName: '',
			lastName: '',
			email: '',
		  age: '',
		  city: '',
		  country: ''
		});
	}

describe('Mform Reducer', () => {
	let intState;
	beforeEach(()=>{
		 intState = setUp();
	});

	it('should return default state', ()=>{
		const newState = mformReducer(undefined, {})
		expect(newState).toEqual(intState)
	})

	it('should render new state if receiving NEXT_STATE type', () => {
		const newState = mformReducer(intState, {type: NEXT_STATE})
		expect(newState.step).toBe(2);
	})

	it('should render new state if receiving PREV_STATE type', () => {
		const newState = mformReducer(intState, {type: PREV_STATE})
		expect(newState.step).toBe(0);
	})

	it('should render new state if receiving UPDATE_INPUT type', () => {
		const updatedState = {
			firstName: 'fname',
			lastName: 'lname',
			email: 'email@demo.com',
		  age: '21',
		  city: 'abc',
		  country: 'india'
		}
		const expectedState = {...intState, ...updatedState}
		const newState = mformReducer(intState, {type: UPDATE_INPUT, payload: updatedState})
		expect(newState).toEqual(expectedState);
	})
	
})