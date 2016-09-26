import React from 'react';

const HealthBar = React.createClass({
  render() {
    const {health, color, max} = this.props
    return (
      <div className="buildHealthBar noSelect">
        <span className="healthPercent">{health}</span>
        <div style={
          {
            width: 100 * health * 3 / max  + "px",
            background: color,
            height: 25 + "px"
          }
        }></div>
      </div>
    )
  }
})

export default HealthBar;

// hsl(" + 1.2 * health + ",100% ,20%)