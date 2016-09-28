import axios from 'axios';
import { browserHistory } from 'react-router';


export function makeCharacter(hero) {
	var stringifiedHero = JSON.stringify(hero);
	// console.log('-->>>>', stringifiedHero);
	return function(dispatch) {
		axios.post('/createCharacter', {
			hero:stringifiedHero

			})

			.then(response => {
				console.log('createCharacter response received');
				console.log('createCharacter response is : ',response.data);
				
			})
			.catch(response => {
				
				console.err// if there is an error from the post to the server,
				// log itor('error in makeCharacter action creator: ',response);

			})
	}

}

export function fetchCharacter () {
	console.log('inside fetchCharacter get request!')
	return function (dispatch) {

		axios.get('/fetchCharacter', {

		})
			.then(response => {
				console.log('FETCH_CHARACTER',response);


			})
			.catch(response => {
				console.log('ERROR IN FETCHING CHARACTER', response);

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