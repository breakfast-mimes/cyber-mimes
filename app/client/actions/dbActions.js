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
	console.log('updating character', hero.name)
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

export function init() {
	console.log('INITIALIZING character')
	return function (dispatch) {
		axios.get('/api/character', {})
		.then(res => {
			if(res.data === '[]') {
				browserHistory.push('/creationform')
			} else {
				dispatch({
					type: "GET_CHARACTER",
					hero: JSON.parse(window.localStorage.getItem('hero'))
				})
			}
		})
		.catch(res => console.log('err in getting user character', res));
	}
}

export function getAllCharacters () {
	console.log('INSIDE GETALLCHARACTERS')
	return function (dispatch) {
		axios.get('/api/characters', {

		})
		.then(response=> {
			console.log('RESPONSE FOR GET ALL CHARACTERS')
					//parsed data
					var parsedCharacters = [];
					for (var i = 0; i<response.data.length; i++) {
						parsedCharacters.push(JSON.parse(response.data[i].n.properties.character))
					}
				console.log('parsedCharacters',parsedCharacters)
				//characters and their levels
				var leaderBoardArr = [];
				for (var j = 0; j<parsedCharacters.length; j++) {
					if(parsedCharacters[j].level !== undefined) {
						leaderBoardArr.push({"charactername": parsedCharacters[j].name, "level": parsedCharacters[j].level.level})
					}
				}
					console.log('leaderBoardArr',leaderBoardArr);
				dispatch({type: "LEADERBOARD",allChars: leaderBoardArr});
				// return leaderBoardArr;

		})

		.catch (response => {
			console.log('ERROR WHILE GETTING CHARACTERS',response)
		})

	}

}
