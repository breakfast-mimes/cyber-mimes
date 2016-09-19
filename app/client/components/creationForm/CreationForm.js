import React from 'react';
import { Link } from 'react-router';

import Entry from './Entry';

const CreationForm = React.createClass({
  getInitialState () {
    return {
      statAllocation: 10,
      skillAllocation: 40
    };
  },

  changeStat(amount) {
  	this.state.statAllocation += amount;
  },
  changeSkill(amount) {
  	this.state.skillAllocation += amount;
  },

 getInitialState: function() {
    return {name: ''};
  },

  handleChange: function(event) {
    this.setState({name: event.target.value});
    //console.log('HANDLECHANGE',event.target.value);

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
					<input type="text" value={this.props.hero.name} onChange={this.handleChange}/>
					<button type="submit" className = "submitButton">SUBMIT</button>
				</form>
				</div>

				<div className='stats'>
	        <div className='allocationHeader'>
	        	<div className='statTitle noSelect'>STATS</div>
	        	<div className='statTitle allocation noSelect'>{this.state.statAllocation}</div>
	        </div>
	    		{Object.keys(hero.stats).map((k, i) =>
	    			<Entry {...this.props}
    					group='stats'
    					stat={k}
    					updateAllocation={this.changeStat}
    					allocation={this.state.statAllocation}
    					key={i}/>)}
				</div>

				<div className='stats'>
				 	<div className='allocationHeader'>
	        	<div className='statTitle noSelect'>SKILLS</div>
	        	<div className='statTitle allocation noSelect'>{this.state.skillAllocation}</div>
		      </div>
				 	{Object.keys(hero.skills).map((k, i) =>
				 		<Entry {...this.props}
				 		  group='skills'
				 		  stat={k}
				 		  updateAllocation={this.changeSkill}
				 		  allocation={this.state.skillAllocation}
				 		  key={i}/>)}
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

