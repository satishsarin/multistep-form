import React, {Component} from 'react';
import { Form, Button } from 'semantic-ui-react';
import {connect} from 'react-redux';
import {nextStep} from '../store/actions/index';
import classnames from 'classnames';

class UserDetails extends Component {
	
	state = {
		errors: []
	}

	checkPresenceOfField = () => {
		let errors = {};
		const {firstName, lastName, email} = this.props.values
		if (firstName === '') errors.firstName = "First Name can't be empty";
		if (lastName === '') errors.lastName = "Last Name can't be empty";
		if (email === '') errors.email = "Email can't be empty";
		this.setState({errors})
		if (Object.keys(errors).length == 0) {
			return true;
		}else{
			return false;
		}
	}

	saveAndContinue = (e) =>{
		e.preventDefault()
		let isChecked = this.checkPresenceOfField();
		console.log("is cheked--", isChecked)
		if (isChecked) {
			this.props.nextStep();
		}
	}

	render(){
		const {firstName, lastName, email, age, city, country} = this.props.values;
		const values = { firstName, lastName, email, age, city, country };

		return(
      <Form >
        <h1 className="ui centered">Enter User Details</h1>
        <Form.Field className={classnames('field', { error: !!this.state.errors.firstName})}>
            <label>First Name</label>
            <input
            placeholder='First Name'
            onChange={this.props.handleChange('firstName')}
            defaultValue={values.firstName}
            />
            <span>{this.state.errors.firstName}</span>
        </Form.Field>
        <Form.Field className={classnames('field', { error: !!this.state.errors.firstName})}>
            <label>Last Name</label>
            <input
            placeholder='Last Name'
            onChange={this.props.handleChange('lastName')}
            defaultValue={values.lastName}
            />
            <span>{this.state.errors.lastName}</span>
        </Form.Field>
        <Form.Field className={classnames('field', { error: !!this.state.errors.firstName})}>
            <label>Email Address</label>
            <input
            type='email'
            placeholder='Email Address'
            onChange={this.props.handleChange('email')}
            defaultValue={values.email}
            />
            <span>{this.state.errors.email}</span>
        </Form.Field>

        <Button onClick={this.saveAndContinue}>Save And Continue </Button>
      </Form>
    )
	}
}

function mapsDispatchToProps(dispatch){
	return({ 
			nextStep: () => { dispatch(nextStep()) }
	})
}

export default connect(null, mapsDispatchToProps)(UserDetails);