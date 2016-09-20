import React from 'react';
import {battleActions, spells } from './actionNameMap'
const actions = {...battleActions, ...spells}

const ActionEntry = React.createClass({
  render() {
    const {action, hero, enemy, id} = this.props
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