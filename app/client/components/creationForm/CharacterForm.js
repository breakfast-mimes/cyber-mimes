import React from 'react';
import { Link } from 'react-router';

import Entry from './Entry';

const CharacterForm = React.createClass({
  getInitialState () {
    return {
      statAllocation: this.props.stat,
      skillAllocation: this.props.skill,
      name: ''
    };
  },

  changeStat(amount) {
  	this.state.statAllocation += amount;
  },

  changeSkill(amount) {
  	this.state.skillAllocation += amount;
  },

  handleChange(event) {
    //this.setState({name: event.target.value});
    this.props.submitCharacter.bind(null,event.target.value);
    // console.log('EVENT',event.target.value)
  },

	render() {
		const {hero, statLowCap, statHighCap, skillLowCap, skillHighCap} = this.props;
		return (
			<div>

				<div className='stats'>
		      <div className='statTitle'>Character Name</div>
					<input type="text" placeholder="Character Name" onChange={this.handleChange} className="statTitle"/>
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
              highCap={statHighCap}
              lowCap={statLowCap}
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
              			  highCap={skillHighCap}
              			  lowCap={skillLowCap}
				 		  key={i}/>)}
				</div>

				<div onClick={this.props.makeCharacter.bind(null, this.props.hero)}>Continue</div>
		  </div>
		)
	}
});

export default CharacterForm; //use connect here? no, its already connected in the parent component

