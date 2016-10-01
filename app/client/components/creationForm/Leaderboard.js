import React from 'react';
import { Link } from 'react-router';



const Leaderboard = React.createClass({

	componentWillMount() {
	this.props.getAllCharacters();
	},

	render() {
		var results = this.props.game.allChars;
		// console.log('RESULT',results);
		// console.log('props',this.props)
	
			return (
				<div>

	        	<div className='leaderboard'>
			      <h1>Leaderboard</h1>
						<ul>
						{results.map((char,i)=>
						<li>{char}</li>)}

						</ul>
				</div>

				</div>
			)
	}
	
})

export default Leaderboard;



         