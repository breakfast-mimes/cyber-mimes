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
          <span>name:{item.name} </span>
          <span>damage:{item.dmg} </span>
          <span>stat:{item.stat} </span>
          <span>type:{item.type} </span>
      </div>
    )
  }
}