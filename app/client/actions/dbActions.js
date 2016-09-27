import axios from 'axios';
import { browserHistory } from 'react-router';


export function makeCharacter(hero) {
	var stringifiedHero = JSON.stringify(hero);
	console.log('-->>>>', stringifiedHero);
	return function(dispatch) {
		axios.post('/createCharacter', {
			hero:stringifiedHero

			})

			// headers: { authorization: localStorage.getItem('token') }

			.then(response => {
				console.log('createCharacter response received');
				console.log('createCharacter response is : ',response.data);
				//dispatch({ type: CREATE_CHARACTER, payload: response.data })
				// Dispatch action that signals server response has been received
				// dispatch({ type: RESPONSE_RECEIVED });
				// socket.emit('getOnlineUsers');
			})
			.catch(response => {
				// if there is an error from the post to the server,
				// log it
				console.error('error in makeCharacter action creator: ',response);
				// Dispatch action that signals server response has been received
				// dispatch({ type: RESPONSE_RECEIVED });
			})
	}

}

export function fetchCharacter () {
	console.log('inside fetchCharacter get request!')
	return function (dispatch) {
		// dispatch({type: AWAITING_RESPONSE)}

		axios.get('/fetchCharacter', {
			// headers: {authorization: localStorage.getItem('token')}
		})
			.then(response => {
				console.log('FETCH_CHARACTER',response);
				//dispatch action to fetch the character
				// dispatch({type:FETCH_CHARACTER, payload: {
				// 	id: response.data.id
				// }})
			

			})	
			.catch(response => {
				console.log('ERROR IN FETCHING CHARACTER', response);
				// dispatch(authError(response.data));
				// dispatch(signoutUser());
				// browserHistory.push('/');
			})	




	}





}




// //reducer example
// export default function(state = INITIAL_STATE, action) {
// 	switch(action.type){
// 		case GET_CARDS:
// 			var initiatedCards = action.payload.cards.initiated.slice();
// 			initiatedCards = shuffle(initiatedCards);
// 			var uninitiatedCards = action.payload.cards.uninitiated.slice();
// 			uninitiatedCards = shuffle(uninitiatedCards);
// 			var matched = action.payload.cards.matched.slice();

// 			var current = initiatedCards.length !== 0 ? initiatedCards.shift() : uninitiatedCards.shift();
// 			return {...state, current: current, initiated: initiatedCards, uninitiated: uninitiatedCards, matches: matched, waiting: action.payload.cards.waiting };