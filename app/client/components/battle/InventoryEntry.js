import React from 'react';

const InventoryEntry = React.createClass({
  render() {
    const {equip, dropItem, equipment, i} = this.props
    return (
      <div className="actionEntry noSelect">
        <div>
          <span onClick={dropItem.bind(null, equipment, i)}>{"X "}</span>
          <span onClick={equip.bind(null, equipment, i)}>{equipment.name}</span>
          <span>{equipment.e ? " (E)" : ""}</span>
        </div>
      </div>
    )
  }
})

export default InventoryEntry;