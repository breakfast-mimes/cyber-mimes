import React from 'react';

export default class Inventory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render(){
    const {item} = this.props
    console.log(this.props)
    return(
      <div className="invItem">
          |name:{item.name}|damage:{item.dmg}|stat:{item.stat}|type:{item.type}
      </div>
    )
  }
}