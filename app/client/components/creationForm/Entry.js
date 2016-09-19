import React from 'react';
import statMap from './statMap'

const Entry = React.createClass({
  render() {
  const {group, stat, updateCharacter, hero, allocation} = this.props;
    return (
      <div className='creationEntry'>
        <div className='statTitle noSelect'>{statMap[this.props.stat]}</div>
        <div onClick={updateCharacter.bind(null, group, stat, -1)} className='createInput noSelect'>-</div>
        <div className='createInput noSelect'>{hero[group][stat]} </div>
        <div onClick={updateCharacter.bind(null, group, stat, 1)} className='createInput noSelect'>+</div>
      </div>
    )
  }
})

export default Entry;