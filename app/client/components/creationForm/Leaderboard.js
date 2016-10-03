import React from 'react';
import { Link } from 'react-router';



const Leaderboard = React.createClass({

	componentWillMount() {
	this.props.getAllCharacters();
	},
	// var sorted = results.sort(function(obj1,obj2){
		// 			return obj2.level - obj1.level;
	// 	// 			})
	// console.log('****SORTED',sorted);
	render() {
	console.log('hello');

		let results = this.props.game.allChars;
					console.log('RESULT',results);
					results.sort(function(obj1,obj2){
					return obj2.level - obj1.level;})

		// console.log('SORTED',sorted);
		// console.log('props',this.props)
			return (
				<div>

	        	<div className='leaderboard'>
			      <h1>Leaderboard</h1>
						<ul>
						{results.map((char,i)=>

						<li key={i}>{"character name: " + char.charactername +  "  level " + char.level}</li>)}

						</ul>
				</div>

				</div>
			)
	}

})

export default Leaderboard;



         