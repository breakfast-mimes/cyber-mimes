import React from 'react';
import actions from './battleActions'

const BattleActionEntry = React.createClass({
  render() {
    const {action, loop} = this.props
    return (
      <div className="battleActionEntry noSelect">
        <div onClick={() => loop(action)}>
          {actions[action].name}
        </div>
      </div>
    )
  }
})

export default BattleActionEntry;