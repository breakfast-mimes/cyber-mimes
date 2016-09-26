import React from 'react';

const HealthBar = React.createClass({
  render() {
    let {health, color, max, style} = this.props
    if (!(style && style.display)) {
      style = {
        width: 100 * health * 3 / max  + "px",
        background: color,
        height: 25 + "px"
      }
    }
    return (
      <div className="healthBar noSelect">
        <span className="healthPercent">{health}</span>
        <div style={style
        }></div>
      </div>
    )
  }
})

export default HealthBar;

// hsl(" + 1.2 * health + ",100% ,20%)