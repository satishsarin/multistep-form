import React, { Component } from 'react';
import './App.css';
import UserForm from './components/UserForm';
import { Container } from 'semantic-ui-react';
import { Provider} from 'react-redux';
import store from "./store/index";


class App extends Component {
  render() {
    return (
	    <Container textAlign='center'>
    		<Provider store = {store}>
	      	<UserForm />
	    	</Provider>  
	    </Container>
    );
  }
}

export default App;
