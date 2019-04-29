import React from 'react';
import { shallow } from 'enzyme';
import UserForm from './UserForm';
import UserDetails from './UserDetails';
import {testStore} from './../utils'

const setUp = () => {
	const store = testStore();
	const component = shallow(<UserForm store={store}/>).childAt(0).dive();
	return component;
}

describe('<UserForm />', () => {
	let component;
	beforeEach(() => {
		component = setUp();
	})

	it("should render <UserForm/> component", () => {
		const wrapper = component;
		expect(wrapper.find(UserDetails)).toHaveLength(1);
	})

	
	
});