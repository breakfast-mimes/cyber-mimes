// Actions will go here
import axios from 'axios';
import { browserHistory } from 'react-router';


// signinUser action creator uses redux-thunk to return a function
// takes object with email and password properties
export function signinUser({ email, password }) {
	return function(dispatch) {
		axios.post('/user/signin', { email, password })
			.then(response => {
				// if signin is successful, dispatch an action
				// of type AUTHORIZE_USER
				dispatch({ type: AUTHORIZE_USER });
				// -Save the JWT token
				localStorage.setItem('token', response.data.token);
				// dispatch action to set current users info
				dispatch({ type: UPDATE_USER, payload: { 
					email: response.data.email, name: response.data.name
				}});
				// if signin is successful push user
				// to the battle page? profile page?
				browserHistory.push('/');
			})
			.catch(response => {
				// if there is an error from the post to the server,
				// log it
				console.log('error in signinUser action creator: ',response);
				// -Show an error to the user
				dispatch(authError('Bad Signin Info'));
			});
	}
}

export function signupUser({ email, name, language, skillLevel, password, github_handle, profile_url }) {
	return function(dispatch) {
		axios.post('/user/signup', { email, name})
			.then(response => {
				// if signup is successful, dispatch an action
				// of type AUTHORIZE_USER
				dispatch({ type: AUTHORIZE_USER });
				// -Save the JWT token
				localStorage.setItem('token', response.data.token);
				// if signup is successful push user
				// to the create character page? battle page?
				browserHistory.push('/');

				var profileUrl = profile_url.length > 0 ? profile_url : 'https://avatars3.githubusercontent.com/u/9919?v=3&s=280';
				// dispatch action to set current users info
				dispatch({ type: UPDATE_USER, payload: { 
					id: id, email: email, name: name
				}});
			})
			.catch(response => {
				// if there is an error from the post to the server,
				// log it
				console.log('error in signupUser action creator: ',response);
				// -Show an error to the user
				dispatch(authError(response));
			});
	}
}
