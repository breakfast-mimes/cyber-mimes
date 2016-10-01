import React from 'react';

const Entry = React.createClass({
  render() {
    const {equipment} = this.props
    return (
      <div className="actionEntry noSelect">
        {Object.keys(equipment).map((item, i) =>
          <span>{item}:{equipment[item]} </span>)}
      </div>
    )
  }
})

export default Entry;