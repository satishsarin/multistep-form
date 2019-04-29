import React from 'react';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import { Form, Button } from 'semantic-ui-react';
import UserDetails from './UserDetails'
import {testStore} from './../utils'


describe('<UserDetails/>', () => {
	
	const setUp = (initalState = {}) => {
		const store = testStore();
		const handleChange = jest.fn();
		const values = initalState;
	 	const component = mount(<UserDetails store={store} 
	 																					handleChange={handleChange}
	 																					values={values}
	 																					/>);
	 	return component;
	}

	const initalState = {
		firstName: '',
    lastName: '',
    email: '',
    age: '',
    city: '',
    country: ''
	}

	let component;
	beforeEach(() => {
		component = setUp(initalState);
	});


	it("simulate saveAndContinue button", () => {
		const saveAndContinue = sinon.spy();
		const wrapper = shallow(<Button onClick={saveAndContinue}>Save And Continue </Button>);
		wrapper.find('button').simulate('click');
		expect(saveAndContinue.calledOnce).toEqual(true);
	});



})