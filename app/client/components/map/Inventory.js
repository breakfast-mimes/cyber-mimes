import React from 'react';

export default class Inventory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render(){
    const {item, equip, i} = this.props

    return(
      <div className="invItem" onClick={equip.bind(null, item, i)}>
          |name:{item.name}|damage:{item.dmg}|stat:{item.stat}|type:{item.type}
          <span>{item.e ? " (E)" : ""}</span>
      </div>
    )
  }
}