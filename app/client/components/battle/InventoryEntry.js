import React from 'react';

const InventoryEntry = React.createClass({
  render() {
    const {equip, equipment, i} = this.props
    return (
      <div className="actionEntry noSelect">
        <div onClick={equip.bind(null, equipment, i)}>
          <span>{equipment.name}</span>
          <span>{equipment.e ? " (E)" : ""}</span>
        </div>
      </div>
    )
  }
})

export default InventoryEntry;