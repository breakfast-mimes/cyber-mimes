import React from 'react';
import { Link } from 'react-router';
import { Button, FormGroup, ControlLabel, FormControl, Form, HelpBlock, Col, PageHeader } from 'react-bootstrap';

import Entry from './Entry';

const CharacterForm = React.createClass({
  getInitialState () {
    return {
      statAllocation: this.props.stat,
      skillAllocation: this.props.skill,
      name: this.props.levelUp ? this.props.hero.name : ''
    };
  },

  changeStat(amount) {
  	this.state.statAllocation += amount;
  },

  changeSkill(amount) {
  	this.state.skillAllocation += amount;
  	console.log('this.state.skillAllocation',this.state.skillAllocation)
  },

  handleChange(event) {

    this.setState({name: event.target.value});

  },

	render() {
		const {hero, statLowCap, statHighCap, skillLowCap, skillHighCap} = this.props;
		return (
			<Form horizontal className='form'>
				{( this.props.levelUp ? null :
        <div>
          <FormGroup>
  		      <Col smOffset={2} sm={2}>
              <ControlLabel>Character Name</ControlLabel>
            </Col>
  				</FormGroup>
          <FormGroup>
            <Col smOffset={2} sm={2} style={{width: '230px'}}>
              <FormControl
                type="text"
                value={this.state.name}
                placeholder="Character Name"
                onChange={this.handleChange} />
            </Col>
          </FormGroup>
        </div>
        )}

        <FormGroup className='noSelect'>
        	<Col smOffset={2} sm={1} className='formTitle'>Stats</Col>
        	<Col sm={1} className='inputContainer2'>{this.state.statAllocation}</Col>
        </FormGroup>
        <FormGroup>
	    		{Object.keys(hero.stats).map((k, i) =>
            <Col smOffset={2}>
  	    			<Entry {...this.props}
      					group='stats'
      					stat={k}
      					updateAllocation={this.changeStat}
      					allocation={this.state.statAllocation}
                highCap={statHighCap}
                lowCap={statLowCap}
      					key={i}/>
            </Col>)}
				</FormGroup>

				<FormGroup className='noSelect'>
	        	<Col smOffset={2} sm={1} className='formTitle'>Skills</Col>
	        	<Col sm={1} className='inputContainer2'>{this.state.skillAllocation}</Col>
        </FormGroup>
        <FormGroup>
				 	{Object.keys(hero.skills).map((k, i) =>
            <Col smOffset={2}>
  				 		<Entry {...this.props}
  				 		  group='skills'
  				 		  stat={k}
  				 		  updateAllocation={this.changeSkill}
  				 		  allocation={this.state.skillAllocation}
                highCap={skillHighCap}
                lowCap={skillLowCap}
  				 		  key={i}/>
            </Col>)}
				</FormGroup>

				<FormGroup>
          <Col smOffset={3}>
            <Link to='/map' onClick={this.props.submitCharacter.bind(null, this.state.name, this.props.submit)}>Continue</Link>
          </Col>
		    </FormGroup>
		  </Form>
		)
	}
});

export default CharacterForm;

