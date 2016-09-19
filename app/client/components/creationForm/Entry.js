import React from 'react';
import statMap from './statMap'

let timeoutId;

const statLowCap = 3;
const statHighCap = 10;
const skillLowCap = 0;
const skillHighCap = 30;

const Entry = React.createClass({

  decrement(group, stat, amount) {
    if((group === 'stats' && this.props.hero[group][stat] > statLowCap)
     ||(group === 'skills' && this.props.hero[group][stat] > skillLowCap)) {
      this.props.updateAllocation(1);
      this.props.updateCharacter(group, stat, amount);
    }
  },

  increment(group, stat, amount) {
    if(this.props.allocation > 0
     && ((group === 'stats' && this.props.hero[group][stat] < statHighCap)
     || (group === 'skills' && this.props.hero[group][stat] < skillHighCap))) {
      this.props.updateAllocation(-1);
      this.props.updateCharacter(group, stat, amount);
    }
  },

  holdListener(func) {
    func();
    timeoutId = setInterval(func, 100);
  },

  leaveListener() {
    clearTimeout(timeoutId);
  },

  mouseUpListener() {
    clearTimeout(timeoutId);
  },

  render() {
  const {group, stat, updateCharacter, hero} = this.props;
    return (
      <div className='creationEntry'>
        <div className='statTitle noSelect'>{statMap[this.props.stat]}</div>
        <div onMouseDown={this.holdListener.bind(this, this.decrement.bind(null, group, stat, -1))} onMouseUp={this.mouseUpListener} onMouseLeave={this.leaveListener} className='createInput noSelect'>-</div>
        <div className='createInput noSelect'>{hero[group][stat]} </div>
        <div onMouseDown={this.holdListener.bind(this, this.increment.bind(null, group, stat, 1))} onMouseUp={this.mouseUpListener} onMouseLeave={this.leaveListener} className='createInput noSelect'>+</div>
      </div>
    )
  }
})

export default Entry;
