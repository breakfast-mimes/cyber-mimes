import axios from 'axios';
import { browserHistory } from 'react-router';


export function makeCharacter(hero) {
	console.log('-->>>>', hero);
	return function(dispatch) {
		axios.post('/createCharacter', {
			hero:hero

			})

			// headers: { authorization: localStorage.getItem('token') }

			.then(response => {
				console.log('makeCharacter response received');
				console.log('makeCharacter response is : ',response.data);
				dispatch({ type: CREATE_CHARACTER, payload: response.data })
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