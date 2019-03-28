import React, {Component} from 'react';
import { Button, List } from 'semantic-ui-react';
import {connect} from 'react-redux';
import {nextStep, prevStep, submitFormData} from '../store/actions/index';


class Confirmation extends Component {
		
	submitFormData = (e) => {
		e.preventDefault();
		console.log("form values--", this.props.values)
		this.props.submitFormData(this.props.values);
		this.props.nextStep();
	}

	back = (e) => {
		e.preventDefault();
		this.props.prevStep();
	}

	render(){
		const { firstName, lastName, email, age, city, country } = this.props.values
    
    return(
      <div>
          <h1 className="ui centered">Confirm your Details</h1>
          <p>Click Confirm if the following details have been correctly entered</p>
          <List>
              <List.Item>
                  <List.Icon name='users' />
                  <List.Content>First Name: {firstName}</List.Content>
              </List.Item>
              <List.Item>
                  <List.Icon name='users' />
                  <List.Content>Last Name: {lastName}</List.Content>
              </List.Item>
              <List.Item>
                  <List.Icon name='mail' />
                  <List.Content>
                      <a href='mailto:jack@semantic-ui.com'>{email}</a>
                  </List.Content>
              </List.Item>
              <List.Item>
                  <List.Icon name='calendar' />
                  <List.Content>{age} Years</List.Content>
              </List.Item>
              <List.Item>
                  <List.Icon name='marker' />
                  <List.Content>{city}, {country}</List.Content>
              </List.Item>
          </List>

          <Button onClick={this.back}>Back</Button>
          <Button onClick={this.submitFormData}>Confirm</Button>
      </div>
    )
	}
}

function mapsDispatchToProps(dispatch){
	return({ 
			nextStep: () => { dispatch(nextStep())},
			prevStep: () => { dispatch(prevStep())},
			submitFormData: (fdata) => { dispatch(submitFormData(fdata))}
	})
}

export default connect(null, mapsDispatchToProps)(Confirmation);