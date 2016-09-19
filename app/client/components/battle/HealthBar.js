import React from 'react';

const HealthBar = React.createClass({
  render() {
    const {health} = this.props
    return (
      <div className="healthBar noSelect">
        <span className="healthPercent">{health + "%"}</span>
        <div className="bar"  style={
            {
              width: health * 2 + "px",
              background: "hsl(" + 1.2 * health + ",100% ,20%)"
            }
        }></div>
      </div>
    )
  }
})

export default HealthBar;