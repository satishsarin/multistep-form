import React, {Component} from 'react';
import { Form, Button } from 'semantic-ui-react';
import {connect} from 'react-redux';
import {nextStep, prevStep} from '../store/actions/index';

class PersonalDetails extends Component {

	saveAndContinue = (e) => {
		e.preventDefault();
		this.props.nextStep();
	}

	back = (e) => {
		e.preventDefault();
		this.props.prevStep();
	}

	render(){
		const {firstName, lastName, email, age, city, country} = this.props.values;
		const values = { firstName, lastName, email, age, city, country };

		return(
			<Form color='blue' >
        <h1 className="ui centered">Enter Personal Details</h1>
        <Form.Field>
            <label>Age</label>
            <input placeholder='Age'
            onChange={this.props.handleChange('age')}
            defaultValue={values.age}
            />
        </Form.Field>
        <Form.Field>
            <label>City</label>
            <input placeholder='City'
            onChange={this.props.handleChange('city')}
            defaultValue={values.city}
            />
        </Form.Field>
        <Form.Field>
            <label>Country</label>
            <input placeholder='Country'
            onChange={this.props.handleChange('country')}
            defaultValue={values.country}
            />
        </Form.Field>
        <Button onClick={this.back}>Back</Button>
        <Button onClick={this.saveAndContinue}>Save And Continue </Button>
      </Form>
		)
	}

}

function mapsDispatchToProps(dispatch){
	return({ 
			nextStep: () => { dispatch(nextStep())},
			prevStep: () => { dispatch(prevStep())}
	})
}

export default connect(null, mapsDispatchToProps)(PersonalDetails);