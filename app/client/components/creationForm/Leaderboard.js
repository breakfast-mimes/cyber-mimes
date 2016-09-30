import React from 'react';
import { Link } from 'react-router';





const Leaderboard = React.createClass({



	render() {
	console.log('props',this.props)

	function leaderboard () {
		console.log('hello')
		this.props.getAllCharacters()
	}

			return (
				<div>


	        <div className='leaderboard'>
			      <h1>Leaderboard</h1>
						<ul>
							<div onClick={this.props.getAllCharacters}>test</div>
							<li></li>
							<li></li>

						</ul>

					</div>

				</div>

			)
	}



})

export default Leaderboard;
							// <div onClick={this.props.getAllCharacters()}>Continue</div>