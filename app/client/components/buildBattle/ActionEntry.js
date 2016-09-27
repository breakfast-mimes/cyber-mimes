import React from 'react';

const ActionEntry = React.createClass({
  render() {
    const {action, hero, enemy, id, actions} = this.props

    return (
      <div className="actionEntry noSelect">
        <div onClick={() => hero.status.health && enemy[id].status.health> 0 ? this.props[action](hero, enemy, id) : null}>
          {actions[action]}
        </div>
      </div>
    )
  }
})

export default ActionEntry;