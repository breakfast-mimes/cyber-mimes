import React from 'react';

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
        <h2>Character Creation</h2>
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