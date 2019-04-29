import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import UserForm from './components/UserForm';
import {testStore} from './utils'

const setUp = (props = {}) => {
	const component = shallow(<App/>);
	return component;
}

describe('<App/>', () => {
	let component;
	beforeEach(() => {
		component = setUp();
	})

	it('should render without crashing', () => {
	  expect(component.exists()).toBe(true);
	});

	it('should render one <userForm/> compoenent', () => {
	  expect(component.find(UserForm)).toHaveLength(1);
	});


})