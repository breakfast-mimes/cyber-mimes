import React from 'react';

const HealthBar = React.createClass({
  render() {
    const {health} = this.props
    return (
      <div className="healthBar noSelect">
        <span className="healthPercent">{health + "%"}</span>
        <div style={
          {
            width: health * 3 + "px",
            background: "hsl(" + 1.2 * health + ",100% ,20%)",
            height: 25 + "px"
          }
        }></div>
      </div>
    )
  }
})

export default HealthBar;