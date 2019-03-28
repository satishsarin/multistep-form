import {NEXT_STATE, baseUrl} from '../constants/action-types';
import axios from 'axios';

	function nextStep() {
		return (dispatch =>{
				dispatch({type: NEXT_STATE})
			})
	}

	function prevStep(){
		return (dispatch =>{
				dispatch({type: "PREV_STATE"})
			})
	}

	function handleChange(updatedVal){
		return (dispatch =>{
			dispatch({type: "UPDATE_INPUT", payload: updatedVal })
		})
  }

  function submitFormData(payload){
		return (dispatch => {
			axios.post(baseUrl+'/users', payload)
		})
  }

export {nextStep, prevStep, handleChange, submitFormData};
