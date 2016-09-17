import React from 'react';
import statMap from './statMap'

const Entry = React.createClass({
  render() {
  const {group, stat, updateCharacter, hero} = this.props;
    return (
      <div>
        <h2>{statMap[this.props.stat]}</h2>
        <button type = 'button' onClick={updateCharacter.bind(null, group, stat, 1)}>+</button>
        <div>{hero[group][stat]} </div>
        <button type = 'button' onClick={updateCharacter.bind(null, group, stat, -1)}>-</button>
      </div>
    )
  }
})

export default Entry;

