import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import UserForm from './components/UserForm';

describe('<App/>', () => {

	it('renders without crashing', () => {
	  shallow(<App />);
	});

	it('render one <userForm/> compoenent', () => {
	  const component = shallow(<App />);
	  expect(component.find(UserForm)).toHaveLength(1);
	});


})