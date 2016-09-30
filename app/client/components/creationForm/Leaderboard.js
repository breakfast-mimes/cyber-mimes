import React from 'react';
import { Link } from 'react-router';





const Leaderboard = React.createClass({

					// {results.map((char,index)=>
					// <li>{char}</li>)}

	componentsWillMount() {
		this.props.getAllCharacters();
	},

	render() {
		var results = this.props.game.allChars;
		console.log('RESULT',results);
		// console.log('props',this.props)
	// console.log('props',this.props)

			return (
				<div>

<div onClick={this.props.getAllCharacters}>Continue</div>

	        <div className='leaderboard'>
			      <h1>Leaderboard</h1>
						<ul>
							
							

						</ul>

					</div>

				</div>

			)
	}



})

export default Leaderboard;



         