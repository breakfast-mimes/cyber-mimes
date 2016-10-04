import React from 'react';

import InventoryEntry from './InventoryEntry'

const Inventory = React.createClass({
  render() {
    const {equip, dropItem, hero, style} = this.props
    console.log("style in inv", style)
    return (
      <div style={style} className="battleInventory">
        <span className="actionGroupHeader">Inventory</span>
        {Object.keys(hero.inventory).map((item, i) =>
          <InventoryEntry equip={equip} dropItem={dropItem} equipment={hero.inventory[item]} key={i} i={i}/>)}
      </div>
    )
  }
})

export default Inventory;