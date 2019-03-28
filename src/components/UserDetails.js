import React, {Component} from 'react';
import { Form, Button } from 'semantic-ui-react';
import {connect} from 'react-redux';
import {nextStep} from '../store/actions/index';

class UserDetails extends Component {
	
	saveAndContinue = (e) =>{
		e.preventDefault()
		this.props.nextStep();
	}

	render(){
		const {firstName, lastName, email, age, city, country} = this.props.values;
		const values = { firstName, lastName, email, age, city, country };

		return(
      <Form >
        <h1 className="ui centered">Enter User Details</h1>
        <Form.Field>
            <label>First Name</label>
            <input
            placeholder='First Name'
            onChange={this.props.handleChange('firstName')}
            defaultValue={values.firstName}
            />
        </Form.Field>
        <Form.Field>
            <label>Last Name</label>
            <input
            placeholder='Last Name'
            onChange={this.props.handleChange('lastName')}
            defaultValue={values.lastName}
            />
        </Form.Field>
        <Form.Field>
            <label>Email Address</label>
            <input
            type='email'
            placeholder='Email Address'
            onChange={this.props.handleChange('email')}
            defaultValue={values.email}
            />
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