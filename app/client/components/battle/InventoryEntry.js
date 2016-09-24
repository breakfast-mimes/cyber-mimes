import React from 'react';

const InventoryEntry = React.createClass({
  render() {
    const {equip, equipment} = this.props
    return (
      <div className="actionEntry noSelect">
        <div onClick={equip.bind(null, equipment)}>
          {equipment.name}
        </div>
      </div>
    )
  }
})

export default InventoryEntry;