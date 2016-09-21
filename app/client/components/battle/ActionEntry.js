import React from 'react';

const ActionEntry = React.createClass({
  render() {
    const {action, hero, enemy, id, actions} = this.props
    return (
      <div className="actionEntry noSelect">
        <div onClick={() => this.props[action](hero, enemy, id)}>
          {actions[action]}
        </div>
      </div>
    )
  }
})

export default ActionEntry;