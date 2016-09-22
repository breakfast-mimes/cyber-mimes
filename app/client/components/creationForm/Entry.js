import React from 'react';
import statMap from './statMap'
import _ from 'underscore'

let timeoutId;
const holdRefreshRate = 100;

const Entry = React.createClass({
  getInitialState () {
      return {
        statLowCap: this.props.statLowCap || this.props.hero.stats[this.props.stat] || 0,
        skillLowCap: this.props.skillLowCap || this.props.hero.skills[this.props.skill] || 0,
        statHighCap: this.props.statHighCap,
        skillHighCap: this.props.skillHighCap
      };
  },

  decrement(group, stat, amount) {
    if((group === 'stats' && this.props.hero[group][stat] > (this.state.statLowCap))
     ||(group === 'skills' && this.props.hero[group][stat] > (this.state.skillLowCap))) {
      this.props.updateAllocation(1);
      this.props.updateCharacter(group, stat, amount);
    }
  },

  increment(group, stat, amount) {
    if(this.props.allocation > 0
     && ((group === 'stats' && this.props.hero[group][stat] < this.state.statHighCap)
     || (group === 'skills' && this.props.hero[group][stat] < this.state.skillHighCap))) {
      this.props.updateAllocation(-1);
      this.props.updateCharacter(group, stat, amount);
    }
  },

  holdListener(func) {
    func();
    timeoutId = setInterval(func, holdRefreshRate);
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
