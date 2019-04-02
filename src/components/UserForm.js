import React, {Component} from 'react';
import {connect} from 'react-redux'; 
import UserDetails from './UserDetails';
import PersonalDetails from './PersonalDetails';
import Confirmation from './Confirmation';
import Success from './Success';
import {handleChange} from '../store/actions/index';

class UserForm extends Component {

	constructor(){
		super();
		this.state = {
        firstName: '',
        lastName: '',
        email: '',
        age: '',
        city: '',
        country: ''
    }
	}

	handleChange = input => event => {
    this.setState({ [input] : event.target.value })
    this.props.handleChange(this.state);
  }

	render(){
		const {step, firstName, lastName, email, age, city, country} = this.props.inputData;
		const values = { firstName, lastName, email, age, city, country };

		switch(step){
			case 1:
				return (<UserDetails values = {values}  handleChange={this.handleChange} />)
			case 2:
				return (<PersonalDetails values = {values} handleChange={this.handleChange} />)
			case 3:
				return (<Confirmation values = {values} handleChange={this.handleChange} />)
			case 4:		
				return (<Success />)
			default:
            return null
			
		}			
	}
}

function mapsDispatchToProps(dispatch){
	return({ 
			handleChange: (ipData)=>{ dispatch(handleChange(ipData)) }
	})
}

function mapStatesToProps(state){
	return({
		inputData : state.mformReducer
	})
}

export default connect(mapStatesToProps, mapsDispatchToProps)(UserForm);