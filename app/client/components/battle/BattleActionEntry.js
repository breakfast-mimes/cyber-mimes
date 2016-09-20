import React from 'react';
import actions from './battleActions'

const BattleActionEntry = React.createClass({
  render() {
    const {action, hero, enemy, id} = this.props
    return (
      <div className="battleActionEntry noSelect">
        <div onClick={() => {this.props[action](hero, enemy, id)}}>
          {actions[action].name}
        </div>
      </div>
    )
  }
})

export default BattleActionEntry;