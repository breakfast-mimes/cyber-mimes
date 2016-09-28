import axios from 'axios';
import { browserHistory } from 'react-router';

export function login(name, pass) {
	console.log("login", name, pass)
	return function(dispatch) {
		axios.post('/login', {
			username: name,
			password: pass
		})
		.then(response => {
			browserHistory.push('/map');
			console.log("success login")
		})
		.catch(response => {
			console.log('error in signinUser action creator: ',response);
		});
	}
}

export function signup(name, pass) {
	console.log("signup", name, pass)
	return function(dispatch) {
		axios.post('/signup', {
			username: name,
			password: pass
		})
		.then(function(response) {
			browserHistory.push('/map');
			console.log("success")
		})
		.catch(function(response) {
			console.log('error in signupUser action creator: ', response);
		});
		console.log("signup after")
	}
}
