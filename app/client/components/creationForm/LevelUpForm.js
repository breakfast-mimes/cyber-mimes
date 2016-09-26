import React from 'react';

import CharacterForm from './CharacterForm'

const statAllocation = 2;
const skillAllocation = 10;
const statHighCap = 20;
const skillHighCap = 100;

const CreationForm = React.createClass({
  render() {
    return (
      <div id="creationForm">
        <h2>Level Up! You are now Level {this.props.hero.level.level + 1}</h2>
        <CharacterForm
          {...this.props}
          stat={statAllocation}
          skill={skillAllocation}
          statHighCap={statHighCap}
          skillHighCap={skillHighCap}
          levelUp={true}/>
      </div>
    )
  }
})

export default CreationForm;