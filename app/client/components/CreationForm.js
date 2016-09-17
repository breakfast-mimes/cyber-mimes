import React from 'react';
// import { Link } from 'react-router'; //router needs to be setup

const CreationForm = React.createClass({
	// getInitialState: function() {
 //    return {
 //    	value: 'test',
 //    	count: 0};
 //  },

 // 	handleChange: function(event) {
 //    this.setState({value: event.target.count});
 //    console.log('HANDLE CHANGE',event.target.count);
 //  },

	render() {

		return (
			<div>
				<div id = 'character'>

		      <h2>Character Name</h2>

					<input type="text" value={this.props.hero.name}
					onChange={this.handleChange}/>
				</div>

					<div id = 'stats'>
		         <h1>STATS</h1>

		          <h2>Intelligence</h2>

						<button type = 'button' onClick={this.props.updateCharacter.bind(null,'stats', 'int', 1)}>+</button>
						<div id = 'intelligence'>{this.props.hero.stats.int} </div>
						<button type = 'button' onClick={this.props.updateCharacter.bind(null,'stats', 'int', -1)}>-</button>
						

						<h2>Dexterity</h2> 
						<button type="button" onClick={this.props.updateCharacter.bind(null,'stats','dex',1)}>+</button>
						<div>{this.props.hero.stats.dex} </div>
						<button type="button" onClick={this.props.updateCharacter.bind(null,'stats','dex', -1)}>-</button>

						<h2>Strength</h2> 

						<button type="button" onClick={this.props.updateCharacter.bind(null, 'stats', 'str', 1)}>+</button>
						<div>{this.props.hero.stats.str} </div>
						<button type="button" onClick={this.props.updateCharacter.bind(null, 'stats', 'str',-1)}>-</button>

					</div>

				<div id ='skills'>

				 	<h1>SKILLS</h1>

		          <h2>Fighting</h2>
		        		<button type="button" onClick={this.props.updateCharacter.bind(null,'skills', 'fighting',1 )}>+</button>
						<div>{this.props.hero.skills.fighting} </div>
						<button type="button" onClick={this.props.updateCharacter.bind(null,'skills', 'fighting',-1)}>-</button>

							<h2>Shooting</h2>
						<button type="button" onClick={this.props.updateCharacter.bind(null,'skills', 'shooting',1)}>+</button>
						<div>{this.props.hero.skills.shooting} </div>
						<button type="button" onClick={this.props.updateCharacter.bind(null,'skills', 'shooting',-1)}>-</button>

							<h2>Magic</h2>
						<button type="button" onClick={this.props.updateCharacter.bind(null,'skills', 'magic',1)}>+</button>
						<div>{this.props.hero.skills.magic} </div>
						<button type="button" onClick={this.props.updateCharacter.bind(null, 'skills','magic',-1)}>-</button>


				</div>
			</div>

		)
	}
})

export default CreationForm; //use connect here? no, its already connected in the parent component

