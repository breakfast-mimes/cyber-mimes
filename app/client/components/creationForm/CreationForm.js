import React from 'react';
import { Link } from 'react-router';

import Entry from './Entry';

const CreationForm = React.createClass({

 getInitialState: function() {
    return {name: ''};
  },

  handleChange: function(event) {
    this.setState({name: event.target.value});
    console.log('HANDLECHANGE',event.target.value);

   },

  onSubmit(evt) {
   	evt.preventDefault()
   	this.props.submitForm({name:evt.target.value});
   	console.log('ONSBUMIT',evt.target.value)
   },

	render() {
		const {hero} = this.props;
		return (
			<div>
				<div id = 'character'>
		      <h2>Character Name</h2>
		      	<form onSubmit={this.onSubmit}>
					<input type="text" value={this.props.name}/>
					<button type="submit" className = "submitButton">SUBMIT</button>
				</form>
				</div>

				<div id = 'stats'>
		        <h1>STATS</h1>
		    		{Object.keys(hero.stats).map((k, i) => <Entry {...this.props} group='stats' stat={k} key={i}/>)}
				</div>

				<div id ='skills'>
				 	<h1>SKILLS</h1>
				 		{Object.keys(hero.skills).map((k, i) => <Entry {...this.props} group='skills' stat={k} key={i}/>)}
				</div>
			

				<div>
			        <h1>
			          <Link to='/battle'>Create Character</Link>
			        </h1>

			    </div>
		    </div>
		)
	}
});

export default CreationForm; //use connect here? no, its already connected in the parent component

