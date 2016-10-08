import React from 'react';
import { PageHeader, Col } from 'react-bootstrap';

import CharacterForm from './CharacterForm'

const statAllocation = 2;
const skillAllocation = 10;
const statHighCap = 20;
const skillHighCap = 100;

const CreationForm = React.createClass({
  render() {
    return (
      <div id="creationForm">
        <PageHeader className='noSelect'>
          <Col smOffset={2}>
            Level Up! <small>You are now Level {this.props.hero.level.level + 1}</small>
          </Col>
        </PageHeader>
        <CharacterForm
          {...this.props}
          stat={statAllocation}
          skill={skillAllocation}
          statHighCap={statHighCap}
          skillHighCap={skillHighCap}
          levelUp={true}
          submit={this.props.putCharacter}/>
      </div>
    )
  }
})

export default CreationForm;