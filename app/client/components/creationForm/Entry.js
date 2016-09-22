import React from 'react';
import statMap from './statMap'
import _ from 'underscore'

let timeoutId;
const holdRefreshRate = 100;

const Entry = React.createClass({
  getInitialState () {
      return {
        lowCap: this.props.lowCap || this.props.hero[this.props.group][this.props.stat],
        highCap: this.props.highCap,
      };
  },

  decrement(group, stat, amount) {
    if(this.props.hero[group][stat] > (this.state.lowCap)) {
      this.props.updateAllocation(1);
      this.props.updateCharacter(group, stat, amount);
    }
  },

  increment(group, stat, amount) {
    if(this.props.allocation > 0
     && (this.props.hero[group][stat] < this.state.highCap)) {
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
