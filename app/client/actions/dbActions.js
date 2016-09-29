import axios from 'axios';
import { browserHistory } from 'react-router';

export function postCharacter(hero) {
	var stringifiedHero = JSON.stringify(hero);
	console.log("here",stringifiedHero)
	return function(dispatch) {
		axios.post('/api/character', {
			hero: stringifiedHero
		})
		.then(response => {
			console.log('createCharacter response received');
			console.log('createCharacter response is : ',response.data);
		})
		.catch(response => {
			console.error('error in makeCharacter action creator: ',response);
		})
	}

}

export function getCharacter () {
	console.log('inside fetchCharacter get request!')
	return function (dispatch) {
		axios.get('/api/character/', {
		})
		.then(response => {
			console.log('FETCH_CHARACTER',response);
		})
		.catch(response => {
			console.log('ERROR IN FETCHING CHARACTER', response);
		})
	}
}

export function putCharacter (hero) {
	console.log('updating character')
	return function (dispatch) {
		axios.put('/api/character', {
			hero: JSON.stringify(hero)
		})
		.then(response => {
			console.log('PUT CHARACTER',response);
		})
		.catch(response => {
			console.log('ERROR IN PUT CHARACTER', response);
		})
	}
}
