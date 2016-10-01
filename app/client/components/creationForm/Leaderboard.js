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
		var results = this.props.game.allChars;
		console.log('RESULT',results);
		// console.log('props',this.props)
			return (
				<div>

	        	<div className='leaderboard'>
			      <h1>Leaderboard</h1>
						<ul>
						{results.map((char,i)=>
						<li key={i}>{char[0].level}</li>)}

						</ul>
				</div>

				</div>
			)
	}

})

export default Leaderboard;



         