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

				<div className='stats'>
	        <div className='allocationHeader'>
	        	<div className='statTitle noSelect'>STATS</div>
	        	<div className='statTitle allocation noSelect'>{this.state.statAllocation}</div>
	        </div>
	    		{Object.keys(hero.stats).map((k, i) => <Entry {...this.props} group='stats' stat={k} allocation={this.state.statAllocation} key={i}/>)}
				</div>

				<div className='stats'>
				 	<div className='allocationHeader'>
	        	<div className='statTitle noSelect'>SKILLS</div>
	        	<div className='statTitle allocation noSelect'>{this.state.skillAllocation}</div>
		      </div>
				 	{Object.keys(hero.skills).map((k, i) => <Entry {...this.props} group='skills' stat={k} allocation={this.state.skillAllocation} key={i}/>)}
				</div>

			</div>
		)
	}
});

export default CreationForm; //use connect here? no, its already connected in the parent component

