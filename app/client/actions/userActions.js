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
			dispatch({type: "USER_LOGIN"});
			browserHistory.push('/map');
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
			dispatch({type: "USER_LOGIN"});
			browserHistory.push('/map');
		})
		.catch(function(response) {
			console.log('error in signupUser action creator: ', response);
		});
	}
}

export function logout() {
	return function(dispatch) {
		axios.post('/logout', {})
		.then(function(response) {
			dispatch({type: "USER_LOGOUT"});
			browserHistory.push('/');
		})
		.catch(function(response) {
			console.log('error in signupUser action creator: ', response);
		});
	}
}

export function isUserAuth() {
	return function(dispatch) {
		axios.post('/isauth', {})
		.then(function(response) {
			dispatch({type: "USER_AUTH", isAuth: true});
		})
		.catch(function(response) {
			browserHistory.push('/')
			dispatch({type: "USER_AUTH", isAuth: false});
		});
	}
}