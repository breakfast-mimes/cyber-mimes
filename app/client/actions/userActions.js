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
			console.log("character request")
			axios.get('/api/character', {})
			.then(res => {
				if(res.data === '[]') {
					browserHistory.push('/creationform')
				} else {
					dispatch({
						type: "GET_CHARACTER",
						hero: JSON.parse(res.data)
					})
					browserHistory.push('/map');
				}
			})
			.catch(res => console.log('err in getting user character', res));
		})
		.catch(response => {
			dispatch({type:"LOG_SUCCESS", logSuccess: false});
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
			browserHistory.push('/creationform');
		})
		.catch(function(response) {
			dispatch({type: "USERNAME_SUCCESS", usernameSuccess: false});
			console.log('error in signupUser action creator: ', response);
		});
	}
}

export function logout() {
	return function(dispatch) {
		axios.post('/logout', {})
		.then(function(response) {
			dispatch({type: "USER_LOGOUT"});
			dispatch({type:"LOG_SUCCESS", logSuccess: true});
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

export function logReset() {
	return {type:"LOG_SUCCESS", logSuccess: true}
}

export function userReset() {
	return {type:"USERNAME_SUCCESS", usernameSuccess: true}
}

