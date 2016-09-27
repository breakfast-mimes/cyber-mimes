import React, { Component } from 'react';
import {Field, reduxForm } from 'redux-form';
import TextField from 'material-ui/TextField';
 // import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router';
// import * as actions from '../../actions';



const signin = React.createClass({


	handleChange(event) {
	    this.setState({name: event.target.value});
	    // this.props.submitCharacter.bind(null,event.target.value);
	     console.log('EVENT',event.target.value)
	},

		render() {
			
			return (
				<div>

					<div className='stats'>
			      <div className='statTitle'>USER SIGNIN</div>
						<input type="text" placeholder="USERNAME" onChange={this.handleChange} className="statTitle"/>
						<input type="text" placeholder="PASSWORD" onChange={this.handleChange} className="statTitle"/>
					</div>

					<button type="submit" label="Sign in">submit</button>

				</div>

			)
		}







});

export default signin;




	// handleFormSubmit({ email, password }) {
	// 	// this.props.signinUser({email, password });
	// }

// 	renderAlert() {
// 		if (this.props.errorMessage) {
// 			return (
// 				<div>
// 					<strong>Oops!</strong> {this.props.errorMessage}
// 				</div>
// 			);
// 		}
// 	}
// // 
// 	render() {
// 		 const {handleSubmit fields: {email, password}} = this.props; 

// 	return (
// 		<form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>

// 		<fieldset className = "form-group">
// 			<TextField {...email} floatingLabelText="Email">
// 			</TextField>
// 		</fieldset>

// 		</form>


// 		)

// 	}



