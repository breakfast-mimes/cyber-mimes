import React from 'react';
import { PageHeader, Col } from 'react-bootstrap';

import CharacterForm from './CharacterForm'

const statAllocation = 10;
const skillAllocation = 40;
const statLowCap = 3;
const statHighCap = 10;
const skillLowCap = 0;
const skillHighCap = 30;

const CreationForm = React.createClass({
  render() {
    return (
      <div id="creationForm">
        <PageHeader className='noSelect'>
          <Col smOffset={2}>
            Character Creation
          </Col>
        </PageHeader>
        <CharacterForm
          {...this.props}
          stat={statAllocation}
          skill={skillAllocation}
          statLowCap={statLowCap}
          statHighCap={statHighCap}
          skillLowCap={skillLowCap}
          skillHighCap={skillHighCap}
          submit={this.props.postCharacter}/>
      </div>
    )
  }
})

export default CreationForm;