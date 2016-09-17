import React from 'react';
import { Link } from 'react-router';

import Entry from './Entry';

const CreationForm = React.createClass({

 	handleChange: function(event) {
    console.log("hello")
  },

	render() {
		const {hero} = this.props;
		return (
			<div>
				<div id = 'character'>
		      <h2>Character Name</h2>
					<input type="text" value={this.props.hero.name} onChange={this.handleChange}/>
				</div>

				<div id = 'stats'>
		        <h1>STATS</h1>
		    		{Object.keys(hero.stats).map((k, i) => <Entry {...this.props} group='stats' stat={k} key={i}/>)}
				</div>

				<div id ='skills'>
				 	<h1>SKILLS</h1>
				 		{Object.keys(hero.skills).map((k, i) => <Entry {...this.props} group='skills' stat={k} key={i}/>)}
				</div>
			</div>
		)
	}
});

export default CreationForm; //use connect here? no, its already connected in the parent component

