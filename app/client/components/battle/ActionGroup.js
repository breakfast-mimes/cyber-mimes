import React from 'react';
import ActionEntry from './ActionEntry'

const ActionGroup = React.createClass({
  render() {
    const { actions, id, name} = this.props
    return (
      <div className="actionGroup">
        <span className="actionGroupHeader">{name}</span>
        {Object.keys(actions).map((k, i) => <ActionEntry {...this.props} actions={actions} action={k} id={id} key={i}/>)}
      </div>
    )
  }
})

export default ActionGroup;